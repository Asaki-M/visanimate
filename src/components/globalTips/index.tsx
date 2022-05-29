import styles from './index.module.scss'
import { Button } from 'antd'
import { useState } from 'react'
import { dispatch } from 'use-bus'

const GlobalTips = () => {
  const showTips = !!window.localStorage.getItem('showTips')
  const tips = [
    'Firstly, should add some animation by the "Add an Animation" button.',
    'Secondly, click the "play" button to preview the animation and the "stop" button to stop the animation.',
    'Thirdly, can write some CSS styles to change preview box styles.',
    'Finally, able use to copy from the "Animation code textarea"'
  ]

  const [cidx, setCidx] = useState(0)
  const nextTip = () => {
    const i = cidx + 1
    if (i === tips.length) {
      window.localStorage.setItem('showTips', 'close')
      dispatch('CLOSE_TIPS')
    } else {
      setCidx(i)
    }
  }

  return (
    <main className={`${styles.mask} ${styles[showTips ? 'close' : '']}`}>
      <section className={styles['tips' + cidx]}>
        <p>{tips[cidx]}</p>
        <Button type="link" onClick={nextTip}>
          {tips.length - 1 === cidx ? 'Done' : 'Next'}
        </Button>
      </section>
    </main>
  )
}

export default GlobalTips
