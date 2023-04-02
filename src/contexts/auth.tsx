import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

function AuthProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
