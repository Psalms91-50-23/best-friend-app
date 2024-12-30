export const BOUNDS = "BOUNDS"
export const COORDINATES = "COORDS"
export const USER_COORDINATE = "USER_COORDINATE"

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

export function setUserCoordinate(user_coordinate){
    return {
        type: USER_COORDINATE,
        user_coordinate
    }
}