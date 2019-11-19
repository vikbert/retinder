export function storageHas(key) {
    return window.localStorage.getItem(key) !== null;
}

export function storageGet(key, asObject = false) {
    const string = window.localStorage.getItem(key);

    if (asObject) {
        return JSON.parse(string);
    }

    return string;
}

export function storageSet(key, value) {
    let data = value;
    if (typeof value !== 'string') {
        data = JSON.stringify(value);
    }

    window.localStorage.setItem(key, data);
}

export function storageRemove(key) {
    window.localStorage.removeItem(key);
}
