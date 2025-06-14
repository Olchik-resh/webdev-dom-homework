//массив
export let comments = []

export const updateComments = (newComments) => {
    comments = newComments
}

const commentsEl = document.querySelector('.comments');
if (commentsEl) {
    commentsEl.innerHTML = "Пожалуйста, подождите, загружаю комментарии.";
} else {
    console.error('Элемент с классом .comments не найден');
}

