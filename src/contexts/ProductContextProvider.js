import React, {createContext, useReducer, useContext} from "react";
import axios from "axios";
import {useNavigate, useLocation} from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
    products: [],
    oneProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'GET_ONE_PRODUCT':
        return { ...state, oneProduct: action.payload };
      default:
        return state;
    }
  };
  


const ProductContextProvider = ({children})=> {
    const PRODUCTS_API = "http://localhost:8000/tours";

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const navigate = useNavigate();

    const location = useLocation();

    const getProducts = async () => {
        const { data } = await axios(`${PRODUCTS_API}`);
        dispatch({
          type: 'GET_PRODUCTS',
          payload: data,
        });
      };

    const addProduct = async (newProduct) => {
        await axios.post(PRODUCTS_API, newProduct);
        getProducts();
      };

    const deleteProduct = async (id) => {
        await axios.delete(`${PRODUCTS_API}/${id}`);
        getProducts();
      };

      const saveChangesProduct = async (newProduct) => {
        await axios.patch(`${PRODUCTS_API}/${newProduct.id}`, newProduct);
        getProducts();
      };

    const getOneProduct = async (id) => {
        const { data } = await axios(`${PRODUCTS_API}/${id}`);
        dispatch({
          type: 'GET_ONE_PRODUCT',
          payload: data,
        });
      };

    const values = {
        products: state.products,
        oneProduct: state.oneProducts,

        getProducts,
        getOneProduct,
        addProduct,
        deleteProduct
    };
     return (
        <productContext.Provider value={values}>{children}</productContext.Provider>
     );
}

export default ProductContextProvider;