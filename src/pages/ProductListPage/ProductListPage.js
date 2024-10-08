import React, { Component } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import { actDeleteProductsRequest, actFetchProductsRequest } from "../../actions/index";

class ProductListPage extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = (id) => {
    // var {products} = this.state;
    // callApi(`products/${id}`, "DELETE", null).then((res) => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({
    //         products: products,
    //       });
    //     }
    //   }
    // });
    this.props.deleteProduct(id);
  };



  render() {
    var {products} = this.props;
    // var { products } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/product/add" className="btn btn-info mb-10">
          Thêm sản phẩm
        </Link>
        <ProductList>{this.showProducts(products)}</ProductList>
      </div>
    );
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            index={index}
            product={product}
            key={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch , props ) =>{
  return {
    fetchAllProducts : () =>{
      dispatch(actFetchProductsRequest())
    },
    deleteProduct : (id) =>{
      dispatch(actDeleteProductsRequest(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
