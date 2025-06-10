import { comments } from './comments.js'
import { initLikeListeners, initReplyListeners } from './initListeners.js'

export const renderComments = () => {
    const listEl = document.querySelector('.conte')
    listEl.innerHTML = comments
        .map((comment, index) => {
            return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date.toLocaleDateString()}</div>
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

    initLikeListeners(renderComments)
    initReplyListeners()
}
