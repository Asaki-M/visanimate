import styles from './index.module.scss'
import TableItem from '../tableItem'
import { TableGroupProps } from '../interface'

function TableGroup(props: TableGroupProps) {
  const { animateList } = props
  return (
    <div className={styles.group}>
      {animateList.map((item, idx) => {
        return <TableItem idx={idx} item={item} key={idx}></TableItem>
      })}
    </div>
  )
}

export default TableGroup
