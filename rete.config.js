/* eslint-disable no-undef */

export default {
    input: 'src/index.ts',
    name: 'ReteSelectionPlugin',
    babelPresets: [
        require('@babel/preset-typescript')
    ],
    babelPlugins: [
        require('@babel/plugin-proposal-nullish-coalescing-operator'),
        require('@babel/plugin-proposal-optional-chaining')
    ],
    extensions: ['.ts']
}
