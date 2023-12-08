import React from 'react'
import { Card, Col, Flex, Row } from 'antd'
import { Link } from 'react-router-dom'
function Cards({title}) {
  return (
    <div className='p-5'>
      <Row gutter={8} >
      <Col lg={6}>
      <Link
        to={'twitterCharts'}
      >
      <Card 
      size='small'
      
      className='bg-blue-500  transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-200  '
       >
       <div className='flex flex-row'>
          <div className='basis-1/4'>ایکون</div>
          <div className='basis-3/4 flex flex-col'>
            <div>1</div>
            <div className='font-sahelBold'>465465456</div>
          </div>
       </div>
       <div className='flex flex-col pt-2 '>
          <div>1</div>
          <div className='font-sahelBold'>1981489</div>
       </div>
      </Card>
      </Link>
      </Col>
    </Row>
    </div>
  )
}

export default Cards
