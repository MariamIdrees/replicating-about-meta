import { Handbag, Menu, UserRound} from "lucide-react"
import Sidebar from "./Sidebar"
import {useState} from "react"
import{Link} from "react-router-dom"


const Header = () => {
  const [toggle, setToggle] = useState(false)
  const toggleSwitch = () => {
    setToggle(!toggle)
  }
  return (
    <header className=" bg-amber-400 fixed top-0 w-full z-50 flex h-20 px-48 max-md:px-16 justify-between items-center font-medium">
     <section className="h-screen flex gap-12 items-center">
        <Link to="/">
        {""}
        <div className="cursor-pointer">
            <img className="w-20" src="metaicon.svg" alt="meta logo" />
        </div>
        </Link>
        <section className=" flex gap-8 max-md:hidden">
         <Link to = "/about">
            <nav className="cursor-pointer">About</nav>
         </Link>
            <Link to = "/ai glasses">
             <nav className="cursor-pointer"> AI glasses</nav>
            </Link>
           <Link to="/meta quest">
            <nav className="cursor-pointer">Meta Quest</nav>
           </Link>
            <Link to="/apps and games">
             <nav className="cursor-pointer">Apps and Games</nav>
            </Link>
        </section>

        <section className="flex gap-8 max-md:hidden">
            <nav className="cursor-pointer">Explore Meta</nav>
            <nav className="cursor-pointer">Support</nav>
            <main className="flex gap-6 items-center">
              <div className="cursor-pointer">
                    <Handbag />
              </div>
              <div className="cursor-pointer">
               <UserRound />
              </div>
            </main>
        </section>

           <section onClick={toggleSwitch} className="hidden max-md:block cursor-pointer">
            <Menu />
           </section>











     </section>

    </header>
  )
}

export default Header