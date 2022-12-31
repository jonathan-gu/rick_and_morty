import ListCard from "../components/ListCard"
import { getCharactersFromApi } from "../utils/Api"

const PageCharacters = async (numberPage = 1) => {
    const response = await getCharactersFromApi(numberPage)
    const characters = response.results.map((element) => ({
        nameCharacter: element.name,
        image: element.image
    }))
    const numberPages = response.info.pages
    return ListCard(characters, numberPages, numberPage)
}

export default PageCharacters