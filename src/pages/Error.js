import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section-page">
      <h1>oops! it's a dead end</h1>
      <Link to="/">
        <button>Back Home</button>
      </Link>

    </section>
  )
}

export default Error
