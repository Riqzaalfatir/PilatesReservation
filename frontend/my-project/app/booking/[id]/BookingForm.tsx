"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { FormEvent } from "react"

type Props = {
  scheduleId: string
  date: string
  time: string
  harga: string
}

export default function BookingForm({
  scheduleId,
  date,
  time,
  harga,
}: Props) {
  const router = useRouter()

  const [name, setName] = useState("")
  const [notes, setNotes] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (!name) {
      alert("Name is required")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("http://localhost:8080/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          schedule_id: scheduleId,
          date,
          time,
          name,
          notes,
          harga, 
        }),
      })

      if (!res.ok) {
        throw new Error("Booking gagal")
      }

      router.push(
        `/payment/${scheduleId}?date=${date}&time=${time}&harga=${harga}`
      )
    } catch (error) {
      alert("Booking gagal")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={time}
        disabled
        className="w-full border border-slate-300 shadow-md px-4 py-2 rounded"
      />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama Lengkap"
        className="w-full border border-slate-300 shadow-md  px-4 py-2 rounded"
      />

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Pesan Tambahan"
        className="w-full border border-slate-300 shadow-md  px-4 py-2 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-[#7A6F66] text-white px-6 py-2 rounded-lg w-full"
      >
        {loading ? "Processing..." : "Confirm Booking"}
      </button>
    
    </form>
  )
}
