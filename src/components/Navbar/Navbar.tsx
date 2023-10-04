type NavbarItemLink = {
	label: string,
	url: string
}

interface NavbarProps {
	NavbarMenuItem: NavbarItemLink[]
}

import Logo from '/src/images/logo.svg';

const Navbar = (props:NavbarProps) => {
	return (
		<header className="flex">
			<img src={Logo} alt="ecommerce product logo" />
			<nav>
				{props.NavbarMenuItem.map(link => <a key={link.label} href={link.url}>{link.label}</a>)}
			</nav>
		</header>
	)
}

export default Navbar