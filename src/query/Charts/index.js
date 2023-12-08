import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const chartsApi = createApi({
    reducerPath : 'chartsApi',
    baseQuery : fetchBaseQuery({baseUrl : 'http://127.0.0.1:8000/charts/'}),
    endpoints : (builder) =>({
        getChartsDay : builder.query({
            query : () => 'filterperdaytwittertrends/get/'
        }),
    }),
})


export const {useGetChartsDayQuery} = chartsApi
