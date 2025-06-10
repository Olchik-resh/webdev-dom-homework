import { login } from "./api.js"
import { setName, setToken } from "./api.js"
import {fetchAndRenderComments} from "./index.js"

export const renderRegistration = () => {
    const container = document.querySelector('.container')

    const loginHtml = `
        <section class="add-form"> 
            <h1>Форма регистрации</h1>
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите имя"
                    id="name"
                    required />
                 <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите логин"
                    id="login"
                    required />
                <input
                    type="text"
                    class="add-form-name"
                    placeholder="Введите пароль"
                    id="password"
                    required
                ></input>
                <fieldset class="add-form-registry">
                    <button class="add-form-button-main button-main" type="submit">Войти</button>
                    <u class="add-form-button-link registry">Зарегистрироваться</u>
                </fieldset></>
        </section>`

    container.innerHTML = loginHtml

    const nameEl = document.querySelector ("#name")
    const loginEl = document.querySelector ("#login")
    const passwordEl = document.querySelector ("#password")
    const submitButtonEl = document.querySelector (".button-main")

    submitButtonEl.addEventListener ("click", ()=> {
        Registration (nameEl.value, loginEl.value, passwordEl.value).then ((response)=> {
            return response.json()
        }).then ((data)=> {
            setToken(data.user.token)
            setName(data.user.name)
            fetchAndRenderComments()
        })
    })
}