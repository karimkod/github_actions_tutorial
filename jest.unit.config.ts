import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./tests/unit'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: `./tests/reports/unit-coverage-report--${Date.now()}`,
  coverageReporters: ['text', 'html']
}

export default config;