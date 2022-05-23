import styles from './index.module.scss'
import { Button } from 'antd'
import TableGroup from './tableGroup'

function AnimateForm() {
  return (
    <div className={styles['contain']}>
      <header className={styles.header}>
        <div className={styles.title}>Animate List</div>
        <Button type="primary">Add a Animate</Button>
      </header>
      <main className={styles.main}>
        <TableGroup></TableGroup>
      </main>
    </div>
  )
}

export default AnimateForm
