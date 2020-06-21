import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
// import Logo from "../../images/logo.png"

export default function DualInfoBlock({ heading }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              esse quam itaque dolores nam minus modi illo enim, dolorum
              praesentium cum voluptas quos! Exercitationem laboriosam sapiente
              vero itaque commodi consequuntur cupiditate officia praesentium
              debitis, voluptatem deserunt repudiandae. Quam aperiam cumque
              expedita autem corporis provident dignissimos quaerat, et, enim
              amet fuga at reiciendis dolores velit itaque saepe obcaecati.
              Recusandae ratione, repellat cum minima amet et animi deleniti
              expedita quae ipsum libero fuga! Inventore rerum, iste saepe illo
              ipsam deserunt magnam magni quidem in id. Officia autem officiis
              id repellendus quam ipsa odio. Quo praesentium reprehenderit
              nostrum, error eius molestias deleniti amet?
            </p>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                src="https://media-exp1.licdn.com/dms/image/C5103AQGZ-v_-cS42zQ/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=ZDrQQai1s_0j5lp5NOINS__phfTEBq8eZcxRuDs7uDo"
                className="card-img-top mx-auto"
                alt="Our team"
                style={{ width: "50%" }}
              />
              <div className="card-body">
                <h5 className="card-title">Just click photos</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti corporis facere beatae enim accusantium eum.
                </p>
                <Link to="/" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
