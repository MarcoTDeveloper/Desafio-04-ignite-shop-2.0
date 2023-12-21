import { ImageContainer, ProductsSales, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  product: {
    imageUrl: string
  }
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>

        <ProductsSales>
          <ImageContainer>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </ImageContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </ImageContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={120} height={110} alt="" />
          </ImageContainer>
        </ProductsSales>


        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de 3 camisetas já está a caminha da sua casa.
        </p>

        <Link href="/">
          Voltar ao catalogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);


  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        imageUrl: product.images[0],
      }
    }
  }
}