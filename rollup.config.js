import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json'

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/_r.js',
        format: 'umd',
        name: '_r',
        sourcemap : true,
        intro : 'console.log("_r v' + pkg.version + '")'
    },
    plugins: [
        typescript()
    ]
};