import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-74bc1.firebaseio.com'
})