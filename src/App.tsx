import Footer from './components/root/footer'
import Header from './components/root/header'
import { Label } from './components/ui/label'

export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row items-center justify-center">
        <Label>Welcome to Zume!</Label>
      </div>
      <Footer />
    </>
  )
}
