import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumb = ({heading,link}) => {
  return (
    <section className="as_breadcrum_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>{heading}</h1>
              <ul className="breadcrumb">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>{link}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Breadcrumb