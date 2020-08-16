import React, { useState, useEffect } from 'react';
import styles from './ProductScreen.module.css';
import { Link } from "react-router-dom";
import { Container, Col, Row, Image, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import ListProducts, { detailsProduct } from "../../actions/productActions";


function ProductScreen(props) {
    // console.log(props.match.params.id)
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails)
    const { products, error, loading } = productDetails;

    const dispatch = useDispatch();
    //     console.log("NICE"+productDetails)
    // console.log("NOoooooo" + products)

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            //
        }
    }, [])
    const addToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }
    // const pro = data.products.find(x => x._id === props.match.params.id)

    // console.log(pro)
    // console.log(pro.name)

    return (
        <div style={{ marginTop: "3rem" }}>

            <div style={{ padding: "1rem",color:"black" }}>
                <Link to="/Men">Back to Shopping</Link>
            </div>

            {loading ? <div> LOADING </div> :
                error ? <div> {error} </div> :

                    (
                        <Container style={{ marginLeft: "0", paddingLeft: "0" }} fluid="true">



                            <Row className="justify-content-md-center" style={{ marginLeft: 0, marginRight: 0 }}>

                                <Col xs={12} sm={12} md={6} lg={12} xl={6} style={{ marginLeft: 0, marginRight: 0 }}>
                                    <div>
                                        <Image style={{ maxWidth: "100%", maxHeight: "100%", width: "auto" }} src={products.image} className={styles.productimage} />
                                    </div>
                                </Col>

                                <Col xs={12} sm={12} md={12} lg={12} xl={6} style={{ marginLeft: 0, marginRight: 0 }}>
                                    <div>
                                        <div className={styles.detailsinfo}>
                                            <ul>
                                                <li className={styles.name}>{products.name}</li>
                                                <li className={styles.description}>
                                                    <div>
                                                        {products.description}
                                                    </div>
                                                </li>
                                                <li className={styles.price}><b>PKR {products.price}</b></li>
                                                {/* <li>{products.rating} Stars ({products.numReviews} Reviews)</li> */}


                                            </ul>
                                        </div>

                                        <div className={styles.detailsaction}>

                                            <ul>
                                                {/* <li>Price : Rs {products.price}</li> 
                                                <li className={styles.status}> {products.countInStock > 0 ? "IN STOCK" : "NOT IN STACK"}</li>
                                               */}
                                                <li className={styles.status}>Only <span style={{color: "goldenrod"}}>{products.countInStock} </span> Left</li>
                                                <li className={styles.quantity}>
                                                    
                                                        {/* <Form.Label>State</Form.Label> */}
                                                        <Form.Control as="select" defaultValue="Choose..." style={{ width: "32%" }} value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                                            {[...Array(products.countInStock).keys()].map(x =>
                                                                <option style={{color:"black"}} key={x + 1} value={x + 1}>{x + 1}</option>)}
                                                        </Form.Control>
                                                   
                                                </li>
                                                {/* <li>Quantity :
                               <select style={{ color: "red" }} value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                                        {[...Array(products.countInStock).keys()].map(x =>
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                                    </select>
                                                </li> */}
                                                <li>
                                                    {products.countInStock > 0 && <button className={styles.addToCartbutton} onClick={addToCart}>ADD TO CART</button>}

                                                </li>

                                            </ul>



                                        </div>
                                    </div>
                                </Col>


                            </Row>

                        </Container>
                    )

            }
            <footer className={styles.footer}>
                All right reserved
        </footer>

        </div>
    )
}

export default ProductScreen;