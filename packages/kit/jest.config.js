module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    '^(@/)?(.*)(css|scss|less)$': '<rootDir>/src/mocks/style.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
