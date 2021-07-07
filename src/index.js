import "./index.scss";

import { error } from "./pages/error/error";

const root = document.querySelector("#root");




root.innerHTML = error({code: "Упс...", message: "Страницы пока нет, но уже скоро она появится"});