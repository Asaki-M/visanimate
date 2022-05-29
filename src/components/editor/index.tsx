import { Input, Button, message } from 'antd'
import { CheckOutlined, CopyOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { propsInterface } from './interface'
import { useCallback, useState } from 'react'
import useBus, { dispatch } from 'use-bus'
import { copyText } from '@/utils'

const { TextArea } = Input

function Editor(props: propsInterface) {
  const { canEditor } = props
  const [code, setCode] = useState('')
  const addPreviewStyle = useCallback(() => {
    // need to formatter code
    dispatch({ type: 'ADD_PREVIEW_STYLE', payload: code })
  }, [code])

  useBus(
    'GENERATE_CODE',
    ({ payload }) => {
      if (!canEditor) {
        const { animation, keyFrame } = payload
        const animateCode = `.box { animation: ${animation}; }
          ${keyFrame}
          `
        setCode(animateCode)
      }
    },
    []
  )

  const copyHandle = () => {
    copyText(code)
    message.success('Copy success!')
  }
  return (
    <div className={styles['editor-contain']}>
      {canEditor ? (
        <div className={styles['can-editor']}>
          <div className={styles.title}>Preview box style</div>
          <Button
            type="link"
            icon={<CheckOutlined />}
            onClick={addPreviewStyle}
          ></Button>
        </div>
      ) : (
        <div className={styles['cannot-editor']}>
          <div className={styles.title}>Animation code</div>
          <Button
            type="link"
            icon={<CopyOutlined />}
            onClick={copyHandle}
          ></Button>
        </div>
      )}

      <TextArea
        placeholder={canEditor ? 'Can editor preview box style here' : ''}
        disabled={!canEditor}
        allowClear={!!canEditor}
        rows={10}
        value={code}
        className={styles.editor}
        onChange={(e) => setCode(e.target.value)}
      ></TextArea>
    </div>
  )
}

export default Editor
