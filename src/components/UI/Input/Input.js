import React from 'react';
import styles from './Input.module.css'

const Input = (props) => {

    const inputType = props.type || 'text'
    const cls = [styles.Input]
    const htmlFor = `#{inputType}-${Math.random()}`

    function isInvalid({valid, touched, shouldValidate}) {
        return !valid && shouldValidate && touched
    }

    if (isInvalid(props)) {
        cls.push(styles.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange}/>

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Invalid value'}</span>
                    : null
            }

        </div>
    );
};

export default Input;


