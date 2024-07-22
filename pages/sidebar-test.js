import React, { useState } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Menu, ColorPicker } from 'antd'

const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: '帳篷',
    children: [
      {
        key: '11',
        label: '單/雙人',
      },
      {
        key: '12',
        label: '家庭',
      },
      {
        key: '13',
        label: '寵物',
      },
      {
        key: '14',
        label: '客廳帳/天幕',
      },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: '戶外家具',
    children: [
      {
        key: '21',
        label: '露營椅',
      },
      {
        key: '22',
        label: '露營桌',
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: '照明&生火',
    children: [
      {
        key: '31',
        label: '照明燈',
      },
      {
        key: '32',
        label: '木炭',
      },
    ],
  },
]
const getLevelKeys = (items1) => {
  const key = {}
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level
      }
      if (item.children) {
        func(item.children, level + 1)
      }
    })
  }
  func(items1)
  return key
}
const levelKeys = getLevelKeys(items)

export default function SidebarTest() {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23'])
  const [primary, setPrimary] = React.useState('#1677ff')
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    )
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey])
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      )
    } else {
      // close
      setStateOpenKeys(openKeys)
    }
  }
  return (
    <>
      <ColorPicker
        showText
        value={primary}
        onChangeComplete={(color) => setPrimary(color.toHexString())}
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['231']}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 186,
          color: '#413c1c',
        }}
        items={items}
      />
    </>
  )
}
