import React, {Component} from 'react';
import styles from './QuizList.module.css'
import {NavLink} from 'react-router-dom'
import Loader from "../../components/UI/Loader/Loader";
import {connect} from "react-redux";
import {fetchQuizes} from "../../redux/actions/quiz";

class QuizList extends Component {

    renderQuiz() {
        return this.props.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount =  () => {
        this.props.fetchQuizes();
    };

    render() {
        return (
            <div className={styles.QuizList}>
                <div>
                    <h1>Quiz List</h1>

                    {this.props.loading || !this.props.quizes ?
                        <Loader/> :
                        <ul>
                            {this.renderQuiz()}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);