import React, {Component} from 'react';
import styles from './Drawer.module.css'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from 'react-router-dom'

class Drawer extends Component {

    handleClick = () => {
        this.props.onClose();
    }

    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to} exact={link.exact} activeClassName={styles.active} onClick={this.handleClick}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {

        const links = [
            {to: '/', label: 'List Quiz', exact: true},
        ]

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create quiz', exact: false})
            links.push({to: 'logout', label: 'Logout', exact: false})
        } else {
            links.push({to: '/auth', label: 'Authentication', exact: false})
        }

        const cls = [styles.Drawer]
        if (!this.props.isOpen) cls.push(styles.close)
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        );
    }
}

export default Drawer;