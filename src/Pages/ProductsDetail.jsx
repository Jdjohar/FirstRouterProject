import React from 'react'
import {useParams} from 'react-router-dom'
import { Header, Footer } from '../Components/index.js'

const ProductsDetail = () => {

  const productsArry = [
    {
        id: 1,
        productname: "Single Battery Phone",
        price:20,
        img:'https://source.unsplash.com/random/300x300/?phone'
    },
    {
        id: 2,
        productname: "Double Battery Phone",
        price:30,
        img:'https://source.unsplash.com/random/300x300/?smartphone'
    },
    {
        id: 3,
        productname: "IPhone 14 Pro",
        price:50,
        img:'https://source.unsplash.com/random/300x300/?iphone14'
    },
    {
        id: 4,
        productname: "Laptop i5",
        price:30,
        img:'https://source.unsplash.com/random/300x300/?laptop'
    },
]


const { id } = useParams();
const product = productsArry.find((product) => product.id === parseInt(id));

if (!product) {
  return <div>Product not found</div>;
}
  return (
    <>
     <Header />
    <div className="container">

    <div className="product-content product-wrap clearfix product-deatil">
        {console.log(id, "Show name")}
        <h3>ProductId: { id}</h3>
        <div className="row">
            <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                <div className="item">
                <img src={product.img} className="img-fluid" alt="" />
                            </div>
                </div>
            </div>

            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                <h2 className="name">
                {product.productname}
                    <small>Product by <a href="javascript:void(0);">Adeline</a></small>
                    <i className="fa fa-star fa-2x text-primary"></i>
                    <i className="fa fa-star fa-2x text-primary"></i>
                    <i className="fa fa-star fa-2x text-primary"></i>
                    <i className="fa fa-star fa-2x text-primary"></i>
                    <i className="fa fa-star fa-2x text-muted"></i>
                    <span className="fa fa-2x"><h5>(109) Votes</h5></span>
                    <a href="javascript:void(0);">109 customer reviews</a>
                </h2>
                <hr />
                <h3 className="price-container">
                ${product.price.toFixed(2)}
                    <small>*includes tax</small>
                </h3>
               
                <hr />
              
                <hr />
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <a href="javascript:void(0);" className="btn btn-success btn-lg">Add to cart ($129.54)</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="btn-group pull-right">
                            <button className="btn btn-white btn-default"><i className="fa fa-star"></i> Add to wishlist</button>
                            <button className="btn btn-white btn-default"><i className="fa fa-envelope"></i> Contact Seller</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<Footer />
    
    </>
  )
}

export default ProductsDetail