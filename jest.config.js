module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/components/**/*mock*.ts',
    '!src/types/**/*'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  },
  watchPathIgnorePatterns: [
    'stories.tsx'
  ]
}
