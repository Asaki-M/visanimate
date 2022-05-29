import styles from './index.module.scss'
import { AnimateFormData, SendFormData } from '../interface'
import { Button, Modal, Select, Form, InputNumber, Radio } from 'antd'
import { useState } from 'react'
const { Option } = Select

function AddAnimate(props: SendFormData) {
  const { sendData } = props

  // Form Data
  const [form] = Form.useForm()

  // Dialog open and close
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
  }

  // Form data send to parent
  const onFinish = (value: AnimateFormData) => {
    sendData(value)
    setIsModalVisible(false)
    form.resetFields()
  }
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add an Animate
      </Button>
      <Modal
        title="Config a Animate"
        okText="Add"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item name="prop" label="Select props">
            <Select style={{ width: 120 }}>
              <Option value="opacity">opacity</Option>
              <Option value="translateX">translateX</Option>
              <Option value="translateY">translateY</Option>
              <Option value="translate">translateXY</Option>
              <Option value="scale">scale</Option>
              <Option value="rotate">rotate</Option>
            </Select>
          </Form.Item>
          <Form.Item name="cycle" label="Animate cycle">
            <InputNumber min={0}></InputNumber>
          </Form.Item>
          <Form.Item name="delay" label="Animate delay">
            <InputNumber min={0} max={1}></InputNumber>
          </Form.Item>
          <Form.Item name="startState" label="Animate start state">
            <InputNumber min={0}></InputNumber>
          </Form.Item>
          <Form.Item name="endState" label="Animate end state">
            <InputNumber min={0}></InputNumber>
          </Form.Item>
          <Form.Item name="loop" label="Animate loop">
            <Radio.Group>
              <Radio value={true}>true</Radio>
              <Radio value={false}>false</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles['form-button']}
            >
              Add Animate
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default AddAnimate
