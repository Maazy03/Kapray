import React, { Component } from 'react';
 import {Link,Switch, Route} from "react-router-dom";
import { Container,Row,Col,Image} from 'react-bootstrap';
import styles from './Main.module.css';



 class Main extends Component {
    render() {
        return (
            <div>
                {/* <h1 style={{textAlign:"center"}}>
                <a href="/" style={{textDecoration:"none",color:"white"}}>KAPRAY</a></h1> */}
               
               


                <div className={styles.mainbody}>
               
                <Container style={{marginLeft:"0",paddingLeft:"0", marginRight: "0" }}  fluid="true">
                    <Row className="justify-content-md-center" style={{ marginLeft: "0", marginRight: "0" }}> 


<Col xs={12} sm={12} md={12} lg={12} xl={6} style={{ marginLeft:"0", marginRight: "0",paddingLeft:"0"}}>
<Image src="/images/men3.jpg"  style={{maxWidth:"100%",maxHeight:"100%"}}  fluid="true" className={styles.hover}/>
<div className={styles.btnwrapper}>

<button variant="outline-secondary"  style={{textAlign:"center",marginBottom:"16%",letterSpacing: "9px",fontSize:"12px",color:"white"}} className={styles.button}>
    
<Link to='/Men' style={{color:"white",textAlign:"center",marginBottom:"16%",color:"black",fontWeight:"bold"}} >MEN</Link>

{/* <a href="/Men" style={{textAlign:"center",marginBottom:"16%",color:"black",fontWeight:"bold"}}>MEN</a> */}

    </button>
   </div>





</Col>


 
<Col xs={12} sm={12} md={12} lg={12} xl={6} style={{ marginLeft:"0", marginRight: "0",paddingLeft:"0"}}>

<Image src="/images/women3.jpg" style={{maxHeight:"100%"}}  fluid="true" className={styles.hover1}/>
<div className={styles.btnwrapper1}>
<button style={{textAlign:"center",marginBottom:"16%",letterSpacing: "2px",fontSize:"12px",border:"2px solid black"}} className={styles.button}>
    
{/* <Link to='/Men' style={{color:"white"}}>Men</Link> */}

<a href="/Women" className="btn-2" style={{textAlign:"center",marginBottom:"16%",color:"black",fontWeight:"bold"}}>WOMEN</a>

       </button> 
    
    </div>

</Col>

</Row>
</Container>
</div>

{/* <footer className="footer2">
          All right reserved
        </footer>      */}

<footer className={styles.footer}>
                        All right reserved
        </footer>
</div>





            
        )
    }
}

export default Main;
