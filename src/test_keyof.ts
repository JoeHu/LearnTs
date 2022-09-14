const user_keyof = {
	id: 666,
	name: 'huxiaozhou',
};

function getProperty<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}
const age = getProperty(user_keyof, 'id');

enum HttpMethod {
	Get,
	Post,
}

type Method = keyof typeof HttpMethod;

type k1 = keyof number;

type function_type  = typeof getProperty;

