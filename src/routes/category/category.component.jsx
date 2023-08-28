import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.components';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss'
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {

  //states
  const [products, setProducts] = useState([])

  //params
  const { category } = useParams()
  
  //redux
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)


  //hooks
  useEffect(() => {
      setProducts(categoriesMap[category])    
  }, [category, categoriesMap])
  
  
  return (
    <>
      <h2 className='category-title'>{category}</h2>
        {
          isLoading ? (<Spinner />)
          :(
            <div className='category-container'>
                {products && products.map(product =>  (
                  <ProductCard product={product} key={product.id}/>
                  ))   
                }   
            </div>
          )}
    </>
  )
}


export default Category