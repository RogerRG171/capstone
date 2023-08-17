import { Link } from 'react-router-dom'
import ProductCard from '../product-card/product-card.components'
import './category-preview.styles.scss'

const CategoryPreview = ({title, products}) => {
  return(
    <div className='category-preview-container'>
      <h2>
        <Link to={`${title}`}>
          <span className='title'>{title.toUpperCase()}</span>        
        </Link>
      </h2>
      <div className='preview'>
        {
          products.filter((_, index) => index < 4 )
          .map(product => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview