module.exports = {
  automock: false,
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'css', 'scss'],
  testMatch: ['**/**/*.test.ts', '**/**/*.test.tsx'],
  testEnvironment: 'jsdom',
  testTimeout: 15000,
  coveragePathIgnorePatterns: [
    'node_modules',
    'coverage',
    '/__.*__/',
    'jest.config.js',
    './src/types'
  ],
  collectCoverage: false,
  collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^state/(.*)$': '<rootDir>/src/state/$1',
    '^styles/(.*)$': '<rootDir>/src/styles/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '^store$': '<rootDir>/src/store'
  }
};
