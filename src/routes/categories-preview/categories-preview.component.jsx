
import './categories-preview.styles.scss'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
  //redux
  const categoriesMap = useSelector(selectCategoriesMap)
  
  return(
    <div className='categories-preview-container'>
    {categoriesMap && Object.keys(categoriesMap).map(title => {
      const products = categoriesMap[title]
      return <CategoryPreview products={products} title={title} key={title}/>
    })      
    }         
    </div>
  )
}

export default CategoriesPreview