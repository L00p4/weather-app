export function metersToKilometers(visbilityInMeters: number): string {
  const visbilityInKilometers = visbilityInMeters / 1000;
  return `${visbilityInKilometers.toFixed(0)} km`;
}
