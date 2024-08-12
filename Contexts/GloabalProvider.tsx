import { User } from "@supabase/supabase-js";
import { Dispatch, SetStateAction, useContext, createContext } from "react";

interface GlobalContextType {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  user: User | null;
}

const GloabalContext = createContext<GlobalContextType>({
  isLogged: false,
  setIsLogged: () => {},
  user: null,
});

export function GloabalProvider({
  children,
  isLogged = false,
  setIsLogged = () => {},
  user = null,
}: {
  children: React.ReactNode;
  isLogged?: boolean;
  setIsLogged?: Dispatch<SetStateAction<boolean>>;
  user?: User | null;
}) {
  return (
    <GloabalContext.Provider value={{ isLogged, setIsLogged, user }}>
      {children}
    </GloabalContext.Provider>
  );
}

export function useGlobal() {
  const { isLogged, setIsLogged, user } = useContext(GloabalContext);
  return { isLogged, setIsLogged, user };
}
