import React, { Component } from "react"
import Heading from "../Reusable/Heading"
import Img from "gatsby-image"

const getCaty = items => {
  let holdItems = items.map(item => {
    return item.node.category
  })
  let holdCategories = new Set(holdItems)
  let categories = Array.from(holdCategories)
  categories = ["All", ...categories]
  return categories
}

export default class CartCourses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      filterredCourses: props.courses.edges,
      myCategories: getCaty(props.courses.edges),
    }
  }

  catyClicked = category => {
    let courses = [...this.state.courses]
    if (category === "All") {
      this.setState(() => {
        return { filterredCourses: courses }
      })
    } else {
      let newFilterredCourses = courses.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { filterredCourses: newFilterredCourses }
      })
    }
  }

  render() {
    return (
      <section className="py-5 ">
        <div className="container">
          <Heading title="Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.myCategories.map((category, index) => {
                return (
                  <button
                    type="button"
                    className="btn btn-info m-3 px-2"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {this.state.filterredCourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex mx-auto mb-5"
                >
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h5 className="mb-0">{node.title}</h5>
                      <h5 className="mb-0 text-success">${node.price}</h5>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                    <button
                      className="btn btn-warning snipcart-add-item"
                      data-item-id={node.id}
                      data-item-name={node.title}
                      data-item-price={node.price}
                      data-item-url="https://ecommusinggatsby.netlify.app/"
                      data-item-image={node.image.fixed.src}
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
