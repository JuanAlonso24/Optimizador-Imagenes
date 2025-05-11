import fse from "fs-extra";
import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imagenminGifsicle from "imagemin-gifsicle";
import sharp from "sharp";

let inputFolder = "src";
let outputFolder = "opt";
let targetWidth = 1920;

const processImage = async () => {
  try {
    const files = await fse.readdir(inputFolder);

    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      await imagemin([outputPath], {
        destination: outputFolder,
        plugins: [
          imageminJpegtran({ quality: 80 }), //Comprime imagen JPG con calidad del 80%;
          imageminPngquant(), // Comprimer la imagen PNG,
          imageminSvgo(), //Comprimer la imagen SVG
          imageminWebp({ quality: 80 }), // comprimer la imagen WebP con calidad del 80%
          imagenminGifsicle(), //Comprimir imagen GIF;
        ],
      });
      console.log("Se Ha Optimizado La Imagen" + file);
    }
  } catch (err) {
    console.log("Hubo un error: ", err);
  }
};

processImage();
