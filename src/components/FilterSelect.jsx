import React, { useState } from 'react'
import { Button, DatePicker, Select, Switch } from 'antd';
import { useLocation , useSearchParams } from 'react-router-dom';

function FilterSelect() {
 
  const [params , setParams] = useSearchParams({
    year : '',
    start_month : '',
    end_month : '',
    order_by : '',
    number : '',
    reverse : '' , 
    number : '',
  });
  
  console.log(params)
    


    
  return (
    <>
    <Select
    labelInValue
    defaultValue={{
      value: 'lucy',
      label: 'دیفالت',
    }}
    style={{
      width: 120,
    }}
   
    onChange={(e)=>{
      let orderby = e.value
      if(orderby){
        params.set('order_by' , orderby)
        
      }else {
        setParams({})
      }
    }}
  
    options={[
      {
        value: 'all',
        label: 'همه',
      },
      {
        value: 'tweets_number',
        label: 'تعداد توییت',
      },
    ]}
  />
  <Select
    labelInValue
     defaultValue={{
       value: '10',
       label: 'تعداد',
     }}
     style={{
       width: 120,
     }}
     
     onChange={(e)=> {
      let tedad = e.value 
      if (tedad){
        params.set('number' , tedad)
        
      }else {
        setParams({})
      }
     }}
     options={[
      {
        value : '10',
        label : '10'
      },
      {
        value : '15',
        label : '15'
      },
      {
        value : '20',
        label : '20'
      },
      {
        value : '25',
        label : '25'
      }
     ]}
   
  />
  <DatePicker 
   
   onChange={(date , dateString)=>{
      // orderParams.set('year' , dateString)
     params.set('year' , dateString)

   }} picker="year" />

   <Switch
   
    onChange={(checked ,e) => {
    console.log(checked)
    
    // orderParams.set('reverse' , checked)
    params.set('reverse' , checked)
    
    
   }}  />
  <Button type='primary' className='bg-teal-950' htmlType='submit' onClick={()=>{
    // setOrderParams(orderParams)
    setParams(params)
    // let year = params.get('year')
    // let start_month = params.get('start_month')
    // let end_month = params.get('end_month')
    // let order_by = params.get('order_by')
    // let reverse = params.get('revese')
    // let number = params.get('number')

    console.log(params)
    
    
    

    
  }}>
    اعمال فیلتر
  </Button>
    </>
  )
}

export default FilterSelect
