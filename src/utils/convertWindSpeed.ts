export function convertWindSpeed(windSpeedInMPS: number): string {
  const windSpeedInKPH = windSpeedInMPS * 3.6;
  return `${windSpeedInKPH.toFixed(0)}km/h`;
}
