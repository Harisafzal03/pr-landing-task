import React from "react"
import { FooterContent } from "../../types/content"

export const Footer: React.FC<{ data: FooterContent }> = ({ data }) => {
  return (
    <footer className="bg-yellow-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {data.columns.map((col, idx) => (
            <div key={idx}>
              {col.title && <div className="text-sm font-semibold text-slate-800">{col.title}</div>}
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}><a className="text-slate-800 hover:underline" href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            {data.badges?.map((b, i) => (
              <div key={i} className="inline-flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{b.text}</div>
            ))}
            {data.contact?.phone && <div className="mt-4 text-slate-800 text-sm">Call us: {data.contact.phone}</div>}
          </div>
        </div>
        {data.legal && <div className="mt-8 text-xs text-slate-800">{data.legal}</div>}
      </div>
    </footer>
  )
}