# Quant Partners · Plantilla Maestra para WordPress (Blueprint)

Esta carpeta contiene la arquitectura completa para desplegar sistemas de conversión y agendamiento 24/7 en cualquier instancia de WordPress (Local, VPS Coolify, Hosting cPanel/Hostinger o WordPress existente).

---

## 📦 Componentes Incluidos

1. **`quant-canvas/` (Tema Ultraligero Zero-Bloat):**
   - Elimina el 100% de las restricciones y estilos lentos de temas comerciales (Astra/Divi/Elementor).
   - Inyecta nativamente **Tailwind CSS**, Google Fonts (**Inter** + **JetBrains Mono**) y **Lucide SVG Icons**.
   - Garantiza renderizado **Edge-to-Edge** en modo oscuro `#09090b` con **PageSpeed 98-100**.

2. **`master-template.html` (Plantilla Visual Lista):**
   - Maquetación probada con Hero, Mecanismo 3 Pasos, Filtro Interactivo de 4 Pasos, Calendario y Footer Legal.

3. **`quant-blueprint.html` (Plantilla Parametrizada con Variables):**
   - Contiene los placeholders (`{{BRAND_NAME}}`, `{{NICHE_QUESTIONS}}`, `{{CALCOM_LINK}}`, `{{WHATSAPP_NUMBER}}`, etc.) para generación automática por IA en 10 segundos.

---

## ⚡ Guía de Despliegue Rápido (10 Minutos)

1. **Subir Tema:** Copiar la carpeta `quant-canvas/` a `wp-content/themes/` y activarla.
2. **Crear Página:** Crear una página en WordPress llamada "Inicio" o "Agenda" y pegar el contenido HTML generado.
3. **Asignar Portada:** Ir a *Ajustes* → *Lectura* → *Tu portada muestra una página estática* y seleccionar la página creada.
4. **Vincular Dominio:** Apuntar el registro DNS `A` o `CNAME` al servidor.
