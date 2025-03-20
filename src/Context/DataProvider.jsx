import React, { createContext, useState, useMemo, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  const [favorites, setFavorite] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Update cart count whenever cart changes
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      cart,
      setCart,
      favorites,
      setFavorite,
      cartCount,
      setCartCount,
      user,
      setUser,
    }),
    [cart, favorites, cartCount, user]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
