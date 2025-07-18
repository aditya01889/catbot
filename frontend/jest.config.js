module.exports = {
  // Use the same module resolution as TypeScript
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  // Explicitly set module directories
  moduleDirectories: ['node_modules', 'src'],
  // Ensure consistent module resolution
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // Reset mocks between tests
  resetMocks: true,
  // Clear mock calls between tests
  clearMocks: true,
  // Set up test environment
  testEnvironment: 'jsdom',
  // Transform settings for TypeScript
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  // Ignore patterns
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
