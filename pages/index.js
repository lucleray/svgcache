import React, { useState } from 'react'
import { IconCache } from '../icons/with-icon'
import ArrowLeft from '../icons/arrow-left'

const SomeComponent = () => {
  const [showIcon, setShowIcon] = useState(true)

  return (
    <>
      {showIcon ? <ArrowLeft size={50} color="red" /> : null}
      <button onClick={() => setShowIcon((v) => !v)}>Toggle first icon</button>
    </>
  )
}

const Index = () => {
  return (
    <div>
      <IconCache.Provider value={{}}>
        <SomeComponent />
        <ArrowLeft />
        <ArrowLeft size={30} color="blue" />
      </IconCache.Provider>
    </div>
  )
}

export default Index
