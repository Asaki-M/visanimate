import styles from './index.module.scss'
import Editor from '../common/editor'
import { Divider } from 'antd'

function Control() {
  return (
    <aside className={styles['control-layout']}>
      <section className={styles['form-layout']}>control layout</section>
      <section className={styles['code-layout']}>
        <div className={styles.code}>
          <Editor canEditor></Editor>
        </div>
        <Divider className={styles.divider} type="vertical"></Divider>
        <div className={styles.code}>
          <Editor canEditor={false}></Editor>
        </div>
      </section>
    </aside>
  )
}

export default Control
