export const TYPE = "TYPE"
export const RATING = "RATING"

export function setType(searchType){
    return {
        type: TYPE,
        searchType
    }
}

export function setRating(rating){
    return {
        type: RATING,
        rating
    }
}