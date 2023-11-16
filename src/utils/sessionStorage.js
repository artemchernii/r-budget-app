export const saveToStorage = (name, data) => {
    if (!window || !localStorage) {
        return;
    }

    localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name) => {
    if (!window || !localStorage) {
        return;
    }

    try {
        return JSON.parse(localStorage.getItem(name));
    } catch (error) {
        console.error(error);
    }
};
