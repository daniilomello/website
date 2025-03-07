"use client"


interface StatusTagProps {
  isAvailable: boolean
}

export default function StatusTag({ isAvailable }: StatusTagProps) {
  return (
    <div className="scale-75 origin-center">
      <div
        className={`flex items-center gap-2 px-4 py-1 rounded-full border ${isAvailable ? "border-green-500/50 text-green-700" : "border-red-500 text-red-700"
          }`}
      >
        <div className={`w-2 h-2 rounded-full ${isAvailable ? "bg-green-500/50" : "bg-red-500"}`} />
        <span className="text-sm font-medium">{isAvailable ? "Open for Work" : "Not available"}</span>
      </div>
    </div>
  )
}
