import { createContext, useState } from "react";


interface ThemeContextType {
    theme: "light" | "dark",
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}: {children: React.ReactNode}){
    const [currTheme, setCurrTheme] = useState("dark");

    const toggleState = () => {
        setCurrTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
    return(
        <ThemeContext.Provider value={{ theme: currTheme as "light" | "dark", toggleTheme: toggleState }}>
            {children}
        </ThemeContext.Provider>
   
    );
}