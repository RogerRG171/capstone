import { useState, FormEvent } from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeCardElement } from "@stripe/stripe-js"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { useSelector } from "react-redux"
import "./payment-form.styles.scss"

import { selectCartTotal } from "./../../store/cart/cart.selector"
import { selectCurrentUser } from "./../../store/user/user.selector"

const ifValidCardElement = (
  card: StripeCardElement | null
): card is StripeCardElement => card !== null

const PaymentForm = () => {
  //stripe
  const stripe = useStripe()
  const elements = useElements()

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  //functions
  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessingPayment(true)

    const res = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret },
    } = res

    const cardDetails = elements.getElement(CardElement)

    if (!ifValidCardElement(cardDetails)) return

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: cardDetails,
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error)
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!")
      }
    }
  }

  return (
    <div className="payment-form-container">
      <form onSubmit={paymentHandler} className="form-container">
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          id="payment-button"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          disabled={isProcessingPayment}
          isLoading={isProcessingPayment}
        >
          Pay now
        </Button>
      </form>
    </div>
  )
}

export default PaymentForm
