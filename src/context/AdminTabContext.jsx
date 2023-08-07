import { createContext } from "react";

export default createContext({
    selectedTab : "",
    setSelectedTab: () => {},
    isCollapsed: false,
    setIsCollapsed: () => {}
})