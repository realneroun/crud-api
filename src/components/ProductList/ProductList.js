import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="card">
      <div className="card-header">Danh sach san pham</div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>


      </div>
    </div>
    );
  }
}


export default ProductList;