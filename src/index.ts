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
import { getRgba, getRandomColor } from './common/color'
import { Shader, createShader } from './gl/shader'
import { GraphicsBuffer, GraphicsBufferType } from './gl/graphics-buffer'
import { Framebuffer } from './gl/framebuffer'
import { draw } from './gl/draw'

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

  FLOAT,
}

export default Graphics