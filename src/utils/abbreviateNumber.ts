export function abbreveateNumber(n: number, d: number) {
  let x = ('' + n).length;
  let p = Math.pow;
  d = p(10, d);
  x -= x % 3;
  return Math.round((n * d) / p(10, x)) / d + ' kMGTPE'[x / 3];
}
