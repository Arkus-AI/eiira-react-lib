
const useId = () => {
    let id = Math.random().toString(36)
    return id.slice(id.length - 5)
}

export { useId };