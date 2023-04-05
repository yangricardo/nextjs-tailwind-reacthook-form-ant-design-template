import { createContext, useContext, PropsWithChildren } from 'react';

interface BaseContextDTO {}

const BaseContext = createContext<BaseContextDTO>({} as BaseContextDTO);

const BaseProvider = ({ children }:PropsWithChildren) => {
  return <BaseContext.Provider value={{}}>{children}</BaseContext.Provider>;
};

const useBase = () => {
  const context = useContext(BaseContext);
  return context;
};

export { BaseProvider, useBase };
