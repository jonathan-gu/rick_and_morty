import InformationsCharacter from "./InformationsCharacter"

export default function Character(character) {
    const template = document.getElementById("listOfElement")
    const element = template.content.cloneNode(true)

    element.querySelector("div").appendChild(InformationsCharacter(character))

    return element
}