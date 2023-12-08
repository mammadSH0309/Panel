import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../components/NotFound";
import Cards from "../components/Cards";
import TwitterCharts from "../pages/TwitterCharts";



export const router = createBrowserRouter([
    {
        path : '/',
        element: <App/>
    },
    {
        path : '/login',
        element : <LoginPage/>
    },
    {
        path : '/dashboard',
        element : <DashboardPage/>, 
        children : [
            {
                path : '',
                element: <Cards/>,
                
            },
            {
                path : 'twitterCharts/' ,
                element : <TwitterCharts/>

            },
            {
                path : 'cards',
                element: <h1>dashbord</h1>,
                children:[
                    {
                        
                    }
                ]
            },
            {
                path : 'search',
                element: <h1>search</h1>,
                children:[
                    {
                        
                    }
                ]
            },
        ]
    },
    {
        path : '*',
        element : <NotFound/>
    }
])