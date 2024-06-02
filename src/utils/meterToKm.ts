export function meterToKm(visibilityInM: number): string {
  const visibilityInKm = visibilityInM / 1000;
  return `${visibilityInKm.toFixed(0)} km`;
}
