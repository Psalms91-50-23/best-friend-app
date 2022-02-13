export const BOUNDS = "BOUNDS"
export const COORDINATES = "COORDS"

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