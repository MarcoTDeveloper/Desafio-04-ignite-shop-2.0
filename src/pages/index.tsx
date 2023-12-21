import { HomeContainer, Product, SliderContainer } from "@/styles/pages/home";
import Image from "next/image";
import { Handbag } from "phosphor-react";
import useEmblaCarousel from "embla-carousel-react";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home({ products }: HomeProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <div style={{ overflow: "hidden", width: "100%" }}>
        <HomeContainer>
          <div className="embla" ref={emblaRef}>
            <SliderContainer className="embla__container container">
              {products.map(product => {
                return (
                  <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
                    <Product className="embla__slide">
                      <Image src={product.imageUrl} width={520} height={480} alt="" />

                      <footer>
                        <div>
                          <strong>{product.name}</strong>
                          <span>{product.price}</span>
                        </div>

                        <button tabIndex={-1}>
                          <Handbag size={32} weight='bold' />
                        </button>
                      </footer>
                    </Product>
                  </Link>
                )
              })}
            </SliderContainer>
          </div>
        </HomeContainer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100,)
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}