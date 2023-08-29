import { createContext, ReactNode, useState } from "react";
import ProductData from "../utils/DataStore";

interface Item {
  id: number;
  quantity: number;
}

interface ShoppingCartContextType {
  items: Item[];
  openToCart: () => void;
  closeToCart: () => void;
  cartQuantity: number;
  getProductQuantity: (id: number) => number;
  addOneToCart: (id: number) => void;
  removeOneFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  getTotalCost: () => number;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({
  items: [],
  cartQuantity: 0, // Initialize cartQuantity
  openToCart: () => {}, // No-op function
  closeToCart: () => {}, // No-op function
  getProductQuantity: () => 0,
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => 0,
});

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartProducts, setCartProducts] = useState<Item[]>([]);
  const [openCart, setOpenCart] = useState(false);

  console.log(openCart);

  const cartQuantity = cartProducts.reduce(
    (totalQuantity, item) => totalQuantity + item.quantity,
    0
  );

  function openToCart() {
    setOpenCart(true);
  }

  function closeToCart() {
    setOpenCart(false);
  }

  function getProductQuantity(id: number) {
    const item = cartProducts.find((item) => item.id === id);

    if (item === undefined) {
      return 0;
    }
    return item.quantity;
  }
  function addOneToCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      const updatedCart = cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(updatedCart);
    }
  }

  function deleteFromCart(id: number) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => item.id !== id)
    );
  }

  function removeOneFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      const updatedCart = cartProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCartProducts(updatedCart);
    }
  }

  function getTotalCost() {
    let totalCost: number = 0;
    cartProducts.forEach((item) => {
      const productData = ProductData(item.id);
      if (productData) {
        totalCost += productData.price * item.quantity;
      }
    });
    return totalCost;
  }

  const contextValue: ShoppingCartContextType = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    cartQuantity,
    openToCart,
    closeToCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
