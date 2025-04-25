import { GlobalContext } from '../contexts/GlobalContext';
import { useContext } from 'react';

// Custom hook for view
export const useView = () => {
    const { view, changeView } = useContext(GlobalContext);
    return { view, changeView };
};
// Custom hook for globalMap
export const useGlobalMap = () => {
    const {
        globalContractMap,
        setGlobalContractMap,
        setGlobalContractMapValue,
        pushGlobalContractMapValue,
        removeGlobalContractMapItem,
    } = useContext(GlobalContext);
    return {
        globalContractMap,
        setGlobalContractMap,
        setGlobalContractMapValue,
        pushGlobalContractMapValue,
        removeGlobalContractMapItem,
    };
};
