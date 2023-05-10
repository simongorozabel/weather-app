const FACTOR_CONVERSION = 273.15;
export const kelvinToCelsius = (K) => {
  return (K - FACTOR_CONVERSION).toFixed(2);
};
