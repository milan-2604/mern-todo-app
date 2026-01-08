import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/v1/me`,
        { credentials: "include" }
      );
      setIsAuth(res.ok);
      return res.ok;
    } catch {
      setIsAuth(false);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/v1/logout`, {
        method: "POST",
        credentials: "include",
      });
      setIsAuth(false);
    } catch (err) {
      console.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, checkAuth, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};