export const TYPE = "TYPE"
export const RATING = "RATING"
export const GEOLOCATION = "GEOLOCATION"
export const FILTERED = "FILTERED"
// export const TYPE = "TYPE"

export function set_Type(searchType){
    return {
        type: TYPE,
        searchType
    }
}

export function set_Rating(rating){
    return {
        type: RATING,
        rating
    }
}

export function set_Geolocation(geolocation){
    return {
        type: GEOLOCATION,
        geolocation
    }
}

export function set_FilteredPlaces(filteredPlaces){
    return {
        type: FILTERED,
        filteredPlaces
    }
}