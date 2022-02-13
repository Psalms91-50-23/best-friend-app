export const FILTERED_PLACES = "FILTERED_PLACES"
export const PLACES = "PLACES"
export const EMPTY_PLACES = "EMPTY_PLACES"
export const EMPTY_FILTERED_PLACES = "EMPTY_FILTERED_PLACES"
export const EMPTY_ALL = "EMPTY_ALL"
export const RERENDER = "RERENDER"

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

export function emptyAllPlaces(){
    return {
        type: EMPTY_ALL
    }
}
export function emptyPlaces(){
    return {
        type: EMPTY_PLACES
        
    }
}

export function emptyFilteredPlaces(){
    return {
        type: EMPTY_FILTERED_PLACES
        
    }
}

export function reRender(booleanValue){
    return{
        type: RERENDER,
        render: booleanValue
    }
}