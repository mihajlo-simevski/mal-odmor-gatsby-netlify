
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/gallery.css'

const Gallery = () => {
  return (
  <>
    <div className="gallery">
      <div className="gallery-header">
        <h2 className="text-center">Нашето Мени</h2>
        <h1 className="text-center">Неколку вкусни специјалитети</h1>
      </div>
      <div className="gallery-body">
      <div className="gallery-item-large">
      <StaticImage className="gallery-img" src="../images/kolenica.jpg" alt="Gal casi" />
      </div>
      <div className="gallery-item-large">
      <StaticImage className="gallery-img" src="../images/meso-oval.jpg" alt="Gal casi" />
        
      </div>
      <div className="gallery-item-large">
        <div className="gallery-item-small">
        <StaticImage  className="gallery-img" src="../images/gal-casi.jpg" alt="Gal casi" />
          
        </div>
        <div className="gallery-item-small">
        <StaticImage className="gallery-img" src="../images/masa-jadenje.jpg" alt="Gal casi" />
          
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Gallery
