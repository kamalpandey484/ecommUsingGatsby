import React from "react"
import Heading from "../Reusable/Heading"

export default function Contact() {
  return (
    <section className="py-3 bg-theme">
      <div className="container">
        <Heading title="Contact Us" />
        <div className="col-10 col-sm-8 mx-auto">
          <form
            action="https://formspree.io/kamalpandeytestemail@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Your Mobile Number"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                name="description"
                id="description"
                placeholder="Your Message"
                className="form-control"
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
