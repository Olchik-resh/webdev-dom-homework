const host = `https://wedev-api.sky.pro/api/v1/olchik-resh`

export const fetchComments = () => {
    return fetch(host + '/comments')
        .then((res) => {
            return res.json()
        })
        .then((responsData) => {
            const appComments = responsData.comments.map(comment => {
                return {
                    name: comment.author.name,
                    date: new Date (comment.date),
                    text: comment.text
                }
            })
        })
}
