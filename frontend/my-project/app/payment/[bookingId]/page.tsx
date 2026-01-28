"use client"

import { useParams, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

declare global {
  interface Window {
    snap: any
  }
}

export default function PaymentPage() {
  const params = useParams()
  const searchParams = useSearchParams()

  const bookingId = params.bookingId as string
  const date = searchParams.get("date")
  const time = searchParams.get("time")
  const harga = searchParams.get("harga")

  const [paid, setPaid] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const booked = localStorage.getItem(`booked_${bookingId}`)
    if (booked === "true") {
      setPaid(true)
    }
  }, [bookingId])

  const markAsBooked = () => {
    localStorage.setItem(`booked_${bookingId}`, "true")
    setPaid(true)
  }

  const handlePay = async () => {
    setLoading(true)

    const res = await fetch("http://localhost:8080/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        schedule_id: bookingId,
        name: "Customer Demo",
        harga: harga,
      }),
    })

    const data = await res.json()

    if (!data.snapToken) {
      alert("Gagal membuat pembayaran")
      setLoading(false)
      return
    }

    window.snap.pay(data.snapToken, {
      onSuccess: function () {
        console.log("✅ SUCCESS")
        markAsBooked()
        setLoading(false)
      },
      onPending: function () {
        console.log("⌛ PENDING")
        markAsBooked()
        setLoading(false)
      },
      onError: function () {
        console.log("❌ ERROR")
        setLoading(false)
      },
      onClose: function () {
        console.log("❌ POPUP CLOSED → AUTO BOOKED (DEMO)")
        markAsBooked()
        setLoading(false)
      },
    })
  }

 return (
  <section className="max-w-xl mx-auto px-6 py-35">

    <div className="mb-10 text-center space-y-3">
      <h1 className="text-3xl font-bold text-slate-900">
        Pembayaran Berhasil
      </h1>
      <p className="text-slate-500 text-sm max-w-md mx-auto">
        Menuju sesi Pilates yang lebih seimbang, nyaman,
        dan terarah sesuai kebutuhan tubuh Anda.
      </p>
    </div>

    <div className="mb-8 text-sm text-slate-600 leading-relaxed space-y-3">
      <p>
        Di <span className="font-semibold text-slate-800">Testing Pilates</span>,
        kami percaya bahwa setiap tubuh memiliki kebutuhan yang berbeda.
        Setiap sesi dirancang untuk membantu Anda meningkatkan kekuatan,
        fleksibilitas, dan keseimbangan secara aman dan bertahap.
      </p>
      <p>
        Dengan instruktur berpengalaman dan pendekatan yang personal,
        kami memastikan setiap gerakan dilakukan dengan teknik yang tepat,
        sehingga Anda dapat berlatih dengan tenang dan percaya diri.
      </p>
      <p className="italic text-slate-500">
        Berikut detail sesi Pilates Anda. Kami menantikan kehadiran Anda untuk pengalaman latihan yang nyaman dan terarah.
      </p>
    </div>

    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-6 space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Kode Booking</span>
        <span className="font-medium text-slate-800">{bookingId}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Tanggal Kelas</span>
        <span className="font-medium text-slate-800">{date}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-slate-500">Waktu Mulai</span>
        <span className="font-medium text-slate-800">{time}</span>
      </div>

      <div className="border-t pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-600 font-semibold">
            Total Pembayaran
          </span>
          <span className="text-2xl font-bold text-[#7A6F66]">
            Rp {Number(harga).toLocaleString("id-ID")}
          </span>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          Harga sudah termasuk sesi kelas dan pendampingan instruktur
        </p>
      </div>
    </div>

    {paid ? (
      <div className="mt-6 bg-emerald-50 border border-emerald-100 text-emerald-700 py-4 rounded-xl text-center space-y-1">
        <p className="font-semibold text-lg">✅ Pembayaran Berhasil</p>
        <p className="text-sm">
          Booking Anda telah dikonfirmasi. Kami siap menyambut Anda di sesi
          Testing Pilates.
        </p>
      </div>
    ) : (
      <div className="mt-6 space-y-3">
        <button
          onClick={handlePay}
          disabled={loading}
          className="w-full bg-black text-white py-4 rounded-xl font-semibold tracking-wide
                     hover:bg-slate-900 transition disabled:opacity-50"
        >
          {loading ? "Memproses pembayaran..." : "Lanjutkan ke Pembayaran"}
        </button>
        <p className="text-xs text-slate-400 text-center">
          Pembayaran diproses secara aman. Data Anda terlindungi dan tidak
          disimpan tanpa izin.
        </p>
      </div>
    )}
  </section>
)


}
