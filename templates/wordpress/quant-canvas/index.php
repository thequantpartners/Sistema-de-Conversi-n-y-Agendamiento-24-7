<!DOCTYPE html>
<html <?php language_attributes(); ?> class="dark">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    fontFamily: {
                        sans: ["Inter", "system-ui", "sans-serif"],
                        mono: ["JetBrains Mono", "monospace"],
                    },
                    colors: {
                        zinc: {
                            850: "#1f1f23",
                            900: "#18181b",
                            950: "#09090b",
                        }
                    }
                }
            }
        }
    </script>
    <style>
        * {
            box-sizing: border-box;
        }
        html, body {
            background-color: #09090b !important;
            color: #f4f4f5 !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
            overflow-x: hidden;
            font-family: 'Inter', system-ui, -apple-system, sans-serif !important;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
    <?php wp_head(); ?>
</head>
<body class="bg-[#09090b] text-[#f4f4f5] antialiased">
    <?php
    if (have_posts()) :
        while (have_posts()) : the_post();
            the_content();
        endwhile;
    endif;
    ?>
    <?php wp_footer(); ?>
    <script>
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    </script>
</body>
</html>
