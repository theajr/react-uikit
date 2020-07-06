const filterer = (arg) => {
  const type = typeof arg
  return arg && (type === 'object' || Array.isArray(arg) || type === 'string')
}
const cx = (...args) =>
  args
    .filter(filterer)
    .map((arg) => {
      const type = typeof arg

      if (Array.isArray(arg)) {
        return arg.filter(filterer)
      }
      switch (type) {
        case 'string':
          return [arg]
        case 'object':
          return Object.entries(arg)
            .filter(([key, value]) => value)
            .map(([key, value]) => key)

        default:
          return []
      }
    })

    .flat()
    .join(' ')

export default cx
