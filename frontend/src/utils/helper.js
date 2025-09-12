import { store, persistor } from '../store/index';

export const logoutUser = () => {
    localStorage.clear();
    store.dispatch({ type: 'RESET' });
    persistor.purge();
};