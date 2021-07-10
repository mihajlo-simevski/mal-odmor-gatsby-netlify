import React from "react"
import '../components/hero.css'

const Hero = () => (
    <div className="hero-body is-brown">
    <div className="container has-text-centered">
      <div className="column is-6 is-offset-3">
        <h1 className="title">
          Нешто вкусно се готви...
        </h1>
        <form id="form" action="//freecodecamp.com/email-submit" method="POST">
        <div className="box">

          <div className="field is-grouped">
            <p className="control is-expanded">
              <input id="email" className="input" type="email" name="email" placeholder="Внесете ја вашата е-пошта" />
            </p>
            <p className="control">
              <a href="#">
                <input type="submit" id="submit" className="button is-danger" value="Известете ме" />
              </a>
            </p>
          </div>
        </div>
        </form>
        

      </div>
    </div>
  </div>

  
)



export default Hero
