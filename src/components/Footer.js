import React from 'react'

function Footer(){
    const styles ={
        footer:{
            position: 'relative',
            bottom: 0,
            backgroundColor: 'lightgrey',
            width: 2000,
            height: 90
        },
        margin:{
            marginLeft: 1000
        },
        items:{
            color: 'black',
           
            fontSize: 24
        }

    }
    
    
    return(
        <div className="wrapper " >
          <footer style={styles.footer} className="footer border border-dark mt-auto justify-content-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-3" >
                        <a rel="noreferrer" href="https://github.com/GabrielPineda808" target="_blank" style={styles.items}><strong>Github</strong></a>
                        <br></br>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/gabriel-pineda-a94535195/" target="_blank" style={styles.items}><strong>LinkedIn</strong></a>
                    </div>
                    <div className="col-md-3">
                        <h4>Email: </h4>
                        <p style={styles.items}>gabepineda6@gmail.com</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Phone Number: </h4>
                        <p style={styles.items}>(510-372-6925)</p>
                    </div>
                    <div className="col-md-3">
                        <h4><a rel="noreferrer" href="https://resume.io/r/wfzjZqz0x" target="_blank" style={styles.items}>Resume</a></h4>
                    </div>
                </div>
            </div>
          </footer>
        </div>
    )
}

export default Footer;