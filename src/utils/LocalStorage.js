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
    window.localStorage.setItem(key, value);
}

export function storageRemove(key) {
    window.localStorage.removeItem(key);
}
