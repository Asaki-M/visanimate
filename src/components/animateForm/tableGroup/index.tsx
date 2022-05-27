import styles from './index.module.scss'
import TableItem from '../tableItem'
import { TableGroupProps } from '../interface'
import { getOnlyId } from '@/utils/index'

function TableGroup(props: TableGroupProps) {
  const { animateList } = props
  return (
    <div className={styles.group}>
      {animateList.map((item) => {
        return <TableItem item={item} key={getOnlyId()}></TableItem>
      })}
    </div>
  )
}

export default TableGroup
