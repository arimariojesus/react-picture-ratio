module.exports = {
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest"
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  coverageDirectory: "coverage",
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}
