import React, { useState, useEffect } from 'react';
import { addToCart, removeitem } from '../../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import styles from './cartScreen.module.css';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";



function CartScreen(props) {


    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;




    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeitemHandler = (productId) => {
        dispatch(removeitem(productId))

    }
    useEffect(() => {

        if (productId) {
            dispatch(addToCart(productId, qty))
        }


    }, [])
    const checkoutHandler = () => {
        props.history.push("/sigin?redirect=shipping")
    }
    return (
        <div className={styles.cart}>
            <div className={styles.cartlist}>
                <ul className={styles.cartlistcontainer}>
                    <li>
                        <h3>SHOPPING CART</h3>
                  
                        <div className={styles.priceontop}>PRICE</div>

                    </li>
                    {
                        cartItems.length === 0 ?
                        <div>
                            <div style={{textAlign:"center"}}>Your Shopping Cart Is Empty</div>
                            <div className={styles.continuetoshop}><a href="/Men">Continue To shopping</a> </div>
                            </div> :

                            cartItems.map(item =>

                                <li>
                                    <div className={styles.cartimage}>
                                        <img src={item.image} alt="picture" />
                                    </div>

                                    <div className={styles.cartname}>

                                        <Link to={"/products/" + item.product}>
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div className={styles.quantitybox}> QTY:
                                            {/* <select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x=>
                                            <option key={x+1} value={x+1}>{x+1}</option>)}
                                            </select> */}




                                        {/* <Form.Label>State</Form.Label> */}
                                        <Form.Control as="select" defaultValue="Choose..." style={{ width: "52%" }} value={qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option style={{ color: "black" }} key={x + 1} value={x + 1}>{x + 1}</option>)}
                                        </Form.Control>



                                    </div>


                                    <div>
                                        <button className={styles.deletebutton} onClick={() => removeitemHandler(item.product)}>Remove</button>
                                    </div>
                                    <div className={styles.cartprice}>
                                         <span style={{color:"black"}}>PKR </span>{item.price}
                                    </div>
                                </li>
                            )
                    }
                </ul>

            </div>
            <div className={styles.cartaction}>
                <h1>
                    {/* SUBTOTAL ({cartItems.reduce((a, c) => a + Number(c.qty), 0)} items)
                    :
                     $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} */}

                    TOTAL
                    :
                    <span style={{color:"goldenrod"}}> PKR {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</span>


                </h1>
                <button className="button primary" className={styles.checkoutbutton} disabled={cartItems.length === 0} onClick={checkoutHandler}> PLACE ORDER</button>
            </div>
        </div>
    )
}

export default CartScreen;
