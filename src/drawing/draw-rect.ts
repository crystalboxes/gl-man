import { Color, getRgba, getAlpha } from "../common/color"
import { Shader } from '../gl/shader'
import { pushMatrix, translate, scale, getCurrentMatrix, popMatrix } from '../common/transform'
import { getSolidShader, getImageFlipUvShader } from "../shaders"
import { FLOAT, getWidth, getHeight } from "../gl/context"
import { GraphicsBuffer, GraphicsBufferType } from "../gl/graphics-buffer"
import { draw } from '../gl/draw'
import { Image } from '../gl/framebuffer'

type DrawRectData = {
  vertexBuffer: GraphicsBuffer
  indexBuffer: GraphicsBuffer
  shader: Shader
}

let _drawRectData: DrawRectData | null = null

function getDrawRectData() {
  if (!_drawRectData) {
    _drawRectData = {
      vertexBuffer: new GraphicsBuffer(GraphicsBufferType.VERTEX),
      indexBuffer: new GraphicsBuffer(GraphicsBufferType.INDEX),
      shader: getSolidShader()
    }

    _drawRectData.vertexBuffer.setData(new Float32Array([
      0, 1, 0, 0,
      1, 0, 1, 1,
    ]))

    _drawRectData.indexBuffer.setData(new Uint16Array([3, 2, 1, 3, 1, 0]))
  }
  return _drawRectData
}

function executeDrawRectData(drawRectData: DrawRectData, shader: Shader) {
  const { vertexBuffer, indexBuffer } = drawRectData
  draw(shader, ['position',], [{
    size: 2,
    glType: FLOAT,
    normalized: false,
    stride: 0,
    offset: 0,
  },], 0, 6, vertexBuffer, indexBuffer)
}

function getMatrix(x: number, y: number, width: number, height: number) {
  pushMatrix()
  translate(x, y, 0)
  scale(width, height)
  const mat = getCurrentMatrix()
  popMatrix()
  return mat
}

export function drawImage(image: Image, x: number, y: number, width?: number, height?: number, opacity?: number, shader?: Shader | null) {
  if (!image) {
    drawRect(x, y, width || getWidth(), height || getHeight(), [1, 0, 1, 1], shader)
  }

  width = width || image.width
  height = height || image.height
  opacity = opacity || getAlpha()

  const drawRectData = getDrawRectData()
  const mat = getMatrix(x, y, width, height)

  shader = getImageFlipUvShader();

  shader.setTexture('texture', image.texture)
  shader.setMatrix('xform', mat)
  shader.setFloat('alpha', opacity)

  executeDrawRectData(drawRectData, shader)
}

export function drawRect(x: number, y: number, width: number, height: number, color: Color, shader?: Shader | null) {
  const drawRectData = getDrawRectData()
  const mat = getMatrix(x, y, width, height)

  shader = shader || drawRectData.shader
  color = getRgba(color)

  shader.setVector4('color', color)
  shader.setMatrix('xform', mat)

  executeDrawRectData(drawRectData, shader)
}
