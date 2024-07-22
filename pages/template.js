import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaCampground } from 'react-icons/fa6'
import Header from '../components/template/header'
import Aside from '@/components/template/sidebar'
import Footer from '../components/template/footer'

export default function Template() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', minheight: '100vh' }}>
        <Aside
          mainLabels={[
            {
              title: '帳篷',
              icon: <FaCampground />,
              subLabel: [
                '單/雙人',
                '家庭',
                '寵物',
                '客廳帳/天幕',
                '配件',
                '其他',
              ],
            },
            {
              title: '戶外用品',
              icon: <FaCampground />,
              subLabel: ['露營椅', '露營桌'],
            },
            {
              title: '照明&生火',
              icon: <FaCampground />,
              subLabel: [
                '子類別',
                '子類別',
                '子類別',
                '子類別',
                '子類別',
                '子類別',
              ],
            },
          ]}
        />
        <h1 className="mt-5">Template 內容</h1>
      </div>
      <Footer />
    </>
  )
}
