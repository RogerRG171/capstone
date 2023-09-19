import "./button.styles.scss"
import { ButtonHTMLAttributes, FC } from 'react'

export const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
} as any

export type ButtonProps = {
  buttonType?: string
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children, buttonType = '', isLoading = false, ...otherProps }) => {
  const tipo = BUTTON_TYPE_CLASSES[buttonType] as string
  return (
    <button
      className={`button-container ${tipo} `}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ?
        <div className="btn-spinner-overlay">
          <div className="btn-spinner-container" />
        </div>
        : children
      }
    </button>
  )
}

export default Button