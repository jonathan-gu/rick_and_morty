import createElement from "../utils/createElement"

const Card = ({ id, nameCharacter, image, tagName = "div" } = {}) => createElement(
    {
        tagName,
        classList: [
            "card"
        ],
        attributes: {
            id: id
        },
        children: [
            {
                tagName: "img",
                attributes: {
                    src: image
                }
            },
            {
                tagName: "h1",
                text: nameCharacter
            }
        ]
    }
)

export default Card