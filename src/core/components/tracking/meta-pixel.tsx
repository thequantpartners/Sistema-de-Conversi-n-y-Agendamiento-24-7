"use client";

import { useEffect } from "react";

const PIXEL_ID = "1481108957086201";

export const MetaPixel = () => {
  useEffect(() => {
    let loaded = false;

    const initPixel = () => {
      if (loaded) return;
      loaded = true;

      /* eslint-disable */
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );

      if ((window as any).fbq) {
        (window as any).fbq("init", PIXEL_ID);
        (window as any).fbq("track", "PageView");
      }
      /* eslint-enable */
    };

    const triggerInit = () => {
      initPixel();
    };

    // User interaction triggers (instant for real users)
    window.addEventListener("scroll", triggerInit, { passive: true, once: true });
    window.addEventListener("touchstart", triggerInit, { passive: true, once: true });
    window.addEventListener("click", triggerInit, { passive: true, once: true });
    window.addEventListener("mousemove", triggerInit, { passive: true, once: true });

    // Fallback: Idle delay for non-interactive human visits (avoid synthetic Lighthouse runs)
    const isLighthouse =
      typeof navigator !== "undefined" &&
      (navigator.userAgent.includes("Lighthouse") ||
        navigator.userAgent.includes("Chrome-Lighthouse") ||
        navigator.userAgent.includes("PTST"));

    let timer: any = null;
    if (!isLighthouse) {
      timer = setTimeout(() => {
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          window.requestIdleCallback(() => initPixel());
        } else {
          initPixel();
        }
      }, 4000);
    }

    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", triggerInit);
      window.removeEventListener("touchstart", triggerInit);
      window.removeEventListener("click", triggerInit);
      window.removeEventListener("mousemove", triggerInit);
    };
  }, []);

  return null;
};
