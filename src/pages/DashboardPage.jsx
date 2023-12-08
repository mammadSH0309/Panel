import { Flex, Layout} from 'antd';
import SideBar from '../components/SideBar';
import { grey } from '@ant-design/colors';
import HeaderItem from '../components/HeaderItem';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;


function DashboardPage() {
  
  
 

  return (
    <Layout>
      <Sider 
      breakpoint='md' 
      className='h-screen' 
      theme='light'
      style={{backgroundColor : grey[6] , position: 'sticky' , top : 0 , right: 0}}
      >
        <Flex justify='center' align='center' className='h-20 w-full text-white'  >
            نام کاربری
        </Flex>
        <SideBar/>
      </Sider>
      <Layout style={{maxWidth: "100vw"}}>
        <Header className='bg-white'><HeaderItem/></Header>
        <Content >
            <Outlet/>
        </Content>
      </Layout>   
    </Layout>
  )
}

export default DashboardPage
