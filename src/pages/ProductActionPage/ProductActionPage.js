import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      txtName : '',
      txtPrice : '',
      chkbStatus:''
    }
  }

  onChange = (e) =>{
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onSave = (e) =>{
    e.preventDefault();
    var {txtName,txtPrice,chkbStatus} = this.state;
    var {history } = this.props;
    callApi('products','POST', {
      name: txtName,
      price:txtPrice,
      status:chkbStatus
    }).then(res=>{
      history.goBack();
    })
  }

  render() {
    var {txtName,txtPrice,chkbStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group mb-3">
            <label className="form-label">Tên sản phẩm:</label>
            <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange}/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Giá:</label>
            <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange}/>
          </div>
          <div className="form-group mb-3">
            <label className="form-label">Trạng thái :</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange}/>
            <label className="form-check-label">Còn hàng</label>
          </div>
          <Link to='/product-list' className='btn btn-danger'>Trở lại</Link>

          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
