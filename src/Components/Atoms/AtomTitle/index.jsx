import React from 'react'

export default function Index({ titleTextClass, children }) {
  return (
    <h1 className={`title`}>
        {children}
    </h1>
  )
}
