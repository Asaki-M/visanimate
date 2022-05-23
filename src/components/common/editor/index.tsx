import { Input, Button } from 'antd'
import { CheckOutlined, CopyOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { propsInterface } from './interface'

const { TextArea } = Input

function Editor(props: propsInterface) {
  const { canEditor } = props
  return (
    <div className={styles['editor-contain']}>
      {canEditor ? (
        <div className={styles['can-editor']}>
          <div className={styles.title}>preview box style</div>
          <Button type="link" icon={<CheckOutlined />}></Button>
        </div>
      ) : (
        <div className={styles['cannot-editor']}>
          <div className={styles.title}>animate code</div>
          <Button type="link" icon={<CopyOutlined />}></Button>
        </div>
      )}

      <TextArea
        placeholder={canEditor ? 'Can editor preview box style here' : ''}
        disabled={!canEditor}
        allowClear={!canEditor}
        rows={12}
        maxLength={12}
      ></TextArea>
    </div>
  )
}

export default Editor
