
export type Color = number | [number, number, number, number]

export const getRgba = (col: Color): [number, number, number, number] => {
  if (typeof (col) === 'number') {
    return [col, col, col, 1] as [number, number, number, number]
  } else {
    return col
  }
}

export const getRandomColor = (): Color => {
  return [
    Math.random(),
    Math.random(),
    Math.random(),
    1]
}

let _currentColor: [number, number, number, number] = [0, 0, 0, 0]
export function getColor() { return _currentColor }
export function setColor(color: Color) { _currentColor = getRgba(color) }
export function getAlpha() { return _currentColor[3] }
