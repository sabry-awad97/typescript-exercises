export function humanSize(filesize: number): string {
  const units = ['Byte', 'Kilobyte', 'Megabyte', 'Gigabyte', 'Terabyte'];

  const index = Math.floor(Math.log10(filesize) / 3);

  const filesizeHuman = (filesize / 1000 ** index).toFixed(2);

  const ret = `${filesizeHuman} ${units[index]}`;

  return ret;
}
