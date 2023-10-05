import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

const config = {
    plugins: [
        json(),
        typescript({
            tsconfig: 'tsconfig.json',
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                declaration: false,
            }
        }),
        commonjs({ extensions: ['.js', '.ts'] }),
        // resolve(),
        // nodeResolve(),
        
        
    ],
    external: [
        /node_modules/,
    ],
}

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'es',
                sourcemap: true,
            }
        ],
        ...config
    },
];