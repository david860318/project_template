import { useState } from 'react'
import styles from './inputBar.module.css'
import { IoLocationOutline } from 'react-icons/io5'
import { LuCalendarSearch } from 'react-icons/lu'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import Calendar from './calender'

export default function InputBar() {
  const [calenderValue, setCalenderValue] = useState('')
  return (
    <>
      <div className={styles.container}>
        <div className={styles.calenderWrapper}>
          <Calendar setCalenderValue={setCalenderValue} />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.wrapper}>
            <IoLocationOutline className={styles.lableIcon} />
            <input
              className={styles.entryArea}
              type="text"
              id=""
              placeholder="你要去哪裡?"
            />
          </div>
          <div className={`${styles.wrapper} ${styles.center}`}>
            <LuCalendarSearch className={styles.lableIcon} />
            <input
              className={styles.entryArea}
              type="text"
              id=""
              value={calenderValue}
              onChange={(e)=>{
                setCalenderValue(e.target.value)
              }}
            />
          </div>
          <div className={styles.wrapper}>
            <MdOutlinePeopleAlt className={styles.lableIcon} />
            <input className={styles.entryArea} type="text" id="" />
          </div>
        </div>
      </div>
    </>
  )
}
