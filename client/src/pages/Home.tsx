import { useEffect } from "react";
// import { fetchProducts } from "../services/fetchFunctions";

const Home = () => {
  useEffect(() => {
    // (async () => {
    //   const res = await fetchProducts();
    //   if (!res || "code" in res) console.log(res);
    //   else {
    //     console.log(res);
    //   }
    // })();
  }, []);

  return <div>Auction App</div>;
};

export default Home;
