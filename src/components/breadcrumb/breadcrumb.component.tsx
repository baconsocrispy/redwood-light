// external imports
import { FC } from "react"

// internal imports
import { BreadcrumbCircle } from "./breadcrumb.styles"

// types
type BreadcrumbProps = {
  active: boolean;
}

// component
const Breadcrumb: FC<BreadcrumbProps> = ({ active }) => {
  return (
    <BreadcrumbCircle active={ active } />
  )
}

export default Breadcrumb