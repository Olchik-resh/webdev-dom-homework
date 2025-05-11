import { initAddCommentListener } from './modules/initListeners.js'
import { renderComments } from './modules/renderComments.js'

renderComments()

initAddCommentListener(renderComments)

const fetchPromise = fetch("https://wedev-api.sky.pro/api/v1/olchik-resh/comments", {
    method: "GET",
 });

 fetchPromise.then((response) => {
    const jsonPromise = response.json();
 
    // Подписываемся на результат преобразования
    jsonPromise.then((responseData) => {
       console.log(responseData)
    });
 });