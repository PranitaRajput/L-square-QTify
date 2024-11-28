import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};
console.log(styles); // This should log an object with the class names from Button.module.css
console.log("Rendering Button");


export default Button;
