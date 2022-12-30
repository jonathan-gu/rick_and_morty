import createElement from "../utils/createElement"

const NumberPage = ({ numberPage, tagName = "option" } = {}) => createElement(
    {
        tagName,
        classList: [
            "numberPage"
        ],
        text: numberPage,
        attributes: {
            "data-tabId": numberPage,
        }
    }
)

export default NumberPage