export const GEOLOCATION = "GEOLOCATION"
export const BOUNDS = "BOUNDS"
export const COORDINATES = "COORDS"

export function setGeolocation(geolocation){
    return {
        type: GEOLOCATION,
        geolocation
    }
}

export function setBounds(bounds){
    return {
        type: BOUNDS,
        bounds
    }
}

export function setCoordinates(coordinates){
    return {
        type: COORDINATES,
        coordinates
    }
}