"use client"

import { useState } from "react"
import type React from "react"

type ContactFormData = {
  namaDepan: string
  namaBelakang: string
  email: string
  telepon: string
  pesan: string
  preferredClass: string
  preferredSchedule: string
  classType: string[]
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    namaDepan: "",
    namaBelakang: "",
    email: "",
    telepon: "",
    pesan: "",
    preferredClass: "",
    preferredSchedule: "",
    classType: [],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckbox = (value: string) => {
    setForm(prev => ({
      ...prev,
      classType: prev.classType.includes(value)
        ? prev.classType.filter(item => item !== value)
        : [...prev.classType, value],
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Data Booking:", form)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-2xl space-y-5 mt-4"
    >
      <h2 className="text-2xl font-semibold">Konsultasi & Booking Pilates</h2>
      <p className="text-sm text-slate-600">
        Isi form di bawah ini untuk membantu kami menyesuaikan kelas pilates terbaik untuk Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="namaDepan"
          placeholder="Nama Depan"
          value={form.namaDepan}
          onChange={handleChange}
          className="border p-2 text-sm border-slate-300 rounded-md"
        />
        <input
          name="namaBelakang"
          placeholder="Nama Belakang"
          value={form.namaBelakang}
          onChange={handleChange}
          className="border p-2 text-sm border-slate-300 rounded-md"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email aktif"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 text-sm border-slate-300 rounded-md"
      />

      <input
        name="telepon"
        placeholder="+62 8xx xxxx xxxx"
        value={form.telepon}
        onChange={handleChange}
        className="w-full border p-2 text-sm border-slate-300 rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="preferredClass"
          placeholder="Kelas yang diminati (Beginner / Intermediate / Reformer)"
          value={form.preferredClass}
          onChange={handleChange}
          className="border p-2 text-sm border-slate-300 rounded-md"
        />
        <input
          name="preferredSchedule"
          placeholder="Waktu favorit (Pagi / Siang / Sore)"
          value={form.preferredSchedule}
          onChange={handleChange}
          className="border p-2 text-sm border-slate-300 rounded-md"
        />
      </div>

      <textarea
        name="pesan"
        placeholder="Catatan tambahan (cedera, tujuan latihan, dll)"
        value={form.pesan}
        onChange={handleChange}
        className="h-28 resize-none w-full p-2 border text-sm border-slate-300 rounded-md"
      />

      <div>
        <p className="font-medium mb-3">Jenis Kelas yang Diminati</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {[
            "Pilates Beginner",
            "Pilates Intermediate",
            "Pilates Advance",
            "Reformer Pilates",
          ].map(item => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.classType.includes(item)}
                onChange={() => handleCheckbox(item)}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#7A6F66] hover:bg-[#6a6058] text-white py-3 rounded-xl font-medium"
      >
        Kirim Permintaan Booking
      </button>
    </form>
  )
}
