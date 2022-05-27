import styles from './index.module.scss'
import TableGroup from './tableGroup'
import AddAnimate from './addAnimate'
import { AnimateFormData } from './interface'
import { useState } from 'react'

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
        <AddAnimate sendData={getFormData}></AddAnimate>
      </header>
      <main className={styles.main}>
        <TableGroup animateList={animateList}></TableGroup>
      </main>
    </div>
  )
}

export default AnimateForm
