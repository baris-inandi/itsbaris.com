export function splitmix32(seed: any) {
  console.log(seed);
  if (typeof seed !== "number") {
    seed = Array.from(JSON.stringify(seed)).reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0,
    );
  }
  seed |= 0;
  seed = (seed + 0x9e3779b9) | 0;
  let t = seed ^ (seed >>> 16);
  t = Math.imul(t, 0x21f0aaad);
  t = t ^ (t >>> 15);
  t = Math.imul(t, 0x735a2d97);
  t = t ^ (t >>> 15);
  return (t >>> 0) / 4294967296;
}
