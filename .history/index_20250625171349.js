import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

e const userDataString = localStorage.getItem('userData');
const userData = userDataString ? JSON.parse(userDataString) : null;

export const fetchAndRenderComments = (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML =
            `<p>Пожалуйста подождите, загружаю комментарии...</p>`
    }

    fetchComments().then((data) => {
        updateComments(data) 
        renderComments()
    })
}

fetchAndRenderComments(true)
