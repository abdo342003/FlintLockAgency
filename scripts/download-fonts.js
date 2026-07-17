import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssUrl = 'https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&display=swap';
const outputDir = path.resolve(__dirname, '../public/fonts');
const outputCssFile = path.resolve(__dirname, '../src/styles/fonts.css');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

https.get(cssUrl, (res) => {
  let cssData = '';
  res.on('data', (chunk) => cssData += chunk);
  res.on('end', () => {
    const urlRegex = /url\(['"]?(https:\/\/[^)'"]+)['"]?\)/g;
    let match;
    const downloadPromises = [];
    
    let processedCss = cssData;

    while ((match = urlRegex.exec(cssData)) !== null) {
      const fontUrl = match[1];
      const fileName = path.basename(fontUrl).split('?')[0];
      const localPath = `/fonts/${fileName}`;
      const filePath = path.join(outputDir, fileName);
      
      processedCss = processedCss.replace(fontUrl, localPath);

      downloadPromises.push(new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        https.get(fontUrl, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(filePath, () => reject(err));
        });
      }));
    }

    Promise.all(downloadPromises).then(() => {
      fs.writeFileSync(outputCssFile, processedCss);
      console.log('Fonts downloaded successfully and CSS generated.');
    }).catch(console.error);
  });
}).on('error', console.error);
