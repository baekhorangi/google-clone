import Header from "@/components/Header";
import Head from "next/head";
import axios from "axios";
import Response from "Response";
import { useRouter } from "next/router";
import SearchResults from "@/components/SearchResults";

function Search({ results }) {
  const router = useRouter();

  // console.log(results);
  return (
    <>
      <Head>
        <title>{`${router.query.term} - Search`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults results={results} />
    </>
  );
}
export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  try {
    const data = useDummyData
      ? Response
      : (
          await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
          )
        ).data;
    return {
      props: {
        results: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
