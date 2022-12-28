import Card from "./Card"

export default function ListCard(arrayOfElement) {
    const template = document.getElementById("listOfElement")
    const element = template.content.cloneNode(true)

    arrayOfElement.forEach(cardData => {
        element.querySelector("div").appendChild(Card(cardData))
    })

    return element
}