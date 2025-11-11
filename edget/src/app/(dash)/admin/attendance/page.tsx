"use client"
import { useEffect, useState } from 'react'

export default function AdminAttendancePage() {
  const [items, setItems] = useState<any[]>([])
  useEffect(()=>{ fetch('/api/admin/attendance').then(r=>r.json()).then(d=> setItems(d.items||[])) },[])
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Attendance Review</h1>
      <ul className="divide-y">
        {items.map(a=> (
          <li key={a.id} className="py-3">
            <div className="font-medium">{a.booking.tutorRequest.package.name} – Week starting {new Date(a.weekStart).toLocaleDateString()}</div>
            <div className="text-sm text-gray-600">Teacher: {a.booking.tutorRequest.teacher.user.name}</div>
            <div className="text-sm text-gray-600">Status: {a.status} | Student: {String(a.studentConfirm)} | Teacher: {String(a.teacherConfirm)}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
