import createElement from "../utils/createElement"

const DivCard = ({ tagName = "div" } = {}) => createElement(
    {
        tagName,
        attributes: {
            id: "divCard"
        }
    }
)

export default DivCard