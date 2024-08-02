import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSearch } from '@/hooks/use-search'

export default function Calendar() {
  const { calenderValue = '', setCalenderValue } = useSearch()

  const [dateNow, setDateNow] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )
  const [maxDays] = useState(8)
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [canSelect] = useState(true)
  const [bookingList, setBookingList] = useState([])
  // const [calenderValue, setCalenderValue] = useState('')

  useEffect(() => {
    let bookings = [
      '2023-9-13',
      ['2023-9-15', '2023-9-22'],
      ['2023-10-2', '2023-10-6'],
      ['2023-10-22', '2023-10-26'],
      ['2023-11-15', '2023-11-17'],
    ]
    bookings = bookings.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(...getDatesArray(...item))
      } else {
        acc.push(item)
      }
      return acc
    }, [])
    setBookingList(bookings)
  }, [])

  useEffect(() => {
    setCalendar()
  }, [dateNow, startDate, endDate, bookingList])

  const isSameMonth = (date1, date2) => {
    return date1.getMonth() === date2.getMonth()
  }

  const handleMonthChange = (offset) => {
    setDateNow(new Date(dateNow.getFullYear(), dateNow.getMonth() + offset, 1))
  }

  const setCalendar = () => {
    const totalDays = new Date(
      dateNow.getFullYear(),
      dateNow.getMonth() + 1,
      0
    ).getDate()
    const firstDay = dateNow.getDay()
    const mainLine1 = document.querySelector('.mLeft .mainLine')
    const info1 = document.querySelector('.mLeft .info')
    // info1.innerHTML = `${dateNow.getFullYear()}-${(dateNow.getMonth() + 1)
    //   .toString()
    //       .padStart(2, '0')}`

    info1.innerHTML = dateNow
      .toLocaleString('en-GB', { month: 'long' })
      .toUpperCase()

    let dayHtml1 = ''
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(dateNow.getFullYear(), dateNow.getMonth(), i)
      const day = date.getDay()
      const template = `<div class="day date date${i} day${day}" date="${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}">${i}</div>`
      dayHtml1 += template
    }
    mainLine1.innerHTML = dayHtml1

    const date1 = document.querySelector('.date1')
    if (firstDay === 0) {
      date1.style.marginLeft = '268px'
    } else {
      date1.style.marginLeft = (firstDay - 1) * 44 + 4 + 'px'
    }

    let dates = document.querySelectorAll('.calendar .date')
    dates.forEach((dateBtn) => {
      let thisDate = dateBtn.getAttribute('date')
      if (bookingList.includes(thisDate)) {
        dateBtn.classList.add('disabled')
      }
      if (startDate !== '' && endDate === '') {
        if (startDate === thisDate) {
          dateBtn.classList.add('started')
        }
      }
      if (startDate !== '' && endDate !== '') {
        colorSelected()
      }
      if (canSelect === true) {
        dateBtn.addEventListener('click', function (event) {
          let date = event.currentTarget.getAttribute('date')
          if (startDate !== '' && endDate !== '') {
            setStartDate('')
            setEndDate('')
            resetSelected()
          }
          if (startDate === '') {
            setStartDate(date)
            dateBtn.classList.add('started')
          } else if (endDate === '') {
            endDateCheck(date, dateBtn)
          }
        })
      }
    })
  }

  const endDateCheck = (date, target) => {
    let canSet = true
    let alertInfo = ''
    if (new Date(date) < new Date(startDate)) {
      canSet = false
      alertInfo = '不能夠往起始日期的前面日期選'
    }
    bookingList.forEach((date1) => {
      if (
        new Date(date1) > new Date(startDate) &&
        new Date(date1) < new Date(date)
      ) {
        canSet = false
        alertInfo = '選取的區間有無法預定的日期'
      }
    })
    let passDays =
      parseInt((new Date(date) - new Date(startDate)) / 1000 / 60 / 60 / 24) + 1
    if (passDays > maxDays) {
      canSet = false
      alertInfo = '目前選取天數多於可支援天數'
    }
    if (canSet === true) {
      setEndDate(date)
      target.classList.add('started')
      colorSelected()
    } else {
      alert(alertInfo)
      setStartDate('')
      setEndDate('')
      resetSelected()
    }
  }

  const colorSelected = () => {
    let dates = document.querySelectorAll('.calendar .date')
    dates.forEach((dateBtn) => {
      dateBtn.classList.remove('started')
      let date = dateBtn.getAttribute('date')
      if (date === startDate) {
        dateBtn.classList.add('selectedStart')
      }
      if (
        new Date(date) > new Date(startDate) &&
        new Date(date) < new Date(endDate)
      ) {
        dateBtn.classList.add('selectedInclude')
        if (!isSameMonth(new Date(startDate), new Date(endDate))) {
          const firstDay = dateNow.getDay()
          const date1 = document.querySelector('.date1')
          if (firstDay === 0) {
            date1.style.marginLeft = '268px'
          } else {
            date1.style.marginLeft = (firstDay - 1) * 44 + 'px'
          }
        }

        setCalenderValue(startDate + '~' + endDate)
      }
      if (date === endDate) {
        dateBtn.classList.add('selectedEnd')
      }
    })
  }

  const resetSelected = () => {
    let dates = document.querySelectorAll('.calendar .date')
    dates.forEach((dateBtn) => {
      dateBtn.classList.remove('started')
      dateBtn.classList.remove('selectedStart')
      dateBtn.classList.remove('selectedEnd')
      dateBtn.classList.remove('selectedInclude')
    })
  }

  const getDatesArray = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const datesArray = []

    for (
      let d = new Date(startDate);
      d <= endDate;
      d.setDate(d.getDate() + 1)
    ) {
      const year = d.getFullYear()
      const month = d.getMonth() + 1
      const date = d.getDate()
      datesArray.push(`${year}-${month}-${date}`)
    }

    return datesArray
  }

  return (
    <>
      {/* <input type="text" value={inputValue} /> */}
      <div className="calendar">
        <div className="mLeft">
          <div className="ctrl">
            <FaChevronLeft
              className="btnMonth btnMonthPrev"
              onClick={() => handleMonthChange(-1)}
            />
            <div className="info"></div>
            <FaChevronRight
              className="btnMonth btnMonthNext"
              onClick={() => handleMonthChange(1)}
            />
          </div>
          <div className="line weekLine">
            <div className="day day1">MON</div>
            <div className="day day2">TUE</div>
            <div className="day day3">WED</div>
            <div className="day day4">THU</div>
            <div className="day day5">FRI</div>
            <div className="day day6">SAT</div>
            <div className="day day0">SUN</div>
          </div>
          <div className="line mainLine"></div>
        </div>
      </div>
    </>
  )
}