import React from 'react'

export default function DiscountCardM() {
  return (
    <>
      <div className="banner">
        <img
          // className='image'
          src="https://www.outsiders.com.tw/wp-content/uploads/2024/01/Cocoon-2024_02.jpeg"
          style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%',
            // objectFit: 'cover',
            borderRadius: '20px',
          }}
        />
        {/* <div className="box">
          <div className="btn">1</div>
          <div className="text-group">
            <div className="box-title">盛夏露營季 5 折起</div>
            <div className="box-desc">打卡送 1000 元禮包</div>
          </div>
        </div> */}
      </div>
      <style jsx>
        {`
          {/* .banner {
            position: relative;
          }
          .box {
            position: absolute;
            top: 0;
            right: 225px;
            background-color: var(--hint-color);
            width: 199px;
            height: 280px;
            padding: 16px;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          @media screen and (max-width: 1400px) {
            .box {
              position: absolute;
              top: 0;
              right: 136px;
            }
          }
          @media screen and (max-width: 1200px) {
            .box {
              position: absolute;
              top: 0;
              right: 46px;
            }
          }
          .image {
          }
          .text-group {
            text-align: center;
          }
          .box-title {
            font-family: 'Noto Sans TC';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
          }
          .box-desc {
            font-family: 'Noto Sans TC';
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          } */}
        `}
      </style>
    </>
  )
}
