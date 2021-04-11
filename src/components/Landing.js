import React from 'react'
import '../css/Landing.css'
import $ from 'jquery'

import { navigate } from '@reach/router'

$(document).load("localhost:3000/main", function(){

        $('div.tagline__1').fadeOut(1).delay(500).fadeIn(800);
        $('div.tagline__2').fadeOut(1).delay(1000).fadeIn(800);
        $('div.button1').fadeOut(1).delay(1500).fadeIn(800);

        $("a[href^='#']").on('click', function(e) {
            e.preventDefault();
            
            var position = $($(this).attr("href")).offset().top;
        
            $("body, html").animate({
                scrollTop: position
            }, 800);
        });

});

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
            <a href="#projects"><button type="button" class="btn btn-danger">Project Page Coming Soon!</button></a> 
            </div>
        </div>
    )
}

export default Landing
