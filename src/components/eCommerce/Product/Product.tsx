import { useState, useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import { addtoCart } from '@store/cart/cartSlice';
import { Button, Spinner } from 'react-bootstrap';
import styles from './styles.module.css';
const { product, productImg } = styles;
import { TProduct } from '@customTypes/product';

const Product = ({ id, title, img, price }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const addtoCartHandler = () => {
    dispatch(addtoCart(id));
    setIsBtnDisabled(true);
  };

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }

    setIsBtnDisabled(true);

    const dobounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(dobounce);
  }, [isBtnDisabled]);

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <Button
        variant="info"
        style={{ color: 'white' }}
        onClick={addtoCartHandler}
        disabled={isBtnDisabled}
      >
        {isBtnDisabled && <Spinner animation="border" size="sm" />}
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
