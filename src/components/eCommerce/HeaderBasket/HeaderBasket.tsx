import { useState, useEffect } from 'react';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantitySelector } from '@store/cart/cartSlice';
import Logo from '@assets/svg/cart.svg?react';

import styles from './styles.module.css';
const { basketContainer, basketQuantity, pumpCartQuantity } = styles;

const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQunatity = useAppSelector(getCartTotalQuantitySelector);
  const qunatityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ''
  }`;

  useEffect(() => {
    if (!totalQunatity) {
      return;
    }
    setIsAnimate(true);

    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQunatity]);
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={qunatityStyle}>{totalQunatity}</div>
    </div>
  );
};

export default HeaderBasket;
