
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const NODE: string;
	export const ANDROID_HOME: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_devDependencies_typescript: string;
	export const INIT_CWD: string;
	export const TERM: string;
	export const SHELL: string;
	export const npm_package_devDependencies_vite: string;
	export const SEHLAT_NEXUS_APIKEY: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const SEHLAT_NEXUS_PASSWORD: string;
	export const MSBUILDSINGLELOADCONTEXT: string;
	export const JENV_FORCEJAVAHOME: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_registry: string;
	export const ZSH: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const CI_JOB_TOKEN: string;
	export const COMMAND_MODE: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const ZAFIRE_TOKEN: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const PAGER: string;
	export const npm_package_devDependencies_svelte: string;
	export const BJB_DIAS_CLI: string;
	export const LSCOLORS: string;
	export const npm_config_frozen_lockfile: string;
	export const PATH: string;
	export const LaunchInstanceID: string;
	export const __CFBundleIdentifier: string;
	export const PWD: string;
	export const JENV_LOADED: string;
	export const npm_command: string;
	export const JAVA_HOME: string;
	export const npm_package_scripts_preview: string;
	export const npm_config__iap_registry: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies__tsconfig_svelte: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_start: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const JENV_FORCEJDKHOME: string;
	export const FORCE_COLOR: string;
	export const SEHLAT_NEXUS_USERNAME: string;
	export const npm_config__ccx_registry: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const JDK_HOME: string;
	export const HOME: string;
	export const npm_package_type: string;
	export const SHLVL: string;
	export const HOMEBREW_PREFIX: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const JENV_SHELL: string;
	export const npm_config_color: string;
	export const npm_lifecycle_script: string;
	export const LC_CTYPE: string;
	export const NVM_BIN: string;
	export const npm_config_user_agent: string;
	export const INFOPATH: string;
	export const HOMEBREW_CELLAR: string;
	export const SECURITYSESSIONID: string;
	export const npm_package_scripts_check: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		NODE: string;
		ANDROID_HOME: string;
		NVM_CD_FLAGS: string;
		npm_package_devDependencies_typescript: string;
		INIT_CWD: string;
		TERM: string;
		SHELL: string;
		npm_package_devDependencies_vite: string;
		SEHLAT_NEXUS_APIKEY: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		SEHLAT_NEXUS_PASSWORD: string;
		MSBUILDSINGLELOADCONTEXT: string;
		JENV_FORCEJAVAHOME: string;
		npm_package_private: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_registry: string;
		ZSH: string;
		NVM_DIR: string;
		USER: string;
		CI_JOB_TOKEN: string;
		COMMAND_MODE: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		PNPM_SCRIPT_SRC_DIR: string;
		ZAFIRE_TOKEN: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		PAGER: string;
		npm_package_devDependencies_svelte: string;
		BJB_DIAS_CLI: string;
		LSCOLORS: string;
		npm_config_frozen_lockfile: string;
		PATH: string;
		LaunchInstanceID: string;
		__CFBundleIdentifier: string;
		PWD: string;
		JENV_LOADED: string;
		npm_command: string;
		JAVA_HOME: string;
		npm_package_scripts_preview: string;
		npm_config__iap_registry: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies__tsconfig_svelte: string;
		NODE_PATH: string;
		npm_package_scripts_start: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		JENV_FORCEJDKHOME: string;
		FORCE_COLOR: string;
		SEHLAT_NEXUS_USERNAME: string;
		npm_config__ccx_registry: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		JDK_HOME: string;
		HOME: string;
		npm_package_type: string;
		SHLVL: string;
		HOMEBREW_PREFIX: string;
		LOGNAME: string;
		LESS: string;
		JENV_SHELL: string;
		npm_config_color: string;
		npm_lifecycle_script: string;
		LC_CTYPE: string;
		NVM_BIN: string;
		npm_config_user_agent: string;
		INFOPATH: string;
		HOMEBREW_CELLAR: string;
		SECURITYSESSIONID: string;
		npm_package_scripts_check: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
