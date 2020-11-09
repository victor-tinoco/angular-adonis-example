export enum Endpoints {
	PROFILE = `account`,
	PROFILE_PASSWORD = `account/password`,
	LOGIN_RESET_PASSWORD = `reset-password`,
	SESSION = `sessions`,
	USERS = `users`,
	CEAP = `ceaps`,

	// 'Autor'
	JOBS = 'fields/jobs',
	INSTITUTIONS = 'fields/institutions',
	// 'Vítima'
	OCUPATIONS = 'fields/ocupations',
	RELIGIONS = 'fields/religions',
	NATIONALITIES = 'fields/nationalities',
	// 'Lesão'
	CONDUCTS = 'fields/conducts',
	INSTRUMENTS = 'fields/instruments',
	CRIMES = 'fields/crimes',
	NATURE_LESION = 'fields/nature-lesion',
	// 'Fonte / Depoimento'
	SOURCE_KINDS = 'fields/sources-type',
	DEPONENT_KINDS = 'fields/deponents',
	ARTICLES = 'fields/articles',
}
