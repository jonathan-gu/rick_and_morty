export const getCharactersFromApi = async (numberPage) => {
    const request = await fetch("https://rickandmortyapi.com/api/character/?page=" + numberPage)
    const response = await request.json()

    return response
}

export const getCharactersSearchFromApi = async (valueSearch, numberPage) => {
    const request = await fetch("https://rickandmortyapi.com/api/character/?name=" + valueSearch + "&page=" + numberPage)
    const response = await request.json()

    return response
}