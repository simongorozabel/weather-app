import { kelvinToCelsius } from "./kelvinToCelsius";

export const kelvinToFarenheit = (K) => {
  const celsius = kelvinToCelsius(K);
  const FARENHEIT_CONVERSION = 9 / 5;
  const FARENHEIT_FARENHEIT = 32;

  return (celsius * FARENHEIT_CONVERSION + FARENHEIT_FARENHEIT).toFixed(2);
};
