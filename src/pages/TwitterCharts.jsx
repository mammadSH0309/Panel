import React from 'react'
import { useGetChartsDayQuery } from '../query/Charts'
import {ResponsiveBar} from '@nivo/bar'
import { Col, Row } from 'antd'
import TwiiterPieCharts from '../components/TwiiterPieCharts'
import FilterSelect from '../components/FilterSelect'



function TwitterCharts() {
    const {data , isLoading} = useGetChartsDayQuery('charts', {
        pollingInterval : 50000000,
    })
    
    if(isLoading){
        return(
            <h1>...</h1>
        )
    }else{
    const datas = data.slice(0,10)
    return ( 
        <>
            <div>
                <FilterSelect/>
            </div>
            <Row className='m-1 py-5  flex flex-row justify-end' >
            <Col c lg={10} >
                <TwiiterPieCharts/>
            </Col>
            <Col lg={10} className='flex flex-row justify-center'>
            <div  className='w-full h-96 bg-blue-400 opacity-95 shadow-lg mr-1'>
            <ResponsiveBar
                theme={{
                    text : {
                        fontFamily : 'sahelBold'
                    },
                    axis : {
                        legend : {
                            text : {
                                fontSize : 15 ,
                                fill: "white",
                            }
                        }
                    }
                    
                }}


                data={datas}
                keys={[
                    'tweets_number'
                ]}
                indexBy={'trend'}
                margin={{ top: 60, right: 50, bottom: 100, left: 80 }}
                padding={0.4}
                colors={{scheme : 'nivo'}}
                borderRadius={'10'}
                axisLeft={{
                    tickPadding : 18,
                    legend : 'تعداد توییت',
                    legendPosition : 'middle' , 
                    legendOffset : -50,
                    tickSize : 20, 
                    
                }}
                axisBottom={{
                    tickRotation : -40, 
                    legend : 'ترند',
                    legendOffset : 90,
                    legendPosition : 'middle'
                }}
            />
            </div>
            </Col>
        </Row> 
        </>

            
    )
}
  
}

export default TwitterCharts
