import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

import './categories-preview.styles.scss'
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
  //context
  const {categoriesMap} = useContext(CategoriesContext)

  return(
    <div className='categories-preview-container'>
    { Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title]
      return <CategoryPreview products={products} title={title} key={title}/>
    })      
    }         
    </div>
  )
}

export default CategoriesPreview