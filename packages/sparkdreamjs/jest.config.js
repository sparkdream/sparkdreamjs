/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                babelConfig: false,
                tsconfig: "tsconfig.json",
            },
        ],
        // ESM-only deps (@noble/*, @scure/*) must be transpiled to CJS for jest
        "^.+\\.m?js$": [
            "ts-jest",
            {
                babelConfig: false,
                tsconfig: { allowJs: true, module: "commonjs", target: "es2020", esModuleInterop: true },
            },
        ],
    },
    // don't skip transforming @noble/@scure (ESM-only), even when nested
    // under another dependency's node_modules
    transformIgnorePatterns: ["/node_modules/(?!.*(@noble|@scure)/)"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    modulePathIgnorePatterns: ["dist/*"],
    // git-modules is the proto downloader's clone cache — upstream repos
    // carry their own test suites that must not run here
    testPathIgnorePatterns: ["/node_modules/", "/git-modules/", "/dist/"]
};
