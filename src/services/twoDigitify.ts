export default function twoDigitify(n: number): string {
  return n > 9 ? '' + n : '0' + n;
};
