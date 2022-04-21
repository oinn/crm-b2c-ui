module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^.+\\.(css|scss|less)$': '<rootDir>/src/mocks/style.js',
  },
};
