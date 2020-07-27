import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h2>Page Not Found</h2>
        <Link to="/dashboard">Go to Home</Link>
    </div>
)

export default NotFoundPage