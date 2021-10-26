module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
}