export const initLikeListeners = () => {

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
        )}
    }
}