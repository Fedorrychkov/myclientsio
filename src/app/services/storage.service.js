import storage from 'local-storage-fallback';

export default class StorageService {
    set(key, data) {
        data = JSON.stringify(data);
        storage.setItem(key, data);
        console.log(key, data);
    }

    get(key) {
        return JSON.parse(storage.getItem(key));
    }

    remove(key) {
        storage.removeItem(key);
    }

    clear() {
        storage.clear();
    }

    has(key) {
        return this.get(key) ? true : false;
    }
}
