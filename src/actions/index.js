import * as types from "../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi("products", "GET", null).then((res) => {
      dispatch(actFetchProducts(res.data));
    });
  };
};

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const actDeleteProductsRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(actDeleteProduct(id));
    });
  };
};

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const actAddProductsRequest = (product) => {
  return (dispatch) => {
    return callApi("products", "POST", product).then((res) => {
      dispatch(actAddProduct(res.data));
    });
  };
};

export const actGetProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};

export const actGetProductRequest = (id) => {
  return (dispatch) => {
    return callApi(`products/${id}`, "GET", null).then((res) => {
    console.log(res)
      dispatch(actGetProduct(res.data));
    });
  };
};

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

export const actUpdateProductRequest = (product) => {
  return (dispatch) => {
    console.log(product.id)
    return callApi(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(actUpdateProduct(res.data));
    });
  };
};
