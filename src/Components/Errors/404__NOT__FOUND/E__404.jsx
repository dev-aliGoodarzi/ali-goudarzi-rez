//React
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { E_404__image } from "../../ImagesExporter/ImagesExporter";
//React
//Images
//Images
//CSS
import styles from "./E__404.module.css";
//CSS
//Modules
//Modules

class E__404 extends Component {
  state = {};
  render() {
    const { themeColor } = this.props;
    return (
      <div className={styles.notFound}>
        <p>Requested Resource Not Found</p>
        <img src={E_404__image} alt="" />
        <div className={styles.itemsContainer}>
          <button
            onClick={() => window.history.back()}
            style={{ background: themeColor }}
          >
            GET BACK
          </button>
          <Link to="/" style={{ background: themeColor }}>
            GO TO HOME
          </Link>
        </div>
      </div>
    );
  }
}

export default E__404;
