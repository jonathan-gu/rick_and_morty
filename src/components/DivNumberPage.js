import createElement from "../utils/createElement"

const DivNumberPage = ({ tagName = "div" } = {}) => createElement(
    {
        tagName,
        attributes: {
            id: "divNumberPage"
        },
        children: [
            {
                tagName: "select"
            }
        ]
    }
)

export default DivNumberPage