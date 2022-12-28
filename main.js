import PageCharacters from "./src/pages/PageCharacters"
import TabManager from "./src/utils/TabManager"

const rootElement = document.getElementById("app")

export const tabManager = new TabManager(rootElement, {
    pageCharacters: {
        component: PageCharacters
    }
})

tabManager.openTabById("pageCharacters")