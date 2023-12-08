import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { grey } from '@ant-design/colors';
import { ConfigProvider, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
function SideBar() {

  return (
    <ConfigProvider 
        theme={{
            components : {
                Menu : {
                    colorText : 'white',
                    itemHoverBg : 'blue',
                    itemSelectedBg : '#adc6ff',
                    fontSize : 16, 
                    margin : 2, 
                    padding : 10,
                    zIndexBase:100
                }
            }
        }}
    >
        <Menu  
        style={{backgroundColor : grey[6]}}
        
        items={[
            {
                label : <NavLink to={''} 
                       
                       >
                           خانه
                       </NavLink>,
                key : '/dashboard' , 
                icon : <AppstoreOutlined/>,
                
                
            },
            {
             label : <NavLink to={'cards'} 
                    
                    >
                        داشبورد
                    </NavLink>,
             key : '/cards' , 
             icon : <AppstoreOutlined/>,
             
             
            },
            {
             label : <NavLink to={'search'}>جست و جو</NavLink>,
             key : '/search' , 
             icon : <MailOutlined/>,
            },
        ]}
        onSelect={()=>{

        }}
        >
        </Menu>
    </ConfigProvider>
  )
}

export default SideBar
