import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import AvatarSVG from "./../../public/images/avatar.svg";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  // Client side
  // Server side
  // Static Side Generation

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            New about the <span>React</span> world.
          </h1>
          <p>
            Get access ti all the publications <br />
            <span>for { product.amount} month </span>
          </p>
          <SubscribeButton priceId={ product.priceId } />
        </section>
        <Image src={AvatarSVG} alt="Avatar" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1L1MS4FfrvpyaezmDcuN434n", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 *24, // 1 day
  };
};
