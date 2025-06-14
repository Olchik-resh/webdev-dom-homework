//массив
export let comments = []

export const updateComments = (newComments) => {
    comments = newComments
}

const commentsEl = document.querySelector('.comments');

