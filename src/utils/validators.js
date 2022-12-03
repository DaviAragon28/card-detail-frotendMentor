export const cardNumberValidator = (value) => {
    return value.length === 16
}

export const monthValidator = (value) => {
    return value >= 1 && value <= 12
}

export const yearValidator = (value) => {
    return value >= 22 && value <= 90
}