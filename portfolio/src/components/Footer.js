import React from 'react'

function Footer(){
    const styles ={
        footer:{
            position: 'fixed',
            bottom: 0,
            backgroundColor: 'lightgrey',
            width: 2000,
            height: 90
        },
        margin:{
            marginLeft: 1000
        }
    }
    
    
    return(
        <div className="wrapper " >
          <footer style={styles.footer} className="footer border border-dark mt-auto justify-content-center">
            <h3 style={styles.margin}>hello</h3>
          </footer>
        </div>
    )
}

export default Footer;