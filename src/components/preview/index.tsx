import styles from './index.module.scss'
import useBus from 'use-bus'
import { AnimateFormData } from '../animateForm/interface'

interface StyleObj {
  prop: string
  value: string
}

function getStyleList(style: string): StyleObj[] {
  const styles = style.split('\n')
  const list = []
  for (let i = 0; i < styles.length; i++) {
    const syl = styles[i].split(':')
    const key = syl[0].trim()
    const value = syl[1].trim().replaceAll(';', '')
    list.push({ prop: key, value: value })
  }
  return list
}

function generateKeyframe(ani: AnimateFormData, idx: number) {
  let opacityStart = '',
    transformStart = ''
  let opacityEnd = '',
    transformEnd = ''
  let hasOpacity = false,
    hasTransform = false
  if (ani.prop === 'opacity') {
    hasOpacity = true
    opacityStart = `${ani.prop}: ${ani.startState};`
    opacityEnd = `${ani.prop}: ${ani.endState};`
  } else {
    hasTransform = true
    transformStart = ` ${ani.prop}(${ani.startState}px)`
    transformEnd = ` ${ani.prop}(${ani.endState}px)`
  }

  const keyframe = `
    @keyframes preview${idx} {
      0% {
        ${hasTransform ? 'transform:' + transformStart + ';' : ''}
        ${hasOpacity ? opacityStart : ''}
      }
      100% {
        ${hasTransform ? 'transform:' + transformEnd + ';' : ''}
        ${hasOpacity ? opacityEnd : ''}
      }
    }
  `
  return keyframe
}

function Preview() {
  // Add preview box styles
  useBus(
    'ADD_PREVIEW_STYLE',
    ({ type, payload }) => {
      const box = document.querySelector('#preview-box') as HTMLElement

      if (payload === '') {
        box.setAttribute('style', '')
        return
      }
      const styleList: StyleObj[] = getStyleList(payload)
      styleList.forEach((item) => {
        const { prop, value } = item
        box.style[prop] = value
      })
    },
    []
  )

  // Add preview box animation and play animation
  useBus(
    'ADD_PREVIEW_ANIMATION',
    ({ type, payload }) => {
      const box = document.querySelector('#preview-box') as HTMLElement
      const styleTar = document.querySelector('#animation') as HTMLElement

      const list = payload as AnimateFormData[]
      let keyFrames = '',
        animations = ''
      list.forEach((ani: AnimateFormData, idx: number) => {
        const animate = `${ani.cycle}s linear  ${ani.delay}s ${
          ani.loop ? 'infinite' : ''
        } preview${idx}    ,`
        keyFrames += generateKeyframe(ani, idx)
        animations += animate
      })
      animations = animations.slice(0, animations.length - 2)
      styleTar.innerHTML = keyFrames
      box.style.animation = animations
    },
    []
  )

  // stop animation playing
  useBus(
    'STOP_PREVIEW_ANIMATION',
    () => {
      const box = document.querySelector('#preview-box') as HTMLElement
      box.style.animation = ''
    },
    []
  )

  return (
    <article className={styles['preview-layout']}>
      <div id="preview-box" className={styles['preview-box']}></div>
    </article>
  )
}

export default Preview
