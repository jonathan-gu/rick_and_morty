import createElement from "../utils/createElement";

const InformationsCharacter = ({ name, image, status, species, gender, tagName = "div" } = {}) => createElement(
    {
        tagName,
        attributes: {
            id: "character"
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
                text: name
            },
            {
                tagName: "p",
                text: status
            },
            {
                tagName: "p",
                text: species
            },
            {
                tagName: "p",
                text: gender
            }
        ]
    }
)

export default InformationsCharacter