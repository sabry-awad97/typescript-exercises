import fs from 'fs/promises';

export function linesCountPromised(fileName: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName)
      .then(data => {
        resolve(data.toString().split('\n').length);
      })
      .catch(_ => reject('unable to open file ' + fileName));
  });
}
