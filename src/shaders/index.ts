import image from './image'
import solid from './solid'
import sample from './sample'
import { Shader, createShader } from '../gl/shader'
import { checkerFrag } from './checker'

export const Shaders = { image, solid, sample }

let solidShader: Shader | null = null
export function getSolidShader() {
  if (!solidShader) {
    solidShader = createShader(solid.vert, solid.frag)
  }
  return solidShader
}

let checkerShader: Shader | null = null
export function getCheckerShader() {
  if (!checkerShader) {
    checkerShader = createShader(image.vert, checkerFrag)
  }
  return checkerShader
}

let imageFlipUvShader: Shader | null = null
export function getImageFlipUvShader() {
  if (!imageFlipUvShader) {
    imageFlipUvShader = createShader(image.uvFlipVert, image.frag);
  }
  return imageFlipUvShader;
}

let imageShader: Shader | null = null
export function getImageShader() {
  if (!imageShader) {
    imageShader = createShader(image.vert, image.frag);
  }
  return imageShader;
}