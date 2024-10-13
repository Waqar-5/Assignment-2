import React from 'react'
import cssStyles from './hero.module.css'
console.log(cssStyles, "css-Styles");


const Hero = () => {
  return (
    <section className={cssStyles.hero}>

      <h1>This is called hero section</h1>

    </section>
  )
}

export default Hero
