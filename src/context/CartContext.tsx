"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

interface CartContextType {
  inquiryCart: Product[];
  toggleCartItem: (product: Product) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [inquiryCart, setInquiryCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("pv_inquiry_cart");
      if (savedCart) {
        setInquiryCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load inquiry cart:", e);
    }
  }, []);

  // Save cart to localStorage on change
  const saveCart = (newCart: Product[]) => {
    setInquiryCart(newCart);
    try {
      localStorage.setItem("pv_inquiry_cart", JSON.stringify(newCart));
    } catch (e) {
      console.error("Failed to save inquiry cart:", e);
    }
  };

  const toggleCartItem = (product: Product) => {
    const exists = inquiryCart.find((item) => item.id === product.id);
    if (exists) {
      saveCart(inquiryCart.filter((item) => item.id !== product.id));
    } else {
      saveCart([...inquiryCart, product]);
    }
  };

  const clearCart = () => {
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        inquiryCart,
        toggleCartItem,
        clearCart,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
