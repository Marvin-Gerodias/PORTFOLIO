import React from 'react'
import '../css/Landing.css'

function Landing() {
    return (
        <div className="main__landing">
            <div className="tagline__1">
                <p>I'm a <span>full-stack developer</span> and a <span>graphic designer</span> residing in the Bay Area.</p>
            </div>
            <div className="tagline__2">
                <p>Clean backends<br/>
                <span>& </span> 
                pretty frontends.</p>
            </div>
            <div className="button1">
            <button type="button" class="btn btn-outline-dark" disabled>More to come!</button> 
            </div>
        </div>
    )
}

export default Landing
