  
//массив
let comments = [
    {name: 'Глеб Фокин', date: '12.02.22 12:18', text: 'Это будет первый комментарий на этой странице', likes: 3, isLikes: false},
    {name: 'Варвара Н.', date: '13.02.22 19:22', text: 'Мне нравится как оформлена эта страница! ❤', likes: 75, isLikes: false}
  ];

  const buttonEl = document.querySelector ('.add-form-button');
  const nameEl = document.querySelector ('.add-form-name');
  const listEl = document.querySelector ('.comments');
  const commentEl = document.querySelector ('.add-form-text'); 
  const commentElements = document.querySelectorAll('.comment');
  const likeButtons = document.querySelectorAll('.like-button');

  const renderComments = () => {
    console.log('Rendering comments...');
    listEl.innerHTML = comments
      .map((comment, index) => {
        return `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div id="likesContainer" class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button 
                class="like-button ${comment.isLikes ? '-active-like' : ''}" 
                data-index="${index}"
              >
              </button>
            </div>
          </div>
        </li>
        `;
      })
      .join("");

    const likeButtons = document.querySelectorAll('.like-button');
  
    for (const likeButton of likeButtons) {
      console.log('Атрибут data-index:', likeButton.dataset.index);
      likeButton.addEventListener('click', (event) => {
        console.log('Клик по кнопке «лайк»');
  
        const index = likeButton.dataset.index;
        const comment = comments[index];
  
        console.log('comment.isLikes до изменения:', comment.isLikes);
  
        comment.likes = comment.isLikes
          ? comment.likes - 1
          : comment.likes + 1;
  
        comment.isLikes = !comment.isLikes;
  
        console.log('comment.likes после изменения:', comment.likes);
        console.log('comment.isLikes после изменения:', comment.isLikes);
  
        renderComments(); // Вызов renderComments после изменения данных
        console.log('renderComments вызван');
  
        event.stopPropagation();
      });
    }
  };
  

    renderComments(); 
    


  // клик на комментарий и его коментирование
  const commentClick = () => {
const commentElements = document.querySelectorAll('.comment');
for (const commentElement of commentElements) {
  commentElement.addEventListener('click', () => {
    const commentIndex = commentElement.dataset.index;
    const comment = comments[commentIndex];
    commentEl.value = `>${comment.name}: ${comment.text}\n\n`;
    commentEl.focus();
  });
}
};

renderComments();
commentClick();

//Добавление коментария
  buttonEl.addEventListener('click', function() {   //добавляет обработчик клика на кнопку добавления комментария.
    if (nameEl.value.trim()===""||commentEl.value.trim ()==="") {
      alert ("Пожалуйста, укажите имя и текст комментария.");
      return;
  }

  const newComment = {    //Создаёт новый объект комментария 
    name: nameEl.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    date: `${new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
   })} ${new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  })}`,
    text: commentEl.value.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    likes: 0,
    isLikes: false,
  };
    comments.push(newComment);
    renderComments(); 
    
    nameEl.value = "";
    commentEl.value = "";
});

renderComments();