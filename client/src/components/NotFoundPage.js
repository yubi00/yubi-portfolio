import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h1 className="header__title">ERROR Page Not Found</h1>
        <Link to="/" style={{ textDecoration: "none"}}><h2 style={{ color: "white" }}>Go to Home</h2></Link>
    </div>
)

export default NotFoundPage