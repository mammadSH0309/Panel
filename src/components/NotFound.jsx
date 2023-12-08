import { Flex } from 'antd'
import React from 'react'

function NotFound() {
  return (
    <>
     <Flex justify='center' align='center' className='h-full w-full mt-5'>
        <h4 className='font-semibold text-red-600'>صفحه مورد نظر پیدا نشد</h4>
     </Flex>
    </>
  )
}

export default NotFound
