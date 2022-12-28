import ListCard from "../components/ListCard"
import { getCharactersFromApi } from "../utils/Api"

const PageCharacters = async () => {
    const response = await getCharactersFromApi()
    const data = response.map((element) => ({
        nameCharacter: element.name,
        image: element.image
    }))
    return ListCard(data)
}

export default PageCharacters