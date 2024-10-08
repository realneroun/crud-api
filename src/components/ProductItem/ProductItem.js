import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ProductItem extends Component {
  onDelete = (id) => {
    if (confirm("Bạn chắc chắn muốn xóa hay không")) { // eslint-disable-line
      this.props.onDelete(id);
    }
  };
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    var statusClass = product.status ? "warning" : "default";

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <Link to={`/product/${product.id}/edit`} className="btn btn-success">Sửa</Link>
          <button
            className="btn btn-danger ml-10"
            onClick={() => {
              this.onDelete(product.id);
            }}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
