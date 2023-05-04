import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Head from "next/head";
import Layout, { siteTitle } from "@/components/Layout1";
import utilStyle from "../styles/utils.module.css";
import styles from "../styles/Home.module.css";
import { getPostsData } from "@/lib/post";
import SprideTest from "./posts/splide";

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

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={`${utilStyle.headingMD} ${utilStyle.padding1px}`}>
          <p>
            私はフルスタックエンジニアです。講師として活動しています。好きな言語はPHPです。
          </p>
        </section>

        <section>
          <h2>✍エンジニアのブログ</h2>
          <SprideTest />
          <div className={styles.grid}>
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
          </div>
        </section>
      </Layout>
    </>
  );
}
