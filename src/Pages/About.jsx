import React from 'react'
import {Header, Footer} from '../Components/index.js'

const About = () => {
  return (
   <>
       <Header />

       <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <h1 className="about-title">About Us</h1>
           <div className='col-md-4'>

            <img src='https://source.unsplash.com/random/300x300/?burger' className='img-fluid'/>
           </div>
           <div className='col-md-8'>
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum hic perspiciatis. Asperiores voluptatibus et maiores in. Vero iusto atque aperiam aliquam accusantium fugiat asperiores exercitationem, harum facilis, blanditiis natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum hic perspiciatis. Asperiores voluptatibus et maiores in. Vero iusto atque aperiam aliquam accusantium fugiat asperiores exercitationem, harum facilis, blanditiis natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum hic perspiciatis. Asperiores voluptatibus et maiores in. Vero iusto atque aperiam aliquam accusantium fugiat asperiores exercitationem, harum facilis, blanditiis natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum hic perspiciatis. Asperiores voluptatibus et maiores in. Vero iusto atque aperiam aliquam accusantium fugiat asperiores exercitationem, harum facilis, blanditiis natus.</p>
           </div>
          </div>
        </div>

       </section>
       <Footer />

   </>
  )
}

export default About