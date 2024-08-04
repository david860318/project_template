import React from 'react'
import { MdPeople, MdOutlineSmokeFree, MdBed } from 'react-icons/md'

export default function RoomCard() {
  return (
    <>
      <div className="card-wrapper">
        <div className="room-name">【懶人露營】4人星空帳</div>
        <div className="title-wrapper">
          <div className="info">
            <h5>房型資訊</h5>
            <img src="/images/camp-list1.jpg" alt="" />
            <div className="room-info-wrapper">
              <MdPeople />
              基本入住人數:4人
            </div>
            <div className="room-info-wrapper">
              <MdOutlineSmokeFree />
              禁菸房
            </div>
            <div className="room-info-wrapper">
              <MdBed />
              標準雙人床
            </div>
          </div>
          <div>訂房方案</div>
          <div>總價</div>
        </div>
      </div>

      <style jsx>
        {`
          .card-wrapper {
            width: 1042px;
            border-radius: 20px;
            overflow: hidden;
          }
          .room-name {
            background-color: var(--main-color-dark);
            color: var(--main-color-bright);
            padding-inline: 35px;
            padding-block: 10px;
          }
          .title-wrapper {
            padding-inline: 35px;
            display: flex;
          }
          .info {
            display: flex;
            flex-direction: column;
          }
          .room-info-wrapper {
            display: flex;
            gap: 12px;
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 12px;
          }
        `}
      </style>
    </>
  )
}
