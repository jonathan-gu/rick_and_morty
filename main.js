import PageCharacters from "./src/pages/PageCharacters"
import PageCharactersSearch from "./src/pages/PageCharactersSearch"
import PageCharacter from "./src/pages/PageCharacter"
import TabManager from "./src/utils/TabManager"

const logo = document.getElementById("logo")
const form = document.querySelector("form")
const rootElement = document.getElementById("app")
const input = document.querySelector("input")

export const tabManager = new TabManager(rootElement, {
    pageCharacters: {
        component: PageCharacters
    },
    pageCharactersSearch: {
        component: PageCharactersSearch
    },
    pageCharacter: {
        component: PageCharacter
    }
})

tabManager.openTabById("pageCharacters")

logo.addEventListener("click", () => {
    tabManager.openTabById("pageCharacters")
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    tabManager.openTabById("pageCharactersSearch", { inputValue: input.value })
})