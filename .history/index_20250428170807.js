import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

renderComments()

initAddCommentListener(renderComments)



const fetchPromise = fetch("https://wedev-api.sky.pro/api/v1/olchik-resh/comments", {
    method: "GET",
 });