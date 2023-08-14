import { useContext } from 'react';
import { ProductsContext } from '../../context/product.context';

import './shop.styles.scss'
import ProductCard from '../../components/product-card/product-card.components';

const Shop = () => {
  //context
  const {products} = useContext(ProductsContext)

  return(
    <div className='products-container'>
      {products && products.map(product => (
        <ProductCard  product={product} key={product.id}/>
      ))}
    </div>
  )
}

export default Shop