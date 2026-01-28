import { ClassItem } from "../types/class"
import Link from "next/link"

type Props = {
  item: ClassItem
}

export default function ClassCard({ item }: Props) {
  return (
    <Link href={`/classes/${item.slug}`}>
    <div className="rounded-xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2lg transition flex flex-col h-full">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover object-center rounded-t-2xl"
      />

      <div className="p-4 space-y-2">

        <h3 className="font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-sm text-gray-600 mb-5">
          {item.shortDescription}
        </p>

        <div className="flex gap-3 text-xs text-gray-500">
          <span>{item.duration}</span>
          <span>•</span>
          <span>{item.level}</span>
        </div>
      </div>
            <div className="border border-slate-200 w-full"></div>
            <div className="p-4">
              <button className="p-5 py-2  border border-slate-200 shadow-sm rounded-lg w-full">Info Selengkapnya</button>
            </div>
    </div>
  </Link>
  )
}
