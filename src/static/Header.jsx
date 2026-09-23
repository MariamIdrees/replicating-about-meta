import { Handbag, UserRound} from "lucide-react"

const Header = () => {
  return (
    <header className="flex h-20 px-48 max-md:px-16 justify-between items-center font-medium">
     <section className="h-screen flex gap-12 items-center">
        <div className="cursor-pointer">
            <img className="w-20" src="metaicon.svg" alt="meta logo" />
        </div>
        <section className=" flex gap-8 max-md:hidden">
            <nav className="cursor-pointer">About</nav>
            <nav className="cursor-pointer"> AI glasses</nav>
            <nav className="cursor-pointer">Meta Quest</nav>
            <nav className="cursor-pointer">Apps and Games</nav>
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











     </section>

    </header>
  )
}

export default Header