import Stripe from "stripe";

const stripeKey = process.env.STRIPE_SECRET_KEY as string;

export const stripe = new Stripe(stripeKey, {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'ignite shop 2.0',
  }
})