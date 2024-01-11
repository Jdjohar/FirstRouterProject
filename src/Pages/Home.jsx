import React from 'react'

import { Header, Footer, Products } from '../Components/index.js'
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
        img:'https://images.unsplash.com/photo-1664363535302-6f71e41a176a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8aXBob25lMTR8fHx8fHwxNzA0OTEyNzgw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300'
    },
    {
        id: 4,
        productname: "Laptop i5",
        price:30,
        img:'https://source.unsplash.com/random/300x300/?laptop'
    },
    {
        id: 5,
        productname: "Laptop i5",
        price:30,
        img:'https://source.unsplash.com/random/300x300/?laptop'
    },
]
const Home = (props) => {
    return (
        <>
            <Header />
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x300/?burger" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x300/?cars" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x300/?bikes" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>

                        <h2 className='fw-bold pb-5'>New Products</h2>

{productsArry.map((item)=> (
  
     <Products productid={item.id} key={item.id} img={item.img} price={item.price} productname={item.productname}/>
))}


                        {/* <Products
                            productname="Single Power Battery" /> */}
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home