"use client";

import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

type checkoutFomrProps = {
  product: {};
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

export default function CheckoutForm({
  product,
  clientSecret,
}: checkoutFomrProps) {
  return (
    <Elements options={{ clientSecret }} stripe={stripePromise}>
      <Form />
    </Elements>
  );
}

function Form() {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
}
