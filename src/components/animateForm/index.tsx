import styles from './index.module.scss'
import TableGroup from './tableGroup'
import AddAnimate from './addAnimate'
import { AnimateFormData } from './interface'
import { useState } from 'react'
import { Button, message } from 'antd'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import useBus, { dispatch } from 'use-bus'

function AnimateForm() {
  const [animateList, setAnimateList] = useState<AnimateFormData[]>([])
  const getFormData = (data: AnimateFormData) => {
    setAnimateList((list) => {
      return [...list, data]
    })
  }

  // play and stop
  const [playing, setPlaying] = useState(false)
  const playAnimation = () => {
    if (animateList.length === 0) {
      message.warning('No animation, should add some animation !')
      return
    }
    setPlaying(true)
    dispatch({ type: 'ADD_PREVIEW_ANIMATION', payload: animateList })
  }
  const stopAnimation = () => {
    setPlaying(false)
    dispatch('STOP_PREVIEW_ANIMATION')
  }

  // delete animation list
  useBus(
    'DELETE_ANIMATION',
    ({ type, payload }) => {
      setAnimateList((list) => {
        const temp = list
        temp.splice(payload, 1)
        return [...temp]
      })
    },
    []
  )
  return (
    <div className={styles['contain']}>
      <header className={styles.header}>
        <div className={styles.title}>Animate List</div>
        <div className={styles.controls}>
          <AddAnimate sendData={getFormData}></AddAnimate>
          <Button
            type="primary"
            className={styles.play}
            icon={<PlayCircleOutlined />}
            disabled={playing}
            onClick={playAnimation}
          ></Button>
          <Button
            type="primary"
            className={styles.play}
            icon={<PauseCircleOutlined />}
            disabled={!playing}
            onClick={stopAnimation}
          ></Button>
        </div>
      </header>
      <main className={styles.main}>
        <TableGroup animateList={animateList}></TableGroup>
      </main>
    </div>
  )
}

export default AnimateForm
