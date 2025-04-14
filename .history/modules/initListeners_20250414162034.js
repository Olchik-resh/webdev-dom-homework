import { comments } from './comments.js'


export const initLikeListeners = (renderComments) => {

    const likeButtons = document.querySelectorAll('.like-button')

    for (const likeButton of likeButtons) {
        console.log('Атрибут data-index:', likeButton.dataset.index)
        likeButton.addEventListener('click', (event) => {
            console.log('Клик по кнопке «лайк»')

            const index = likeButton.dataset.index
            const comment = comments[index]

            console.log('comment.isLikes до изменения:', comment.isLikes)

            comment.likes = comment.isLikes
                ? comment.likes - 1
                : comment.likes + 1

            comment.isLikes = !comment.isLikes

            console.log('comment.likes после изменения:', comment.likes)
            console.log('comment.isLikes после изменения:', comment.isLikes)

            renderComments()
            console.log('renderComments вызван')

            event.stopPropagation()
        })
    }
}

export const initReplyListeners = () => {
     const commentClick = () => {
        const commentEl = document.querySelector('.add-form-text')
        const commentElements = document.querySelectorAll('.comment')
        for (const commentElement of commentElements) {
            commentElement.addEventListener('click', () => {
                const commentIndex = commentElement.dataset.index
                const comment = comments[commentIndex]
                commentEl.value = `>${comment.name}: ${comment.text}\n\n`
                commentEl.focus()
            })
        }
    }
    commentClick()
}

export const initAddCommentListener = ()