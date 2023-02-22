import { useState, FC } from "react"
import { Container, Hamburger, Menu, MenuItem, MenuLink } from "./hamburger.styles"

// types
type HamburgerMenuProps = {
  menuItems: string[];
}
const HamburgerMenu: FC<HamburgerMenuProps> = ({ menuItems }) => {
  const [ open, setOpen ] = useState();

  return (
    <Container>
      <Hamburger />
      <Menu>
        { menuItems.map((item, index) => (
          <MenuItem key={ index }>
            <MenuLink to={ item }>{ item }</MenuLink>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  )
}

export default HamburgerMenu