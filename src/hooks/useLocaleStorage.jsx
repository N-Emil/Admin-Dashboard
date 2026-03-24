import { useEffect, useState } from "react"

const useLocaleStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key)
        if (saved) {
            return JSON.parse(saved)
        } else {
            return initValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

export default useLocaleStorage