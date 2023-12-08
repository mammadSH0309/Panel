import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Dropdown,} from 'antd';

import {  useNavigate } from 'react-router-dom';

const items = [
    {
        key: '1',
        label : 'خروج'
    }
]
function IconMenu() {
    
    const navigate = useNavigate()

  return (
    <Dropdown
    menu={{
        items,
        triggerSubMenuAction : 'click',
        onClick : ({key})=>{
            navigate('/login')
        }
    }}
    >
        <UserOutlined style={{fontSize : 20 , color : 'grey'}}/>
    </Dropdown>
  )
}

export default IconMenu
