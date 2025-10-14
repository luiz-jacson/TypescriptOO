import { useState } from 'react'
import Banner from './components/Banner'
import Link from './components/Link'

function App() {

  return (
    <>
      <Banner src='/Imagens/Banner Desktop.png' alt='Banner'></Banner>
      <Link href='/' target='_blank'>Link</Link>
    </>
  )
}

export default App
