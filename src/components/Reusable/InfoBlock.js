import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function InfoBlock({ heading }) {
  return (
    <section className="bg-theme py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              consequuntur placeat explicabo autem facere ad, odit
              necessitatibus ipsum sunt in repellat quaerat veritatis fugiat
              facilis aperiam, possimus odio error quae iste ratione reiciendis
              exercitationem eius dignissimos natus. Omnis ullam culpa porro aut
              dolorum iure eligendi, assumenda fuga eaque, expedita, architecto
              nobis sequi est esse. Rem explicabo necessitatibus dolore
              laudantium optio.
            </p>
            <Link to="/about">
              <button className="btn btn-warning btn-lg">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
