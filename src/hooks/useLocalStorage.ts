import { useState, useEffect } from "react";

/*
 * https://www.youtube.com/watch?v=igmAJCCSILY
 */

function useLocalStorage<T>(initialValue: [], key: string) {
    const getValue = () => {
        const storage = localStorage.getItem(key); // string || null

        if (storage) {
            return JSON.parse(storage); // '[]', '{}', ''
        }

        return initialValue;
    };

    const [value, setValue] = useState<T>(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export { useLocalStorage };
