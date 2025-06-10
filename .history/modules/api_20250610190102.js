const host = `https://wedev-api.sky.pro/api/v2/:olchik-resh`
const authHost = `https://wedev-api.sky.pro/api/user`
import { renderComments } from "./renderComments.js"
import { updateComments } from "./comments.js"

export let token = ''

export const setToken = (newToken) => {
    token = newToken
}

export let name = ''

export const setName = (newName) => {
    name = newName
}

export const fetchComments = () => {
  return fetch(host + '/comments', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error('Ошибка сервера');
      }
      if (response.status === 400) {
        throw new Error('Неверный запрос');
      }
      return response.json();
    })
    .then((data) => {
      updateComments(data); // Обновление массива comments
    })
    .catch((error) => {
      console.error('Ошибка при получении комментариев:', error);
    });
};


export const postComment = (name, text) => {
  return fetch(host + '/comments', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      text,
    }),
  })
    .then((response) => {
      if (response.status === 500) {
        throw new Error('Ошибка сервера');
      }
      if (response.status === 400) {
        throw new Error('Неверный запрос');
      }
      if (response.status === 201) {
        return response.json();
      }
    })
    .then((data) => {
      if (data) {
        fetchComments().then(() => {
          renderComments(); // Обновление отображаемых комментариев
        });
      }
    })
    .catch((error) => {
      console.error('Ошибка при добавлении комментария:', error);
    });
};


async function loadComments() {
  const newComments = await fetchComments(); // Предполагаем, что fetchComments возвращает Promise с данными

  // Проверяем тип newComments
  console.log('Тип newComments:', typeof newComments);
  console.log('Структура newComments:', newComments);

  if (Array.isArray(newComments)) {
    updateComments(newComments);
  } else {
    console.error('newComments не является массивом:', newComments);
  }
}

// export const addAndFetchComments = (name, text) => {
//   return postComment(name, text).then(() => {
//     return fetchComments();
//   });
// };

export const login = (login, password) => {
    return fetch(authHost + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        }),
    })
}

export const registration = (name, login, password) => {
    return fetch(authHost, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            login: login,
            password: password,
        }),
    })
}
