# 📷 Optimizador de Imágenes con Node.js

Este proyecto es una herramienta de línea de comandos desarrollada en Node.js que **redimensiona** y **comprime** imágenes automáticamente. Utiliza las librerías `sharp` e `imagemin` para lograr una optimización eficiente sin perder calidad visual.

## 🚀 Características

- ✅ Redimensiona imágenes a un ancho fijo (por defecto 1920px)
- ✅ Comprime imágenes en formatos: JPG, PNG, SVG, WebP y GIF
- ✅ Soporte para múltiples tipos de imagen
- ✅ Automatización por carpeta de entrada/salida

## 🛠️ Tecnologías usadas

- [Node.js](https://nodejs.org/)
- [Sharp](https://sharp.pixelplumbing.com/)
- [Imagemin](https://github.com/imagemin/imagemin)
- [fs-extra](https://www.npmjs.com/package/fs-extra)

## 📂 Estructura del proyecto

.
├── src/ # Carpeta de entrada con imágenes originales
├── opt/ # Carpeta de salida con imágenes optimizadas
├── index.js # Script principal de optimización
├── package.json

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/optimizador-imagenes.git

cd optimizador-imagenes

```

2. Instala las dependencias:
   npm install

NOTA: Asegúrate de tener Node.js v18.8.0 o superior para evitar errores de compatibilidad.

▶️ Uso
1.- Coloca las imágenes que deseas optimizar en la carpeta src/.

2.- Ejecuta el script:
npm start

3.- Las imágenes optimizadas se guardarán automáticamente en la carpeta opt/.

⚙️ Configuración
Puedes ajustar la carpeta de entrada, salida o el tamaño objetivo modificando estas variables en index.js:

let inputFolder = "src";
let outputFolder = "opt";
let targetWidth = 1920;

📌 Notas
El script funciona mejor con imágenes en formatos JPG, PNG, SVG, WebP y GIF.

Las carpetas src/ y opt/ deben existir antes de ejecutar el script.

Si tienes problemas al ejecutar npm, verifica tu política de ejecución en PowerShell:

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

📝 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo libremente para tus proyectos personales o comerciales.


Hecho con ❤️ por Juan Alonso :P