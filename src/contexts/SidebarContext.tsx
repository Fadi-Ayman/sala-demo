import { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the context value type
type SidebarContextType = {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
};

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// Props for the provider
type SidebarProviderProps = {
  children: ReactNode;
};

function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(window.innerWidth >= 768);

  // Effect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // Automatically open sidebar for larger screens
      } else {
        setIsSidebarOpen(false); // Automatically close sidebar for smaller screens
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check to set the correct state
    handleResize();

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, handleToggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { SidebarProvider, useSidebar };
