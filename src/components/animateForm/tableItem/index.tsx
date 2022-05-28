import styles from './index.module.scss'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { TableItemProps } from '../interface'
import { dispatch } from 'use-bus'

function TableItem(props: TableItemProps) {
  const { item, idx } = props
  const { prop } = item

  const deleteAnimation = () => {
    dispatch({ type: 'DELETE_ANIMATION', payload: idx })
  }
  return (
    <div className={styles.item}>
      <div>{prop}</div>
      <div>
        {/* <Button type="link" icon={<EditOutlined />}></Button> */}
        <Button
          type="link"
          danger
          icon={<DeleteOutlined />}
          onClick={deleteAnimation}
        ></Button>
      </div>
    </div>
  )
}

export default TableItem
