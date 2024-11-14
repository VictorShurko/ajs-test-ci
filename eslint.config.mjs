import globals from 'globals';
import pluginJs from '@eslint/js';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jest from 'eslint-plugin-jest';

/** @type {import('eslint').Linter.Config[]} */

export default [
    pluginJs.configs.recommended,
    {
        ignores: [
            'dist/', '*.json', 'coverage/', 'docs/', 'webpack.config.js'
        ], // отключение проверок для папок
    },
    {
        // определение стандарта и парсинга
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: globals.browser,
        },
    },
    {
        // files: ['src/**/*.js'],
        rules: {
            indent: [
                'error', 4
            ], // отступы, авто
            semi: [
                'error', 'always'
            ], // точка с запятой, авто
            'no-unused-vars': 'off', // не испоьзуемые переменные
            'no-console': 'off', // console.log
            'no-var': 'error',
        },
    },
    {
        files: [ '*.config.*' ], // правила для конфигов
        rules: {
            'no-underscore-dangle': [ 'off' ], // двойное подчеркивание перед/после переменной
            'import/no-extraneous-dependencies': 'off', // импорт из дев-зависимостей
        },
    },
    {
        plugins: { '@stylistic/js': stylisticJs, },
        rules: {
            'max-len': [
                'error', { code: 120 }
            ], // длинна строки, нет авто
            quotes: [
                'error', 'single'
            ], // одинарные кавычки, авто
            'array-bracket-spacing': [
                'error', 'always'
            ], // пробелы внутри массива - авто
            'array-bracket-newline': [
                'error', {
                    'multiline': true, 'minItems': 2
                }
            ], // перенос элементов массива на новые строки, если многоэлементный - авто
            'object-curly-spacing': [
                'error', 'always'
            ], // пробелы внутри объекта
            'object-curly-newline': [
                'error', {
                    'ObjectExpression': {
                        'multiline': true, 'minProperties': 2
                    },
                }
            ], // перенос свойств объекта на новые строки, если много свойств - авто
            'no-multi-spaces': [
                'error',
                {
                    exceptions: {
                        'Property': false,
                        'BinaryExpression': true,
                        'VariableDeclarator': true,
                        'ImportDeclaration': true
                    }
                }
            ], // убираем много пробелов в разных местах, авто
            'key-spacing': [
                'error', { 'mode': 'strict' }
            ],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': [
                'error', {
                    max: 1, // одна внутренняя
                    maxBOF: 1, // одна сверху в импортах
                }
            ], // пустые строки, авто
        },
    },
    {
        files: [ 'src/js/__tests__/**' ],
        ...jest.configs['flat/recommended'],
        rules: {
            ...jest.configs['flat/recommended'].rules,
            'jest/prefer-expect-assertions': 'off',
        },
    },
    // you can also configure jest rules in other objects, so long as some of the `files` match
    {
        files: [ 'src/js/__tests__/**' ],
        rules: { 'jest/prefer-expect-assertions': 'off' },
    },
];