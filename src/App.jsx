import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { OnboardingSection } from './components/OnboardingSection'
import { ChatSection } from './components/ChatSection'
import { Footer } from './components/Footer'

function App() {
  const [showChat, setShowChat] = useState(false)

  const handleContinue = () => {
    setShowChat(true)
  }

  return (
    <>
      <Header />
      
      <main>
        <OnboardingSection onContinue={handleContinue} isHidden={showChat} />
        <ChatSection isHidden={!showChat} />
      </main>

      <Footer />
    </>
  )
}

export default App
