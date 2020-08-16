import React, { useEffect } from 'react';


import ListProducts, { detailsProduct } from '../../actions/productActions'
import { useSelector, useDispatch } from 'react-redux'
import styles from './MenHomeScreen.module.css';
// import data from '../data';
import { Link, withRouter } from "react-router-dom";
import { Container, Col, Row, Card, ListGroupItem, ListGroup } from 'react-bootstrap';

function Men(props) {


    const productList = useSelector(state => state.productList);


    
    const { products, error, loading } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ListProducts());

        return () => {
            //
        }
    }, [])
    
    return loading ? <div> LOADING </div> :
        error ? <div> {error} </div> :
            (
                <div className={styles.body}>
                    {<ul className={styles.products}>

                        {
                            products.map(product =>
                                <li key={product._id}>

                                    
                                        <Container style={{ marginLeft:"0", marginRight: "0",paddingLeft:"0"}}  fluid="true">

                                            <Row className="justify-content-space-between" style={{ marginLeft:"0", marginRight: "0",paddingLeft:"0"}}> 
                                                <Col>
                                                        <Card style={{ width: '100%', height: "100%" }} >
                                                            <Link to={"/product/" + product._id}>
                                                                <Card.Img style={{ maxWidth: "100%", maxHeight: "100%" }} variant="top" src={product.image} />
                                                            </Link>
                                                            <Card.Body>
                                                                <Card.Title style={{ textAlign: "center" }}>
                                                                    <Link to={"/product/" + product._id}><span  className={styles.text}>{product.name} </span></Link>
                                                                    <span className={styles.text}>Rs {product.price} </span>
                                                                </Card.Title>
                                                            </Card.Body>

                                                        </Card>
                                                    
                                                </Col>
                                            </Row>
                                        </Container>
                                    
                                </li>)
                        }






                    </ul>




                        //                     <Container fluid>

                        //                         <Row>
                        //                             <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        //                                 <div style={{ width: '100%', height: "100%", backgroundColor: "green", marginTop: "10rem" }}>
                        //                                     <Card style={{ width: '100%', height: "100%" }} >
                        //                                         <Card.Img variant="top" src="holder.js/100px180" />
                        //                                         <Card.Body>
                        //                                             <Card.Title>Card Title</Card.Title>
                        //                                             <Card.Text>
                        //                                                 Some quick example text to build on the card title and make up the bulk of
                        //                                                 the card's content.
                        // </Card.Text>

                        //                                         </Card.Body>
                        //                                     </Card>
                        //                                 </div>

                        //                             </Col>
                        //                             <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                        //                                 <div style={{ width: '100%', height: "100%", backgroundColor: "red", marginTop: "10rem" }}>
                        //                                     <Card style={{ width: '100%', height: "100%" }} >
                        //                                         <Card.Img variant="top" src="/images/men3.jpg"/>
                        //                                         <Card.Body>
                        //                                             <Card.Title style={{height:"30%"}}>MEN</Card.Title>

                        //                                         </Card.Body>
                        //                                     </Card>
                        //                                 </div>

                        //                             </Col>
                        //                         </Row>
                        //                     </Container>































                    }
                    <footer className={styles.footer}>
                        All right reserved
        </footer>
                </div>
            )
}
export default withRouter(Men);