export const DEFAULT_RATIO_VALUE = '56.25%';

export const convertAspectRatioToPercentage = (ratio: string) => {
  const separator = ratio.indexOf(':') !== -1 ? ':' : '/';
  const values = ratio.split(separator).map(value => Number(value.trim()));

  if (values.length === 2) {
    const percentageValue = (values[1] / values[0]) * 100;
    const percentage = `${percentageValue.toFixed(2)}%`;

    return percentage;
  }

  return DEFAULT_RATIO_VALUE;
};
