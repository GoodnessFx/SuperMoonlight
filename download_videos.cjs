const https = require('https');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://videos.pexels.com/video-files/3840442/3840442-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/2811059/2811059-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/6010721/6010721-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/6129188/6129188-hd_1920_1080_30fps.mp4'
];

const filenames = ['video1.mp4', 'video2.mp4', 'video3.mp4', 'video4.mp4'];
const dir = path.join(__dirname, 'public', 'videos');

if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  for (let i = 0; i < urls.length; i++) {
    console.log(`Downloading ${filenames[i]}...`);
    try {
      await download(urls[i], path.join(dir, filenames[i]));
      console.log(`Successfully downloaded ${filenames[i]}`);
    } catch (e) {
      console.error(e.message);
    }
  }
}

main();
