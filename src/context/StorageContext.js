import { createContext } from "react";
const StorageContext = createContext();

export function StorageProvider({ children }) {
    const [value, setValue] = useState();
    

    return (
        <StorageContext.Provider value={{ value, setValue }}>
            {children}
        </StorageContext.Provider>
    )
}