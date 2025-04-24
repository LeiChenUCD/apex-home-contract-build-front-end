import { createContext, useContext, useState } from 'react';
import { initContractMap } from './GlobalContractMap';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [view, setView] = useState('standard content');

    const changeView = (view) => setView(view);
    const [globalContractMap, setGlobalContractMap] = useState(initContractMap);

    // Deep set helper: sets a value at path like ['user', 'profile', 'name']
    const setGlobalContractMapValue = (path, value) => {
        setGlobalContractMap((prev) => {
            const newMap = structuredClone(prev);
            let curr = newMap;
            for (let i = 0; i < path.length - 1; i++) {
                const key = path[i];
                if (!curr[key] || typeof curr[key] !== 'object') {
                    // curr[key] = {};
                    return {};
                }
                curr = curr[key];
            }
            curr[path[path.length - 1]] = value;
            return newMap;
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                view,
                changeView,
                globalContractMap,
                setGlobalContractMap,
                setGlobalContractMapValue,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
