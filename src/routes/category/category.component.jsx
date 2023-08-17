import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';

import './category.styles.scss'
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product-card/product-card.components';


const Category = () => {

  //states
  const [products, setProducts] = useState([])

  //params
  const { category } = useParams()

  //context
  const { categoriesMap } = useContext(CategoriesContext)

  //hooks
  useEffect(() => {
    
      setProducts(categoriesMap[category])
    
  }, [category, categoriesMap])
  
  
  return (
    <>
      <h2 className='category-title'>{category}</h2>
      <div className='category-container'>
        {products && products.map(product =>  (
              <ProductCard product={product} key={product.id}/>
            ))
        }
      </div>
    </>
  )
}


export default Category