module.exports = {
  roots: [
    "<rootDir>"
  ],
  transform: {
    ".(ts|tsx)$": "ts-jest"
  },
  testMatch: [
    "**/tests/**/*.tests.{ts,tsx}"
  ],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
  ],
  coverageReporters: [
    'text',
  ],
  setupFilesAfterEnv: [
    "<rootDir>/tools/jest/setup.ts"
  ],
  moduleNameMapper: {
    ".css$": "identity-obj-proxy",
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json",
      diagnostics: {
        ignoreCodes: [151001]
      }
    }
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer",
    "jest-serializer-html"
  ],
}
