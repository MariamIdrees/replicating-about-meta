import { NavLink } from "react-router-dom"

const Sidebar = ({toggle}) => {
  return (
   <div className="h-screen w-full fixed">
      <section className="bg-white w-80 h-screen flex flex-col gap-2 font-medium">
       <NavLink onClick={toggle} to="/">
         <nav className="py-4 pl-5 hover:bg-gray-100">Home</nav>
       </NavLink>
       <NavLink onClick={toggle} to="/about">
         <nav className="py-4 pl-5 hover:bg-gray-100">About</nav>
       </NavLink>
       <NavLink onClick={toggle} to = "/contact">
         <nav className="py-4 pl-5 hover:bg-gray-100">Contact</nav>
       </NavLink>
       <NavLink onClick={toggle} to = "/buy">
         <nav className="py-4 pl-5 hover:bg-gray-100">Buy</nav>
       </NavLink>




      </section>


   </div>
  )
}

export default Sidebar