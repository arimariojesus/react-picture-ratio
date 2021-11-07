import {
  convertAspectRatioToPercentage,
  DEFAULT_RATIO_VALUE,
} from '../src/utils/convertAspectRatioToPercentage';

describe('convertAspectRatioToPercentage', () => {
  it('should returns the default value', () => {
    expect(convertAspectRatioToPercentage('')).toBe(DEFAULT_RATIO_VALUE);
    expect(convertAspectRatioToPercentage('4-3')).toBe(DEFAULT_RATIO_VALUE);
    expect(convertAspectRatioToPercentage('4&3')).toBe(DEFAULT_RATIO_VALUE);
    expect(convertAspectRatioToPercentage('4 3')).toBe(DEFAULT_RATIO_VALUE);
  });

  it('should returns expected value', () => {
    expect(convertAspectRatioToPercentage('4:3')).toBe('75.00%');
    expect(convertAspectRatioToPercentage('4/3')).toBe('75.00%');

    expect(convertAspectRatioToPercentage('14:9')).toBe('64.29%');
    expect(convertAspectRatioToPercentage('14/9')).toBe('64.29%');

    expect(convertAspectRatioToPercentage('21:9')).toBe('42.86%');
    expect(convertAspectRatioToPercentage('21/9')).toBe('42.86%');
  });
});
