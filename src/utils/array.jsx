export function deepClone (array) {
    return JSON.parse(JSON.stringify(array))
}

export function findById (id, array) {
    return array.find((obj) => obj.id == id)
}

export function findIndexById (id, array) {
    return array.findIndex((obj) => obj.id == id)
}

export function filterId (id, array) {
    return array.filter((obj) => obj.id !== id)
}