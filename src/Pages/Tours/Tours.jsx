
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import CustomCard from "../../components/Card";
import { productsContext } from "../../context/productContext";
// import { useFavorites } from "../../context/favoriteContext";
// import "./style.css";


// // import "./Tours.css";

// import CustomPagination from "../../components/CustomPagination";

// import { toast } from "react-toastify";
// import { useFavorites } from "../../context/favoriteContext";

// import "./Tours.css";
// // import CustomPagination from "../../components/CustomPagination";

// // import { toast } from "react-toastify";


const Tours = () => {
  const { products, getProducts } = useContext(productsContext);
    // const { getFavorites, favorites } = useFavorites();
  const [searchParams] = useSearchParams();

    // const { addFavoriteToStorage, removeFromFavorites } = useFavorites();


//     const onFavorite = async (product) => {
//       const isFav = useFavorites.find((fav) => fav.id === product.id);
//       if (isFav) {
//         // await removeFromFavorites(product.id);
//         // await getFavorites();
//         toast.success("removed from fav");
//       } else {
//         // await addFavoriteToStorage(product);
//         // await getFavorites();
//         toast.success("added to fav");
//       }
//     };
    // const onFavorite = async (product) => {
    //   const isFav = favorites.find((fav) => fav.id === product.id);
    //   if (isFav) {
    //     await removeFromFavorites(product.id);
    //     await getFavorites();
    //     toast.success("removed from fav");
    //   } else {
    //     await addFavoriteToStorage(product);
    //     await getFavorites();
    //     toast.success("added to fav");
    //   }
    // };

  useEffect(() => {
    getProducts(
      searchParams.get("search"),
      searchParams.get("category"),
      searchParams.get("_page")
    );
    // getFavorites();
  }, [searchParams]);

  return (
    <div className="products">
      <img
        className="tourImg"
        src="https://evg-crystal.ru/800/600/http/interier-foto.ru/wp-content/uploads/dlinnye-foto-4.jpg"
      />
      <div className="product-list">
        {products
          ? products.map((item) => (
              <CustomCard
                product={item}
                // favorites={favorites}
                // onFavorite={onFavorite}
              />
            ))
          : "Empty"}
      </div>
      <CustomPagination />
    </div>
  );
};

export default Tours;

