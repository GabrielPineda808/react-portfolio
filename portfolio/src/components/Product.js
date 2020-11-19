import React from 'react'

function Product(){
    const style={
       margin:{
           marginBottom: 10,
           backgroundColor: 'lightgrey'
       },
       frame:{
           width: 350,
           height: 250
       }
    }
    
    return(
        <div className="container">
            <div class="container bg-light">
                <div class="card-body">
                    <div class="row ">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Woof! (Group Project)</h4>
                                    <a href="https://woof-23.herokuapp.com/"><img  alt="Woof!" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>In this app we created a site for your puppy friend to find another buddy to play around with. You are able to search for profiles with specifications of breed, age, and gender. Then you can view whichever profile and post doggy-date we have a review system.
                                        You can leave Reviews on both the user and their pet in order to let others know what kind of a person you are meeting with and their pet.</p>
                                    <p><strong>Front-end: </strong> Handlebars.js, Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, Node.js, Express.js, MySQL, Sequelize, Passport.js, Bcrypt.js, and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/Woof">Repository</a></p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Muse! </h4>
                                    <a href="https://davidyi0529.github.io/Muse/"><img  alt="Muse Project" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>A website where you can find information or artists and songs!</p>
                                    <p><a href="https://github.com/davidyi0529/Muse">Repository</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Day Planner</h4>
                                    <a href="https://gabrielpineda808.github.io/day-planner/"><img  alt="Online Day Planner" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p><a href="https://github.com/GabrielPineda808/day-planner">Repository</a></p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 light" style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Password Generator</h4>
                                    <a href="https://gabrielpineda808.github.io/password-generator/"><img  alt="Password Generator" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8 justify-content-right">
                                    <p>fasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
                                    <p><a href="https://github.com/GabrielPineda808/password-generator">Repository</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div class="row ">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Note Taker</h4>
                                    <a href="https://gabrielpineda808.github.io/note-taker/"><img  alt="Note App" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p><a href="https://github.com/GabrielPineda808/note-taker.git">Repository</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Weather App</h4>
                                    <a href="https://gabrielpineda808.github.io/weather-app/"><img  alt="Weather App" style={style.padding}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p><a href="https://github.com/GabrielPineda808/weather-app">Repository</a></p>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default Product;