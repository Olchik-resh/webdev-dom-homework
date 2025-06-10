//массив
export let comments = []

export const updateComments = (newComments) => {
    comments = newComments
}

async function updatePage() {
  const newComments = await fetchComments(); // Предполагаем, что fetchComments возвращает Promise с данными

  // Проверяем тип newComments
  console.log('Тип newComments:', typeof newComments);
  console.log('Структура newComments:', newComments);

  if (Array.isArray(newComments)) {
    // Здесь происходит обновление комментариев
  } else {
    console.error('newComments не является массивом:', newComments);
  }
}