/* eslint-disable camelcase */
/* eslint-env node */
module.exports = {
	apps: [
		{
			name: 'baktz',
			cwd: '/opt/baktz/current',
			env: {
				NODE_APP_INSTANCE: 'production',
				NODE_CONFIG_DIR: '/opt/baktz/current/config',
				NODE_ENV: 'production',
				NODE_PATH: '/opt/baktz/current',
				NITRO_PORT: 3030,
			},
			script: './.output/server/index.mjs',
		},
	],
}
