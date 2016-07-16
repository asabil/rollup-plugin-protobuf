import buble from 'rollup-plugin-buble';


const external = Object.keys( require( './package.json' ).dependencies || {} );

export default {
	entry: 'src/index.js',
	plugins: [ buble() ],
	external: external,
	targets: [
		{ dest: 'dist/rollup-plugin-protobuf.cjs.js', format: 'cjs' },
		{ dest: 'dist/rollup-plugin-protobuf.es.js', format: 'es' }
	]
};
