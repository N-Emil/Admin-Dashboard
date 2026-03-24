import { useContext } from 'react'

export const BaseContext = (context, hookName, providerName) => {
    return () => {
        const ctx = useContext(context)

        if (!ctx) {
            throw new Error(`${hookName} must be used within the ${providerName}`);
        }

        return ctx
    }
}