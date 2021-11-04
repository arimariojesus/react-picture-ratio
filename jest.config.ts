import { baseJestConfig } from './jest.config.base';

const config = {
  ...baseJestConfig,
  testEnvironment: 'jsdom',
};

export default config;
