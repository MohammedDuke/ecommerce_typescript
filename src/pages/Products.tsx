import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from '@store/products/productsSlice';
import { Loading } from '@components/feedback';

import { useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { Product } from '@components/eCommerce';
import { GridList } from '@components/common';
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let prefix: string;

    if (params.prefix && typeof params.prefix === 'string') {
      {
        prefix = params.prefix;
        dispatch(actGetProductsByCatPrefix(prefix));
        return () => {
          dispatch(productsCleanUp());
        };
      }
    }
  }, [dispatch, params]);

  const { loading, records, error } = useAppSelector((state) => state.products);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
