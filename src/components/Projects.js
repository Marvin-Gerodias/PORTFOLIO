import React from 'react'
import '../css/Projects.css'
import $ from 'jquery'

$(window).load("localhost:3000/projects", function(){

        $('h1.projectTitle').fadeOut(1).delay(500).fadeIn(800);

});

function Projects() {
    return (
        <div className="projects" >
                <div className="projects__container" id="projects">
                    <div className="projects__items1" > 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5>Project</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div class="icons">
                                <i class="devicon-react-original-wordmark"></i>
                                <i class="devicon-mongodb-plain-wordmark"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                    <div className="projects__items1"> 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5> Project</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div class="icons">
                                <i class="devicon-react-original-wordmark"></i>
                                <i class="devicon-mongodb-plain-wordmark"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                    <div className="projects__items1"> 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5> Project</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div class="icons">
                                <i class="devicon-react-original-wordmark"></i>
                                <i class="devicon-mongodb-plain-wordmark"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                    {/* <div className="projects__items2"> 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5> Project Title</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="projects__items2"> 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5> Project Title</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>
                    <div className="projects__items2"> 
                        <div className="items__img"><img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png" alt=""/></div>
                        <div className="items__content">
                            <h5> Project Title</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        </div>
                    </div>                     */}
                </div>
            </div>
    )
}

export default Projects
