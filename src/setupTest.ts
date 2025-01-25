/// <reference types="vitest/globals" />
import '@testing-library/jest-dom/vitest'

/**
 * For handling `ReferenceError: structuredClone is not defined` jsdom issue
 */
global.structuredClone = (val) => {
  return JSON.parse(JSON.stringify(val))
}
