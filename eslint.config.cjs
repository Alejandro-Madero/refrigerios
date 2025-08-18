const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const {
    includeIgnoreFile,
    fixupConfigRules,
} = require("@eslint/compat");

const path = require("node:path");
const globals = require("globals");
const reactRefresh = require("eslint-plugin-react-refresh");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const gitignorePath = path.resolve(__dirname, ".gitignore");
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([includeIgnoreFile(gitignorePath), {
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: fixupConfigRules(compat.extends(
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "standard",
        "standard-jsx",
        "prettier",
    )),

    settings: {
        react: {
            version: "18.2",
        },
    },

    plugins: {
        "react-refresh": reactRefresh,
    },

    rules: {
        "react-refresh/only-export-components": "warn",
        "react/prop-types": "off",
        'array-bracket-spacing': ['error', 'always'],
    },
}, globalIgnores(["**/dist", "**/.eslintrc.cjs"])]);
