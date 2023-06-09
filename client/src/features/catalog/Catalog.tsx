import { Fragment, useEffect, useState } from 'react';
import agent from '../../app/api/axiosAgent';
import Loading from '../../app/layout/Loading';
import Product from '../../app/models/product';
import ProductList from './ProductList';

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message='Loading products...' />;

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
}

export default Catalog;
