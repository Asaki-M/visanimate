import styles from './index.module.scss'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { TableItemProps } from '../interface'

function TableItem(props: TableItemProps) {
  const { item } = props
  const { prop } = item
  return (
    <div className={styles.item}>
      <div>{prop}</div>
      <div>
        {/* <Button type="link" icon={<EditOutlined />}></Button> */}
        <Button type="link" danger icon={<DeleteOutlined />}></Button>
      </div>
    </div>
  )
}

export default TableItem
