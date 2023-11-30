export function capitalizeFirstLetter(str) {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function getTime(time) {
    return new Date(time * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' })
}