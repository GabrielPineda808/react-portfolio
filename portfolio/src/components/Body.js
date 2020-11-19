import React from 'react'

function Body(){
    const style={
        margin:{
            marginTop:  60
        },
        font: {
            fontSize: 24
        }
    }
    
    return(
        
        
        <div className="container">
            <div class="row" style={style.margin}>
                    <div class="col-md-5">
                        <img src='https://www.linkpicture.com/q/pfp.jpg'></img>
                    </div>
                    <div class="col-md-7 " style={style.font}>
                        <p class="text-break">Hello! My name is Gabriel Pineda. I am a 19 year old Web Developer in the making. I am currently attending a Fullstack Web Development at UC Berkley Extension program through Trilogy 
                        set to graduate in December 2020. In the three months in the bootcamp i have learned a number of skills like MySQL, Express, Node.js, along with knowledge in HTML, CSS, Bootstrap. In the last month of the 
                        bootcamp we are set to learn react in order to complete the M.E.R.N stack. I hope to not only bring the best to your company but also to the world.
                        Some of the projects i plan on working on are a new fullstack portfolio for myself, avideogame rating and info webapp using M.E.R.N. , and a site to hire 
                        others to do any task you please.</p>
                    </div>
                </div>
            </div>
    )
}

export default Body;