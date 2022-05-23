import styles from './index.module.scss'
import { Button } from 'antd'

function AnimateForm() {
  return (
    <div className={styles['contain']}>
      <header className={styles.header}>
        <div className={styles.title}>Animate List</div>
        <Button type="primary">Add a Animate</Button>
      </header>
      <div>Table</div>
    </div>
  )
}

export default AnimateForm
