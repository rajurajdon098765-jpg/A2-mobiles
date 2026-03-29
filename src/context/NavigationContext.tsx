import { createContext, useContext, useState, ReactNode } from "react";

export type Page =
  | "home"
  | "travel"
  | "utilities"
  | "govdocs"
  | "gadgets"
  | "contact"
  | "about"
  | "admin";

interface NavContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const NavContext = createContext<NavContextType>({
  currentPage: "home",
  navigate: () => {},
});

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
