import PageCharacters from "./src/pages/PageCharacters"
import PageCharactersSearch from "./src/pages/PageCharactersSearch"
import TabManager from "./src/utils/TabManager"

const rootElement = document.getElementById("app")
const form = document.querySelector("form")
const input = document.querySelector("input")

export const tabManager = new TabManager(rootElement, {
    pageCharacters: {
        component: PageCharacters
    },
    pageCharactersSearch: {
        component: PageCharactersSearch
    }
})

tabManager.openTabById("pageCharacters")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    tabManager.openTabById("pageCharactersSearch", { inputValue: input.value })
})