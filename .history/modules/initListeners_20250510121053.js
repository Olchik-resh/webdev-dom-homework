import { postComment } from './api.js'
import { comments } from './comments.js'

export const initLikeListeners = (renderComments) => {
    const likeButtons = document.querySelectorAll('.like-button')

    for (const likeButton of likeButtons) {
        likeButton.addEventListener('click', (event) => {
            event.stopPropagation()

            const index = likeButton.dataset.index
            const comment = comments[index]

            comment.likes = comment.isLikes
                ? comment.likes - 1
                : comment.likes + 1

            comment.isLikes = !comment.isLikes

            renderComments()         
        })
    }
}

export const initReplyListeners = () => {
        const text = document.getElementById ("text-input")
        const commentElements = document.querySelectorAll('.comment')

        for (const commentElement of commentElements) {
            commentElement.addEventListener('click', () => {
             const currentComent = comments[commentElement.dataset.index];
             text.value = `${currentComent.name}: ${currentComent.text}`
            })
        }
    }


const sanitizeHtml = (value) => {
    return value.replaceAll ("<", "&lt;").replaceAll(">", "&gt;");
}

export const initAddCommentListener = (renderComments) => {
    const text = document.getElementById ("text-input")
    const name = document.getElementById ("name-input")
    const addButton = document.querySelector('.add-form-button')

    addButton.addEventListener('click', () => {
        if (! name.value || !text.value) {
            console.error ("заполгите форму")
            return
        }
    
    const newComments = {
        name: sanitizeHtml(name.value),
        date: new Date(),
        text: sanitizeHtml(text.value),
        likes: 0,
        isLikes: false,
    }

    comment


//         postComment(sanitizeHtml(text.value), sanitizeHtml(name.value)).then(
//             () => {
//                 renderComments()
//                 name.value = ''
//                 text.value = ''
//             },
//         )
//     })
// }
