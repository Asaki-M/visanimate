import { useState } from 'react'
import styles from './App.module.scss'

import Control from './components/control'
import Preview from './components/preview'

function App() {
  return (
    <main className={styles.App}>
      <Control></Control>
      <Preview></Preview>
    </main>
  )
}

export default App
