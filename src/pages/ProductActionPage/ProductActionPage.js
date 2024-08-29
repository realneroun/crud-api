import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { connect } from "react-redux";
import {
  actAddProductsRequest,
  actGetProductRequest,
  actUpdateProductRequest,
} from "../../actions/index";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSave = (e) => {
    e.preventDefault();
    var { txtName, txtPrice, chkbStatus, id } = this.state;
    var { history } = this.props;
    var product = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkbStatus,
    };
    if (id) {
      this.props.updateProduct(product);
      history.goBack();
    } else {
      this.props.addProduct(product);
      history.goBack();
    }
  };

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.editProduct(id);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      var { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkbStatus: itemEditing.status,
      });
    }
  }

  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group mb-3">
            <label className="form-label">Tên sản phẩm:</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Giá:</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Trạng thái :</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="chkbStatus"
              value={chkbStatus}
              onChange={this.onChange}
              checked={chkbStatus}
            />
            <label className="form-check-label">Còn hàng</label>
          </div>
          <Link to="/product-list" className="btn btn-danger">
            Trở lại
          </Link>

          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProduct: (product) => {
      dispatch(actAddProductsRequest(product));
    },
    editProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },

    updateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
