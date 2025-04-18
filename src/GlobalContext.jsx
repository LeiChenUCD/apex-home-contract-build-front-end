import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [view, setView] = useState('standard content');

    const changeView = (view) => setView(view);

    return <GlobalContext.Provider value={{ view, changeView }}>{children}</GlobalContext.Provider>;
};

// Custom hook for easy access
export const useView = () => useContext(GlobalContext);
