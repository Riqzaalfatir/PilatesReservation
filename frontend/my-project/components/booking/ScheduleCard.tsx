import { FaUser } from "react-icons/fa"
import { FiClock, FiMapPin } from "react-icons/fi"
import Link from "next/link"

type Props = {
  item: {
  id: string
  time: string
  className: string
  location: string
  instructor: string
  waktu: string
  harga: string
  status: "available" | "full"
}

  selectedDate: string
}

export default function ScheduleCard({
  item,
  selectedDate,
}: Props) {
  return (
    <div className="border border-slate-100 rounded-2xl p-4 shadow-xl bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div className="flex gap-4 md:gap-8">
          <div className="text-lg font-semibold min-w-15 flex items-center">
            {item.time}
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold text-base md:text-lg">
              {item.className}
            </h3>

            <div className="text-xs md:text-sm text-gray-500 flex flex-wrap gap-4">
              <span className="flex items-center gap-1">
                <FiClock /> {item.waktu}
              </span>
              <span className="flex items-center gap-1">
                <FaUser /> {item.instructor}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin /> {item.location}
              </span>
            </div>
          </div>
        </div>

<div className="w-full md:w-auto space-y-2 text-center md:text-right">
  {item.status === "full" ? (
    <span className="block text-center px-4 py-2 rounded-lg bg-gray-100 text-gray-400 text-sm font-medium">
      Full
    </span>
  ) : (
    <>
      <div className="text-sm font-semibold text-gray-700">
        Rp {Number(item.harga).toLocaleString("id-ID")}
      </div>

      <Link
        href={`/booking/${item.id}?date=${selectedDate}&time=${item.time}&className=${encodeURIComponent(
          item.className
        )}&instructor=${encodeURIComponent(
          item.instructor
        )}&waktu=${encodeURIComponent(
          item.waktu
        )}&location=${encodeURIComponent(item.location)}&harga=${item.harga}`}
      >
        <button className="py-2 px-4 bg-[#7A6F66] rounded-lg text-xs text-white">
          Book now →
        </button>
      </Link>
    </>
  )}
</div>

      </div>
    </div>
  )
}
