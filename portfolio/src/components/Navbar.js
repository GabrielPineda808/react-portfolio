import React from 'react'

function Heading(){
    const styles ={
        font:{
            fontSize: 75,
            margin: 20
        },
        margin:{
            fontSize: 24,
            marginLeft: 25,
            marginTop: 45
        },
        atag:{
          color: 'black'
        }
    }
    
    
    return(
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-6 d-flex justify-content-center"  >
                <h1 style={styles.font}>Gabriel Pineda</h1>
              </div>
              <div className="col-md-5 d-flex justify-content-center">
                <ul className="nav justify-content-end" style={styles.margin}>
                  <li className="nav-item">
                    <a className="nav-link " style={styles.atag} href="./index.html">About</a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " style={styles.atag} href="./projects.html">Projects</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            </div>
        </div>
    )
}

export default Heading;