import { useState } from "react";

interface CartVisibility {
  isCartVisible: boolean;
  showCart: () => void;
  hideCart: () => void;
}

const useCartVisibility = (): CartVisibility => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => setIsCartVisible(true);
  const hideCart = () => setIsCartVisible(false);

  return { isCartVisible, showCart, hideCart };
};

export default useCartVisibility;