import { createContext, useContext } from 'react';

interface BaseContextDTO {}

const BaseContext = createContext<BaseContextDTO>({} as BaseContextDTO);

const BaseProvider: React.FC = ({ children }) => {
  return <BaseContext.Provider value={{}}>{children}</BaseContext.Provider>;
};

const useBase = () => {
  const context = useContext(BaseContext);
  return context;
};

export { BaseProvider, useBase };
