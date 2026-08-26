import { getProjectConfig } from "@/core/engine/get-project";
import { LandingPage } from "@/core/components/landing-page";

export const dynamic = "force-static";
export const revalidate = false;

export default function Home() {
  const config = getProjectConfig();

  return <LandingPage config={config} />;
}
