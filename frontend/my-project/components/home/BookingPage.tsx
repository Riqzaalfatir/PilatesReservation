"use client"

import { useEffect, useState } from "react"
import ScheduleCard from "../booking/ScheduleCard"

type Schedule = {
  id: string
  time: string
  className: string
  location: string
  instructor: string
  waktu: string
  harga: string  
  status: "available" | "full"
}


export default function BookingPage() {
  const [schedule, setSchedule] = useState<Schedule[]>([])
  const [selectedDate, setSelectedDate] = useState("2026-01-27")
  const [loading, setLoading] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const dates = [
    "2026-01-27",
    "2026-01-28",
    "2026-01-29",
    "2026-01-30",
    "2026-01-31",
    "2026-02-01",
    "2026-02-02",
  ]

  useEffect(() => {
    setLoading(true)
    setShowAll(false)

    fetch(`/api/schedule?date=${selectedDate}`)
      .then(res => res.json())
      .then(data => {
        setSchedule(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        setSchedule([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [selectedDate])

  const displayedSchedule =
    showAll ? schedule : schedule.slice(0, 5)

  return (
    <section className="max-w-6xl mx-auto py-24">
      <div className="flex flex-wrap justify-between">
        <h1 className="text-3xl md:text-4xl font-bold uppercase mb-2 -mt-2 text-center mx-auto md:mx-0">
          Booking sekarang
        </h1>
        <p className="text-xs text-slate-800 md:text-right max-w-lg mb-10 text-center mx-auto md:mx-0">
          Pesan sesi pilates Anda sekarang dan mulai perjalanan menuju tubuh yang lebih sehat, seimbang, dan bertenaga. Dengan pendampingan profesional
        </p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto">
        {dates.map(date => (
          <button
            type="button"
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-3 rounded-xl border border-slate-100 shadow-md text-sm whitespace-nowrap transition mb-5
              ${selectedDate === date
                ? "bg-[#7A6F66] text-white"
                : "bg-white hover:bg-gray-100"
              }`}
          >
            {date}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {loading && (
          <p className="text-center text-gray-400 py-10">
            Loading schedule...
          </p>
        )}

        {!loading && schedule.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            No classes scheduled for this date
          </p>
        )}

        {!loading && displayedSchedule.map(item => (
    <ScheduleCard
      key={item.id}
      item={item}
      selectedDate={selectedDate}
    />
  ))
}

        {!loading && schedule.length > 5 && (
          <div className="flex justify-center  pt-4">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="text-sm font-semibold text-[#7A6F66] hover:underline"
            >
              {showAll ? "Sembunyikan" : "Lihat selengkapnya..."}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
