export const isString = (value) => {
  return typeof value === 'string'
}

export const isBoolean = (value) => {
  return typeof value === 'boolean'
}

export const isObject = (value) => {
  return typeof value === 'object'
}

export const has = (object, key) => {
  return isObject(object) && object.hasOwnProperty(key)
}

export const get = (object, key, defaultValue) => {
  return has(object, key) ? object[key] : defaultValue
}

export const px = value => {
  return `${value}px`
}

export const translate3d = (x, y, z = '0px') => {
  return `translate3d(${x}, ${y}, ${z})`
}