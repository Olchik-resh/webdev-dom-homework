import { comments } from './comments.js'
import {
    initAddCommentListener,
    initLikeListeners,
    initReplyListeners,
} from './initListeners.js'
import { token, name } from './api.js'
import { renderLogin } from './renderLogin.js'

export const renderComments = () => {
    const container = document.querySelector('.container')
    const commentsHtml = comments
        .map((comment, index) => {
            return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${new Date(comment.date).toLocaleDateString()}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button 
                class="like-button ${comment.isLikes ? '-active-like' : ''}" 
                data-index="${index}"
              >
              </button>
            </div>
          </div>
        </li>
        `
        })
        .join('')

    const addCommentsHtml = `
            <div class="add-form">
                <input
                  type="text"
                  class="add-form-name"
                  placeholder="Введите ваше имя"
                  readonly
                  value="${name}"
                  id="name-input" />
                <textarea
                  type="textarea"
                  class="add-form-text"
                  placeholder="Введите ваш коментарий"
                  rows="4"
                  id="text-input">
                </textarea>
                <div class="add-form-row">
                  <button class="add-form-button">Написать</button>
                </div>
            </div>
            <div class="form-loading" style="display: none; margin-top: 20px">
                Комментарий добавляется...
            </div>`

    const linkToLoginText = `<p>чтобы отправить коментарий, <span class="link_login">войдите</span></p>`

    const baseHtml = `<ul class="comments">${commentsHtml}</ul>
   ${token ? addCommentsHtml : linkToLoginText}`

    container.innerHTML = baseHtml

    if (token) {
        initLikeListeners()
        initReplyListeners()
        initAddCommentListener()
    } else {
        const linkLoginEl = document.querySelector('.link_login')
        linkLoginEl.addEventListener('click', () => {
            renderLogin()
        })
    }
}
