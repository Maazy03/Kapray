import React, { Component } from 'react';
import styles from './HomeScreen.module.css';
import MenHomeScreen from './MenHomeScreen'



class HomeScreen extends Component {



  render() {
    
    return (
      <div className={styles.body}>




        {/* <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="shirts.html">Shirts</a>
                </li>

                <li>
                    <a href="pants.html">Pants</a>
                </li>

            </ul>

        </aside> */}


        <section>
          <MenHomeScreen />
        </section>

        {/* <footer className="footer1">

        </footer> */}


      </div>
    );
  }
}

export default HomeScreen;
