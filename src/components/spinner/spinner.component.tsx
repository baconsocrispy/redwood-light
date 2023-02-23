// external imports
import { FC } from "react"

// types
type SpinnerProps = {
  spinner: string;
}

// component
const Spinner: FC<SpinnerProps> = ({ spinner }) => {
  return (
    <img src={ spinner } alt="loading spinner" className="spinner" />
  )
}

export default Spinner