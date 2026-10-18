// localStorage can throw (private mode, blocked cookies), so wrap it once here.
export function readStorage(key, fallback) {
	try {
		return localStorage.getItem(key) || fallback;
	} catch (e) {
		return fallback;
	}
}

export function writeStorage(key, value) {
	try {
		localStorage.setItem(key, value);
	} catch (e) {}
}
