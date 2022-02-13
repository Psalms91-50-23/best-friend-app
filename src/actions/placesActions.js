export const FILTERED_PLACES = "FILTERED_PLACES"
export const PLACES = "PLACES"

export function setPlaces(places){
    return {
        type: PLACES,
        places
    }
}

export function setFilteredPlaces(filteredPlaces){
    return {
        type: FILTERED_PLACES,
        filteredPlaces
    }
}
