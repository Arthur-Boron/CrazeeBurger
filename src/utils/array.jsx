export function deepClone (array) {
    return JSON.parse(JSON.stringify(array))
}

export function findById (id, array) {
    return array.find((obj) => obj.id == id)
}