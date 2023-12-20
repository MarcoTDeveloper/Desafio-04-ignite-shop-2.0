import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import cmEsp from '@/assets/camiseta-especial.png'
import { Handbag } from "phosphor-react";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
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

      <Product>
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

      <Product>
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

      <Product>
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
    </HomeContainer>
  )
}
