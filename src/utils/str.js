export const titleCase = (str) => {
  if (!str) return str
  if (typeof str === 'string')
    return str.charAt(0).toUpperCase() + str.substring(1)
  throw new Error('Invalid argument, string expected')
}
