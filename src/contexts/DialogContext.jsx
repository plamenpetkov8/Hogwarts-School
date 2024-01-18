import { createContext, useContext, useState } from "react";

const DialogContext = createContext();

function DialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

function useDialog() {
  const context = useContext(DialogContext);
  if (context === undefined)
    throw new Error("DialogContext was used outside the DialogProvider");
  return context;
}

export { DialogProvider, useDialog };
