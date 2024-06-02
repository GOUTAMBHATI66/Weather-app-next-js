export function MakeImageFromIcon(weatherType: string): string {
  let weatherImg = "";

  switch (weatherType) {
    case "Clear":
      weatherImg = "clear.png";
      break;

    case "Clouds":
      weatherImg = "clouds.png";
      break;

    case "Haze":
      weatherImg = "haze.png";
      break;

    case "Mist":
      weatherImg = "mist.png";
      break;

    case "Rain":
      weatherImg = "rain.png";
      break;

    case "Snow":
      weatherImg = "snow.png";
      break;
  }

  return `${weatherImg}`;
}
