import createElement from "../utils/createElement"

const Card = ({ nameCharacter, image, tagName = "div" } = {}) => createElement(
    {
        tagName,
        classList: [
            "card"
        ],
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