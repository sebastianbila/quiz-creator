import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop = props => (
    <div
        onClick={props.onClick}
        className={styles.Backdrop}>
    </div>
)

export default Backdrop