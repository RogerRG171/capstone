import { useNavigate } from "react-router-dom"
import "./category-item.styles.scss"

export type CategoryItemProps = {
  category: {
    imageUrl: string
    title: string
  }
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, title } = category
  const navigate = useNavigate()
  return (
    <div
      className="category-item-container"
      onClick={() => navigate(`/shop/${title}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem
