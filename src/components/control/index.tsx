import styles from './index.module.scss'

function Control() {
  return (
    <aside className={styles['control-layout']}>
      <section className={styles['form-layout']}>control layout</section>
      <section className={styles['code-layout']}>
        <div>box style layout</div>
        <div>generate code layout</div>
      </section>
    </aside>
  )
}

export default Control
