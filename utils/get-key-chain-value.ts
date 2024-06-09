export function getKeyChainValue(keyChain: string, data: any): unknown {
	const parts = String(keyChain).split(".");
	const key = parts.shift() as string;
	const value = data[key];

	if (parts.length) {
		if (value && typeof value === "object") {
			return getKeyChainValue(parts.join("."), value);
		}

		throw new Error(`Cannot get "${parts.join(".")}" of ${value}`);
	}

	return value;
}
