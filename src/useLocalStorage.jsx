import { useEffect, useState } from "react";

/**
 * A custom React hook that provides a way to store and retrieve values in the browser's local storage.
 * 
 * @param {string} key - The key to use for storing the value in local storage.
 * @param {any} initialValue - The initial value to use if the key is not found in local storage.
 * @returns {[any, function(any): void]} - An array containing the current value and a function to update the value.
 */
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue == null) {
            if (typeof initialValue == "function") {
                return (initialValue)
            }
            else {
                return initialValue
            }
        }
        else {
            return JSON.parse(jsonValue)
        }

    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])
    return [value, setValue]
}