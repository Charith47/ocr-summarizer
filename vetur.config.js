// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {
	settings: {
		'vetur.useWorkspaceDependencies': true,
		'vetur.experimental.templateInterpolationService': true,
	},
	projects: [
		{
			root: './client',
			package: './package.json',
			globalComponents: ['./src/components/**/*.vue'],
		},
	],
};
