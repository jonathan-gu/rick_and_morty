import Character from "../components/Character"
import { getCharacterFromApi } from "../utils/Api"

const PageCharacter = async (idCharacter) => {
    const response = await getCharacterFromApi(idCharacter)
    const character = {
        name: response.name,
        image: response.image,
        status: response.status,
        species: response.species,
        gender: response.gender,
    }
    return Character(character)
}

export default PageCharacter