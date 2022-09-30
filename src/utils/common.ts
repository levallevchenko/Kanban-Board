export const getCssValue = (value: string, units: string) => `${value}${units}`;

export const getSize = ([value, units]: [string, string]) => {
  const size = getCssValue(value, units);
  return {
    width: size,
    height: size
  }
};
