import styles from './App.module.scss'

import Control from './components/control'
import Preview from './components/preview'
import GlobalTips from './components/globalTips'
import useBus from 'use-bus'

function App() {
  useBus(
    'CLOSE_TIPS',
    () => {
      const tips = document.querySelector('#tips-contain') as HTMLElement
      tips.style.display = 'none'
    },
    []
  )
  return (
    <main className={styles.App}>
      <div id="tips-contain">
        <GlobalTips></GlobalTips>
      </div>
      <Control></Control>
      <Preview></Preview>
    </main>
  )
}

export default App
