/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['./src/**/*.ts'],
  coveragePathIgnorePatterns: ['./src/server.ts'],
};

export default config;
