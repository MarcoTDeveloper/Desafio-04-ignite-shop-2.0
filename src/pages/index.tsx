import { HomeContainer, Product, SliderContainer } from "@/styles/pages/home";
import Image from "next/image";

import cmEsp from '@/assets/camiseta-especial.png'
import { Handbag } from "phosphor-react";
import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [ emblaRef ] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  })

  return (
    <div style={{ overflow: "hidden", width: "100%"}}>
      <HomeContainer>
        <div className="embla" ref={emblaRef}>
          <SliderContainer className="embla__container container">
          <Product className="embla__slide">
            <Image src={cmEsp} width={520} height={480} alt="" />

            <footer>
              <div>
                <strong>Camiseta Beyond the Limits</strong>
                <span>R$ 99,90</span>
              </div>

              <button>
                <Handbag size={32} weight='bold' />
              </button>
            </footer>
          </Product>

          <Product className="embla__slide" >
            <Image src={cmEsp} width={520} height={480} alt="" />

            <footer>
              <div>
                <strong>Camiseta Beyond the Limits</strong>
                <span>R$ 99,90</span>
              </div>

              <button>
                <Handbag size={32} weight='bold' />
              </button>
            </footer>
          </Product>

          <Product className="embla__slide" >
            <Image src={cmEsp} width={520} height={480} alt="" />

            <footer>
              <div>
                <strong>Camiseta Beyond the Limits</strong>
                <span>R$ 99,90</span>
              </div>

              <button>
                <Handbag size={32} weight='bold' />
              </button>
            </footer>
          </Product>

          <Product className="embla__slide" >
            <Image src={cmEsp} width={520} height={480} alt="" />

            <footer>
              <div>
                <strong>Camiseta Beyond the Limits</strong>
                <span>R$ 99,90</span>
              </div>

              <button>
                <Handbag size={32} weight='bold' />
              </button>
            </footer>
          </Product>
          </SliderContainer>
        </div>
    </HomeContainer>
    </div>
  )
}
