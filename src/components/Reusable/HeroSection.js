import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, title, subTitle, heroClass }) {
  return (
    <BackgroundImage className={heroClass} fluid={img}>
      <h1 className="text-white text-uppercase text-center display-4">
        {title}
      </h1>
      <h4 className="text-warning">{subTitle}</h4>
    </BackgroundImage>
  )
}
