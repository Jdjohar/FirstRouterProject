import React from 'react'


const Product = ({productname, price, img, productid}) => {
  return (
    <>
    <div className="col-md-3">
        <div className="ibox">
            <div className="ibox-content product-box">
                <div className="product-imitation1">
                    <img className="img-fluid" src={img} />
                </div>
                <div className="product-desc">
                    <span className="product-price">
                        ${price}
                    </span>
                    <small className="text-muted">Category</small>
                    <a href="#" className="product-name"> {productname}</a>

                    <div className="small m-t-xs">
                        Many desktop publishing packages and web page editors now.
                    </div>
                    <div className="m-t text-righ">

                        <a href={`productdetail/${productid}`} className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product