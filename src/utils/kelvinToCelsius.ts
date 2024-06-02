export function kelvinToCelsius(tempInK: number): number {
  const tempInC = tempInK - 273.15;
  return Math.floor(tempInC);
}
