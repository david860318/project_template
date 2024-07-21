import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaCampground } from 'react-icons/fa6'
import { Header } from './header'
import { Footer } from './footer'


export default function Sidebar2() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar className="sidebar">
          <Menu>
            <h2>商品分類</h2>
            <SubMenu label="帳篷" icon={<FaCampground />} className='level1'>
              <MenuItem className='level2'> 單/雙人 </MenuItem>
              <MenuItem className='level2'> 家庭 </MenuItem>
            </SubMenu>
            <SubMenu label="戶外家具" icon={<FaCampground />} className='level1'>
              <MenuItem className='level2'> 露營桌 </MenuItem>
              <MenuItem className='level2'> 露營椅 </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
      <Footer />
    </>
  )
}
