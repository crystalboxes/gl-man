import { GraphicsBuffer, GraphicsBufferType } from "../gl/graphics-buffer"
import { getSolidShader } from "../shaders"
import { draw, TRIANGLE_STRIP } from "../gl/draw"
import { FLOAT } from "../gl/context"
import { getColor } from "../common/color"
import { getCurrentMatrix } from "../common/transform"

type Shape = {
  buffer: GraphicsBuffer
  vertices: number[]
}

let _shapes: Shape[] = []

const allocateShape = (): Shape => ({ buffer: new GraphicsBuffer(GraphicsBufferType.VERTEX), vertices: [] })

export function beginShape() {
  _shapes.push(allocateShape())
}

export function endShape() {
  // TODO triangulate shapes 
  const shape = _shapes.pop()
  if (!shape) { return }
  const shader = getSolidShader()
  shader.setMatrix('xform', getCurrentMatrix())
  shader.setVector4('color', getColor())

  console.log(shape.vertices)
  shape.buffer.setData(new Float32Array(shape.vertices))
  // draw
  draw(shader, ['position',], [{
    size: 3,
    glType: FLOAT,
    normalized: false,
    stride: 0,
    offset: 0,
  },], 0, shape.vertices.length / 3, shape.buffer, undefined, TRIANGLE_STRIP)
  shape?.buffer.release()
}

export function vertex(p0: number, p1: number, p2?: number) {
  if (_shapes.length) {
    _shapes[_shapes.length - 1].vertices.push(...[p0, p1, p2 || 0])
  }
}
