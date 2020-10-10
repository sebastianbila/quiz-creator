import React from 'react';
import styles from './ActiveQuiz.module.css'
import AnswerList from './AnswerList/AnswerList';

const ActiveQuiz = props => (
    <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{props.activeQuestion}.</strong>&nbsp;{props.question}
            </span>
            <small>{props.activeQuestion} of {props.quizLen}</small>
        </p>

        <AnswerList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
        />
    </div>
)

export default ActiveQuiz





