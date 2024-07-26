import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
// import Header from '../components/template/header'
// import Aside from '@/components/template/sidebar'
import Footer from '../components/template/footer'
import HeaderM from '@/components/template-m/header-m'
import FooterM from '@/components/template-m/footer-m'

import dynamic from 'next/dynamic'

// RWD使用
import { useMediaQuery } from 'react-responsive'

// import header-m icon
import myIcon from '@/assets/images.jpeg'
import { FaRegUser } from 'react-icons/fa'
import { FaCampground } from 'react-icons/fa'
import { MdOutlineChair } from 'react-icons/md'

// 解決Hydration問題
const Header = dynamic(() => import('@/components/template/header'), {
  ssr: false,
})
const Aside = dynamic(() => import('@/components/template/sidebar'), {
  ssr: false,
})

export default function Template() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <>
      <div className="body">
        {isDesktopOrLaptop && <Header />}
        {/* 請按照下列格式填入需要的欄位 */}
        {isTabletOrMobile && (
          <HeaderM
            labels={{
              user: { userName: '王小明', userIcon: myIcon },
              titles: [
                {
                  lv1Name: 'Customer Center',
                  lv1Icon: <FaRegUser style={{ fill: '#413c1c' }} />,
                  // 沒有lv2的話請填入null
                  titleLv2: null,
                },
                {
                  lv1Name: 'Rent',
                  lv1Icon: <MdOutlineChair style={{ fill: '#413c1c' }} />,
                  titleLv2: [
                    {
                      lv2Name: '帳篷',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: [
                        '單/雙人',
                        '家庭',
                        '寵物',
                        '客廳帳/天幕',
                        '配件',
                        '其他',
                      ],
                    },
                    {
                      lv2Name: '戶外家具',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: ['露營椅', '露營桌', '其他'],
                    },
                  ],
                },
                {
                  lv1Name: 'Ground',
                  lv1Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                  titleLv2: [
                    {
                      lv2Name: '營地主後台',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: [],
                    },
                  ],
                },
              ],
            }}
          />
        )}

        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {isDesktopOrLaptop && (
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
                    'jjjjj',
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
          )}

          <h1 className="mt-5">Template 內容</h1>
        </div>
        <Footer />
        {/* <FooterM /> */}
      </div>
    </>
  )
}
