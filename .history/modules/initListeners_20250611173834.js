import { postComment, fetchComments } from './api.js'
import { comments, updateComments } from './comments.js'
import { sanitizeHtml } from './sanitizeHtml.js'



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
    const text = document.getElementById('text-input')
    const commentElements = document.querySelectorAll('.comment')

    for (const commentElement of commentElements) {
        commentElement.addEventListener('click', () => {
            const currentComment = comments[commentElement.dataset.index]
            text.value = `${currentComment.name}: ${currentComment.text}`
        })
    }
}


export const initAddCommentListener = () => {
  const name = document.getElementById('name-input');
  const text = document.getElementById('text-input');
  const addButton = document.querySelector('.add-form-button');

  addButton.addEventListener('click', () => {
    if (!name.value || !text.value) {
      alert('Заполните форму');
      return;
    }

    document.querySelector('.form-loading').style.display = 'block';
    document.querySelector('.add-form').style.display = 'none';

    postComment(sanitizeHtml(name.value), sanitizeHtml(text.value))
      .then((data) => {
        // Скрываем индикатор загрузки и показываем форму
        document.querySelector('.form-loading').style.display = 'none';
        document.querySelector('.add-form').style.display = 'flex';

        // Обновляем комментарии на странице
        updateComments(data);

        // Очищаем поля ввода
        name.value = '';
        text.value = '';

        // После добавления комментария, обновлённый список комментариев
        return fetchComments();
      })
      .then((comments) => {
        console.log(comments);
      })
      .catch((error) => {
        // Скрываем индикатор загрузки и показываем форму
        document.querySelector('.form-loading').style.display = 'none';
        document.querySelector('.add-form').style.display = 'flex';

        if (error.message === 'Failed to fetch') {
          alert('Нет интернета, попробуйте снова');
        } else if (error.message === 'Ошибка сервера') {
          alert('Ошибка сервера');
        } else if (error.message === 'Неверный запрос') {
          alert('Имя и комментарий должны быть не короче 3х символов');

          name.classList.add('-error');
          text.classList.add('-error');

          setTimeout(() => {
            name.classList.remove('-error');
            text.classList.remove('-error');
          }, 2000);
        }
      });
  });
};