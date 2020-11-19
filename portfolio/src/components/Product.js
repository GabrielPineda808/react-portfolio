import React from 'react'
import weather from '../img/weather.png'
import plan from '../img/dayplan.PNG'
import woof from '../img/woof.gif'
import muse from '../img/muses.PNG'
import pass from '../img/passwoord.PNG'
import notes from '../img/notes.PNG'




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
                                    <a href="https://woof-23.herokuapp.com/"><img src={woof} alt="Woof!" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>In this app we created a site for your puppy friend to find another buddy to play around with. You are able to search for profiles with specifications of breed, age, and gender. Then you can view whichever profile and post doggy-date we have a review system.
                                        You can leave Reviews on both the user and their pet in order to let others know what kind of a person you are meeting with and their pet.</p>
                                    <p><strong>Front-end: </strong> Handlebars.js, Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, Node.js, Express.js, MySQL, Sequelize, Passport.js, Bcrypt.js, and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/Woof">Repository</a></p>
                                    <p><a href="https://woof-23.herokuapp.com/">Deployed Site</a></p>
                                </div>
                            </div> 
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Muse! </h4>
                                    <a href="https://davidyi0529.github.io/Muse/"><img src={muse} alt="Muse Project" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>A website where you can find information or artists and songs! All you need to do is search an artist or song and then information on that search will be listed</p>
                                    <p><strong>Front-end: </strong>Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, Node.js, AJAX,  Jquery</p>
                                    <p><a href="https://github.com/davidyi0529/Muse">Repository</a></p>
                                    <p><a href="https://davidyi0529.github.io/Muse/">Deployed Site</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Day Planner</h4>
                                    <a href="https://gabrielpineda808.github.io/day-planner/"><img src={plan} alt="Online Day Planner" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>This planner is unique as it is color coded and used a a planner for the average work day. It will locally save your plans for the day and then display them in which ever
                                        time slot your wrote it in. If the hour has passed then the corresponding slot will turn grey, the current hour red, and future hours green.
                                    </p>
                                    <p><strong>Front-end: </strong> Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, Node.js, AJAX, Moment.js, and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/day-planner">Repository</a></p>
                                    <p><a href="https://gabrielpineda808.github.io/day-planner/">Deployed Site</a></p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 light" style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Password Generator</h4>
                                    <a href="https://gabrielpineda808.github.io/password-generator/"><img src={pass} alt="Password Generator" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8 justify-content-right">
                                    <p>Using this password generator you can specify whatever qualifications for a randomly generated password from capital letters, lowercase letters, numbers, and speical characters.
                                        You can also specify the length of the password from 6-128 characters
                                    </p>
                                    <p><strong>Front-end: </strong> HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/password-generator">Repository</a></p>
                                    <p><a href="https://gabrielpineda808.github.io/note-taker/">Deployed Site</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div class="row ">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Note Taker</h4>
                                    <a href="https://gabrielpineda808.github.io/note-taker/"><img src={notes} alt="Note App" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>This is a simple note taking app which will allow you to createa any online notes which can be saved and dleted from the local storage of the user.</p>
                                    <p><strong>Front-end: </strong> Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, Node.js, Express.js, and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/note-taker.git">Repository</a></p>
                                    <p><a href="https://gabrielpineda808.github.io/note-taker/">Deployed Site</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12 col-md-12 col-lg-12 " style={style.margin}>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Weather App</h4>
                                    <a href="https://gabrielpineda808.github.io/weather-app/"><img src={weather} alt="Weather App" style={style.frame}></img></a>
                                </div>
                                <div class="col-md-8">
                                    <p>This is a simple weather app which will allow you to search for any city and see the weather plus the 5 following day forecast and it wil save your searched city
                                        to a list of previous searches.
                                    </p>
                                    <p><strong>Front-end: </strong>  Bootstrap, HTML5, amd CSS3</p>
                                    <p><strong>Back-end: </strong> Javascript, AJAX, and Jquery</p>
                                    <p><a href="https://github.com/GabrielPineda808/weather-app">Repository</a></p>
                                    <p><a href="https://gabrielpineda808.github.io/weather-app/">Deployed Site</a></p>
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