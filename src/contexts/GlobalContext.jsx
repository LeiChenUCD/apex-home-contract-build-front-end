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

    const pushGlobalContractMapValue = (path, item) => {
        setGlobalContractMap((prev) => {
            const newMap = structuredClone(prev);
            let curr = newMap;

            for (let i = 0; i < path.length - 1; i++) {
                const key = path[i];
                if (!curr[key] || typeof curr[key] !== 'object') {
                    return prev; // do nothing on invalid path
                }
                curr = curr[key];
            }

            const listKey = path[path.length - 1];
            if (!Array.isArray(curr[listKey])) {
                return prev; // not a list
            }

            curr[listKey].push(item);
            return newMap;
        });
    };

    const removeGlobalContractMapItem = (path, valueToRemove) => {
        setGlobalContractMap((prev) => {
            const newMap = structuredClone(prev);
            let curr = newMap;

            for (let i = 0; i < path.length - 1; i++) {
                const key = path[i];
                if (!curr[key] || typeof curr[key] !== 'object') {
                    return prev;
                }
                curr = curr[key];
            }

            const listKey = path[path.length - 1];
            if (!Array.isArray(curr[listKey])) {
                return prev;
            }

            curr[listKey] = curr[listKey].filter((item) => item !== valueToRemove);
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
                pushGlobalContractMapValue,
                removeGlobalContractMapItem,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
