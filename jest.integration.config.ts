import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./tests/integration'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: `./tests/reports/int-coverage-report-${Date.now()}`,
  coverageReporters: ['text', 'html']
}

export default config;