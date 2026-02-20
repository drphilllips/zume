import './App.css'
import Header from './components/root/header'
import { Label } from './components/ui/label'

export default function App() {
  return (
    <div className="flex flex-col bg-primary items-center justify-center">
      <Header />
      <Label>Zume</Label>
    </div>
  )
}
