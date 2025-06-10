import { fetchComments } from './modules/api.js'
import { updateComments } from './modules/comments.js'
import { renderComments } from './modules/renderComments.js'

// document.querySelector('.comments').innerHTML =
//     'Пожалуйста поддождите, загружаю комментарии.'


export const fetchAndRenderComments = (isFirstLoading) => {

if (isFirstLoading) {
    
}

    fetchComments().then((data) => {
        updateComments(data)

        renderComments()
    })
}

fetchAndRenderComments ()

