import React, { useEffect } from "react";

const initialGlobalStates = {
  open: false,
  setOpen: () => {},
  handleClickOpen: () => {},
  handleClose: () => {},
};

export const appContext = React.createContext(initialGlobalStates);

export const AppContextProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const globalStates = {
    open,
    setOpen,
    handleClickOpen,
    handleClose,
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <appContext.Provider value={{ globalStates }}>
      {children}
    </appContext.Provider>
  );
};
