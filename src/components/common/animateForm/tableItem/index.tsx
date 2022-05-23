import styles from './index.module.scss'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function TableItem() {
  return (
    <div className={styles.item}>
      <div>name</div>
      <div>
        <Button type="link" icon={<EditOutlined />}></Button>
        <Button type="link" icon={<DeleteOutlined />}></Button>
      </div>
    </div>
  )
}

export default TableItem
