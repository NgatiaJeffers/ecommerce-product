import Navbar from "./components/Navbar/Navbar"

function App() {

  // Mock data for Navbar
  const menuItemLinks = [
    {
      label: 'Collections',
      url: '/'
    },
    {
      label: 'Men',
      url: '/'
    },
    {
      label: 'Women',
      url: '/'
    },
    {
      label: 'About',
      url: '/'
    },
    {
      label: 'Contact',
      url: '/'
    }
  ]

  return (
    <Navbar NavbarMenuItem={menuItemLinks} />
  )
}

export default App
