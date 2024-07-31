import { useState } from 'react'
import styles from './campground-sidebar.module.css'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import ReactSlider from 'react-slider'

export default function CampgroundSidebar() {
  const [min, setMin] = useState(3500)
  const [max, setMax] = useState(7000)
  const [value, setValue] = useState([3500, 7000])
  const [score, setScore] = useState('')

  const scoreOptions = [
    '極度好評 4.5 分以上',
    '大多好評 4.0 分以上',
    '好評  3.5 分以上',
    '褒貶不一 3.0 分以上',
  ]
  const publicUtOptions = ['花園', '露台', '游泳池', '桑拿', '停車場']
  return (
    <>
      <div className="wrapper">
        <div className="mapWrapper">
          <p>於地圖上顯示</p>
          <div className="googleMap">我是地圖</div>
        </div>
        <h5>透過以下分類搜尋:</h5>
        <div className="budgetWrapper">
          <p>房價預算(每晚)</p>
          <div className="slidebar">
            <ReactSlider
              max={10500}
              min={500}
              minDistance={500}
              step={500}
              value={value}
              onBeforeChange={(value, index) => console.log()}
              onChange={(value, index) => console.log()}
              onAfterChange={(value, index) => {
                console.log()
                setValue(value)
                setMin(value[0])
                setMax(value[1])
              }}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
            />
          </div>
          <div className="range">
            <div>{min}</div>
            <div>{max}</div>
          </div>
        </div>
        <div className="scoreWrapper">
          <p>評分</p>
          <div title="radio-button-group" className="radioScore">
            {scoreOptions.map((v, i) => {
              return (
                <label key={i}>
                  <input
                    type="radio"
                    // 配合第二種寫法定義value屬性
                    value={v}
                    // 每個radio選項用自己本身的值v和狀態相比，相符會是true，反之是false
                    checked={v === score}
                    onChange={(e) => {
                      // 第一種寫法，使用v值(map時得到的)
                      //setPet(v)
                      // 第二種寫法，使用事件目標對象值，注意要加上value屬性
                      setScore(e.target.value)
                    }}
                  />
                  {v}
                </label>
              )
            })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            font-family: 'Noto Sans TC', sans-serif;
          }
          .googleMap {
            width: 187px;
            height: 314px;
            border: 1px solid var(--main-color-dark);
            border-radius: 20px;
          }
          .budgetWrapper {
            display: flex;
            flex-direction: column;
            padding-block: 12px;
            border-top: 1px solid var(--main-color-dark);
          }
          .slidebar {
            display: grid;
            place-items: center;
          }
          .range {
            display: flex;
            justify-content: space-between;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
          }
          .radioScore {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}
