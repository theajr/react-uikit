const cx = (obj) =>
  Object.entries(obj)
    .filter(([key, value]) => value)
    .map(([key, value]) => key)
    .join(' ')
export default cx
