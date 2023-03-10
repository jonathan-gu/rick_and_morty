import Card from "./Card"
import DivCard from "./DivCard"
import DivNumberPage from "./DivNumberPage"
import NumberPage from "./NumberPage"
import { tabManager } from "../../main"

export default function ListCard(arrayOfElement, numberPages, numberPage, inputValue = null) {
    const template = document.getElementById("listOfElement")
    const element = template.content.cloneNode(true)

    const divCard = DivCard()
    const divNumberPage = DivNumberPage()

    element.querySelector("div").appendChild(divCard)
    element.querySelector("div").appendChild(divNumberPage)

    arrayOfElement.forEach(cardData => {
        const card = Card(cardData)
        divCard.appendChild(card)
        card.addEventListener("click", () => {
            tabManager.openTabById("pageCharacter", card.id)
        })
    })

    for (let i = 1; i <= numberPages; i++) {
        const page = {
            numberPage: i
        }
        const numberPageComponent = NumberPage(page)
        if (i == numberPage) {
            numberPageComponent.setAttribute("selected", "")
        }
        divNumberPage.querySelector("select").appendChild(numberPageComponent)
    }

    divNumberPage.querySelector("select").addEventListener("change", () => {
        if (inputValue == null) {
            tabManager.openTabById("pageCharacters", divNumberPage.querySelector("select").value)
        }
        else {
            tabManager.openTabById("pageCharactersSearch", { numberPage: divNumberPage.querySelector("select").value, inputValue: inputValue })
        }
    })

    return element
}