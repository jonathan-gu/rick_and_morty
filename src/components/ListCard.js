import Card from "./Card"
import DivCard from "./DivCard"
import DivNumberPage from "./DivNumberPage"
import NumberPage from "./NumberPage"
import { tabManager } from "../../main"

export default function ListCard(arrayOfElement, numberPages) {
    const template = document.getElementById("listOfElement")
    const element = template.content.cloneNode(true)

    const divCard = DivCard()
    const divNumberPage = DivNumberPage()

    element.querySelector("div").appendChild(divCard)
    element.querySelector("div").appendChild(divNumberPage)

    arrayOfElement.forEach(cardData => {
        divCard.appendChild(Card(cardData))
    })

    for (let i = 1; i <= numberPages; i++) {
        const page = {
            numberPage: i
        }
        const numberPage = NumberPage(page)
        divNumberPage.querySelector("select").appendChild(numberPage)
        numberPage.addEventListener("change", () => {
            console.log(1)
            tabManager.openTabById("pageCharacters", numberPage.getAttribute("data-tabId"))
        })
    }

    divNumberPage.querySelector("select").addEventListener("change", () => {
        tabManager.openTabById("pageCharacters", divNumberPage.querySelector("select").value)
    })

    return element
}