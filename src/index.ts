import { drawRect } from './drawing/draw-rect'
import { drawCircle, setCircleResolution } from './drawing/draw-circle'
import {
  clearColor,
  getGL,
  FLOAT,
  setContext,
  setFramebuffer,
  getCurrentFramebuffer,
  getWidth,
  getHeight,
  setViewport,
  isContextInitialized,
} from './gl/context'
import {
  getRgba,
  getRandomColor,
  setColor,
  getAlpha,
  getColor,
} from './common/color'
import { Shader, createShader } from './gl/shader'
import { GraphicsBuffer, GraphicsBufferType } from './gl/graphics-buffer'
import { Framebuffer } from './gl/framebuffer'
import { draw, TRIANGLE_STRIP, TRIANGLES } from './gl/draw'
import { beginShape, endShape, vertex } from './drawing/shape'
import { pushMatrix, popMatrix, translate, scale, rotate } from './common/transform'








const Graphics = {
  clearColor,
  createShader,
  draw,
  drawCircle,
  drawRect,
  Framebuffer,
  getCurrentFramebuffer,
  getGL,
  getRgba,
  getHeight,
  getWidth,
  GraphicsBuffer,
  GraphicsBufferType,
  isContextInitialized,
  setCircleResolution,
  setContext,
  setFramebuffer,
  setViewport,
  Shader,
  getRandomColor,

  getColor,
  setColor,
  getAlpha,

  beginShape,
  endShape,
  vertex,

  pushMatrix,
  popMatrix,
  translate,
  scale,
  rotate,

  TRIANGLE_STRIP,
  TRIANGLES,
  FLOAT,
}

export default Graphics
export {
  clearColor,
  createShader,
  draw,
  drawCircle,
  drawRect,
  Framebuffer,
  getCurrentFramebuffer,
  getGL,
  getRgba,
  getHeight,
  getWidth,
  GraphicsBuffer,
  GraphicsBufferType,
  isContextInitialized,
  setCircleResolution,
  setContext,
  setFramebuffer,
  setViewport,
  Shader,
  getRandomColor,

  getColor,
  setColor,
  getAlpha,

  beginShape,
  endShape,
  vertex,

  pushMatrix,
  popMatrix,
  translate,
  scale,
  rotate,

  TRIANGLE_STRIP,
  TRIANGLES,
  FLOAT,
}
