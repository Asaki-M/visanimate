import styles from './index.module.scss'
import useBus from 'use-bus'

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

function Preview() {
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
  return (
    <article className={styles['preview-layout']}>
      <div id="preview-box" className={styles['preview-box']}></div>
    </article>
  )
}

export default Preview
