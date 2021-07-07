import "./index.scss";

import { error } from "./pages/error/error";

const root = document.querySelector("#root");

const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = error({code: "Упс...", message: "Страницы пока нет, но уже скоро она появится"});
        break;
    case '/500':
        root.innerHTML = error({code: "500", message: "Мы уже фиксим"});
        break;
    default:
        root.innerHTML = error({code: "404", message: "Не туда попали"});

} 

