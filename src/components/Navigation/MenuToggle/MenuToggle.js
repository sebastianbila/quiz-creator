import React from 'react'
import styles from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        styles.MenuToggle,
        'fa',
    ]

    if (props.isOpen) cls.push('fa-times', styles.open)
    else cls.push('fa-bars')

    return (
        <i
            onClick={props.onToggle}
            className={cls.join(' ')}/>
    )
}

export default MenuToggle