import React, {Component} from 'react';
import styles from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';
import axios from '../../axios/axios-quiz';
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../../redux/actions/quiz";

class Quiz extends Component {

    componentDidMount = async () => {
        console.log(this.props.match.params.id)
        this.props.fetchQuizById(this.props.match.params.id)
    }

    onAnswerSelectedHandler = (answerId) => {
      this.props.quizAnswerClick(answerId)
    }

    componentWillUnmount() {
        this.props.retryQuiz()
    }

    render() {
        let quizId = this.props.activeQuestion;
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Fill out form</h1>
                    {
                        this.props.loading || !this.props.quiz ? <Loader/>
                            : this.props.isFinished
                            ? <FinishedQuiz
                                onRetry={this.props.retryQuiz}
                                quiz={this.props.quiz}
                                results={this.props.results}/>

                            : <ActiveQuiz
                                onAnswerClick={this.onAnswerSelectedHandler}
                                answers={this.props.quiz[quizId].answer}
                                question={this.props.quiz[quizId].question}
                                quizLen={this.props.quiz.length}
                                activeQuestion={this.props.activeQuestion + 1}
                                state={this.props.answerState}
                            />
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);