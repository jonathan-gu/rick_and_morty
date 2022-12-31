import ListCard from "../components/ListCard"
import { getCharactersSearchFromApi } from "../utils/Api"

const PageCharactersSearch = async ({ searchValue, numberPage } = {}) => {
    const response = await getCharactersSearchFromApi(searchValue, numberPage)
    const characters = response.results.map((element) => ({
        nameCharacter: element.name,
        image: element.image
    }))
    const numberPages = response.info.pages

    return ListCard(characters, numberPages, numberPage, searchValue)
}

export default PageCharactersSearch