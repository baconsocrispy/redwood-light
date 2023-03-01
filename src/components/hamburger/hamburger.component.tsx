import { useState, FC } from "react"
import { Container, Hamburger, Menu, MenuItem, MenuLink } from "./hamburger.styles"

// types
type HamburgerMenuProps = {
  menuItems: string[];
}
const HamburgerMenu: FC<HamburgerMenuProps> = ({ menuItems }) => {
  // state
  const [ open, setOpen ] = useState(false);

  // click handler
  const handleClick = () => setOpen(!open);

  return (
    <Container onClick={ handleClick }>
      <Hamburger />
      <Menu open={ open }>
        { menuItems.map((item, index) => (
          <MenuItem key={ index }>
            <MenuLink to={ '/' + item.toLowerCase() }>{ item }</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  )
}

export default HamburgerMenu