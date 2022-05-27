import styles from './index.module.scss'
import TableGroup from './tableGroup'
import AddAnimate from './addAnimate'
import { AnimateFormData } from './interface'
import { useState } from 'react'
import { Button } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

function AnimateForm() {
  const [animateList, setAnimateList] = useState<AnimateFormData[]>([])
  const getFormData = (data: AnimateFormData) => {
    setAnimateList((list) => {
      return [...list, data]
    })
  }
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
