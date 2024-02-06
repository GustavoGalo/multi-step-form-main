import { Container } from "./components"
import BgSidebarDesktop from "./components/svg/bg/sidebar/desktop"

function App() {
  return (
    <Container>
      <div className="flex" >
        <div>
          <BgSidebarDesktop />
        </div>
        <p className="font-ubuntu w-full " >Personal Info</p>
      </div>
    </Container>
  )

}

export default App
