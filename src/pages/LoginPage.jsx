import React from 'react'
import {Col , Row , Flex , Form , Input , Button} from 'antd'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import FormItem from 'antd/es/form/FormItem'
function LoginPage() {
  return (
    <Row>
      <Col xs={24} sm={24} lg={10} className='bg-neutral-500 h-screen'>
        <Flex justify='center'    className='text-white    mt-72   ' >
          <Form 
          name='normal-login'
          className='login-form'
          labelCol={{span: 9}}
          wrapperCol={{
            span: 22,
          }}
          style={{
            width : 500,
            maxWidth: 600,
          }}
          autoComplete='off'
          >
            <FormItem 
            name="نام کاربری"
            rules={[
              {
                required : true,
                message : 'لطفا نام کاربری خود را وارد کنید'
              }
            ]}
            >
              <Input prefix={<FaUser className='site-form-item-icon'/>} placeholder='نام کاربری'/>
            </FormItem>

            <FormItem 
            name="رمزعبور"
            
            rules={[
              {
                required : true , 
                message : "لطفا رمز عبور را وارد کنید"
              }
            ]}
            >
              <Input.Password prefix={<RiLockPasswordFill className='site-form-item-icon'/>} placeholder='رمز عبور'/>
            </FormItem>

            <FormItem>
              <Button type='primary' htmlType='submit' className='login-form-button w-full bg-blue-600'>
                ورود
              </Button>
            </FormItem>

          </Form>
        </Flex>
      </Col>
      <Col xs={0} sm={0}  lg={14}>
        <img 
        src='https://static.vecteezy.com/system/resources/previews/005/879/539/non_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg'
        /> 
      </Col>
    </Row>
  )
}

export default LoginPage
