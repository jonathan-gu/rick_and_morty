import ListCard from "../components/ListCard"
import { getCharactersSearchFromApi } from "../utils/Api"

const PageCharactersSearch = async ({ inputValue, numberPage } = {}) => {
    const response = await getCharactersSearchFromApi(inputValue, numberPage)
    const characters = response.results.map((element) => ({
        id: element.id,
        nameCharacter: element.name,
        image: element.image
    }))
    const numberPages = response.info.pages

    return ListCard(characters, numberPages, numberPage, inputValue)
}

export default PageCharactersSearch