import React from 'react'
import {ResponsivePie} from '@nivo/pie'
import { useGetChartsDayQuery } from '../query/Charts'
function TwiiterPieCharts(){

    const {data , isLoading} = useGetChartsDayQuery('charts', {
        pollingInterval : 50000,
    })

    
    if(isLoading){
        return(
            <h1>...</h1>
        )
    }else{
    const datas = data.slice(0,10)
    return (
        <div  className='w-full h-96 opacity-95 shadow-lg'>
            <ResponsivePie
            theme={{
                text : {
                    fontFamily : 'sahelBold',
                    
                },
               
                
            }}
                activeInnerRadiusOffset={15}
                activeOuterRadiusOffset={15}
                motionConfig={'wobbly'}
                data={datas}
                animate
                id={'trend'}
                value={'tweets_number'}
                innerRadius={0.5}
                padAngle={3}
                sortByValue
                arcLinkLabelsTextOffset={60}
                arcLinkLabelsStraightLength={30}
                margin={{ top: 50, right: 80, bottom: 80, left: 80 }}
                
            />
        </div>
    )
    }
}

export default TwiiterPieCharts
