import React, { Children } from 'react'

export default function Index({ src, hegight="h-lvh", children }) {
  return (
    <div className={`w-full object-fit relative ${hegight} bg-cover bg-no-repeat`} style={{ backgroundImage: `url(${src})` }}>
      {children}
    </div>
  )
}
