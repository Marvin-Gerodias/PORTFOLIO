import React from 'react'
import '../css/Landing.css'

function Landing() {
    return (
        <div className="main__landing">
            <div className="tagline__1">
                <p>I'm a <span>full-stack developer</span> and a <span>graphic designer</span> residing in the Bay Area.</p>
            </div>
            <div className="tagline__2">
                <p>With a bachelors in graphic design and experience in developing full-stack applications, I create clean and professional web applications. </p>
            </div>
            <div className="button1">
            <button type="button" class="btn btn-outline-dark">More to come!</button> 
            </div>
        </div>
    )
}

export default Landing
