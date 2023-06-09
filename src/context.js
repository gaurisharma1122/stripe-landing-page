import { createContext, useContext, useState } from "react";

export const AppContext= createContext();

const AppProvider= ({ children })=>{

    const [isSidebarOpen, setIsSidebarOpen]= useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen]= useState(true);

    const openSidebar= ()=>{ setIsSidebarOpen(true); };
    const closeSidebar= ()=>{ setIsSidebarOpen(false); };
    const openSubmenu= ()=>{ setIsSubmenuOpen(true); };
    const closeSubmenu= ()=>{ setIsSubmenuOpen(false); };

    return(
        <AppContext.Provider value={{ isSidebarOpen, isSubmenuOpen, openSidebar, closeSidebar, openSubmenu, closeSubmenu }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider;

export const useGlobalContext= ()=>{
    return useContext(AppContext);
}