// import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import InfoYashima from "@/components/InfoYashima";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout1";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "@/lib/post";
// import SprideTest from "../pages/posts/splide";
import SprideTest from "../components/MainVisual";

//ssgの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

//ssrの場合

// export async function getServerSideProps(context) {
//   return {
//     props:{
//       //コンポーネントに渡すためのprops

//     }
//   }
// }

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section>
          <SprideTest />
          <InfoYashima />
          {/* <Hero /> */}
          {/* <Pricing /> */}
          {/* <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`/posts/${id}`}>
                  <img
                    src={`${thumbnail}`}
                    alt=""
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`/posts/${id}`} legacyBehavior>
                  <a className={utilStyle.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilStyle.lightText}>{date}</small>
              </article>
            ))}
          </div> */}
        </section>
      </Layout>
    </>
  );
}
