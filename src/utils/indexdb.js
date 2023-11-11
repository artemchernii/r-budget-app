const DB_VERSION = 1;
const DB_NAME = 'budget';

indexedDB.db = null;

indexedDB.onerror = function (e) {
    console.log(e);
};

function open() {
    return new Promise(function (resolve, reject) {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        // We can only create Object stores in a versionchange transaction.
        request.onupgradeneeded = function (e) {
            const db = e.target.result;

            // A versionchange transaction is started automatically.
            e.target.transaction.onerror = indexedDB.onerror;

            if (db.objectStoreNames.contains(DB_NAME)) {
                db.deleteObjectStore(DB_NAME);
            }

            db.createObjectStore(DB_NAME, { keyPath: 'id' });
        };

        request.onsuccess = function (e) {
            indexedDB.db = e.target.result;
            resolve();
        };

        request.onerror = (e) => {
            reject(Error(e));
        };
    });
}

function addItem(item) {
    const db = indexedDB.db;
    const trans = db.transaction([DB_NAME], 'readwrite');
    const store = trans.objectStore(DB_NAME);

    const request = store.put(item);

    request.onsuccess = function (e) {
        console.log('success', { e, item });
    };

    request.onerror = function (e) {
        console.log('Error Adding: ', e);
    };
}

function deleteItem(id) {
    const request = indexedDB.db
        .transaction([DB_NAME], 'readwrite')
        .objectStore(DB_NAME)
        .delete(id);

    request.onsuccess = (event) => {
        console.log('its done', event);
    };
}

function getItems() {
    return new Promise((resolve, reject) => {
        const db = indexedDB.db;
        if (!db) {
            reject(Error('No db'));
        }
        const trans = db.transaction([DB_NAME], 'readwrite');
        const store = trans.objectStore(DB_NAME);

        const getAllRequest = store.getAll();

        getAllRequest.onsuccess = function () {
            resolve(getAllRequest.result);
        };
    });
}

function setFavor(id) {
    const store = indexedDB.db
        .transaction([DB_NAME], 'readwrite')
        .objectStore(DB_NAME);
    const request = store.get(id);
    request.onerror = (event) => {
        console.error('WTF', event.message);
    };

    request.onsuccess = (event) => {
        const data = event.target.result;
        store.put({
            ...data,
            isFavoured: !data.isFavoured,
        });
    };
}

export { open, addItem, getItems, deleteItem, setFavor };
