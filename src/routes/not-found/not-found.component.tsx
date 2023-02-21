// internal imports
import { NotFoundContainer } from "./not-found.styles"

// component
const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>That page doesn't exist.</h1>
      <a href="/">Back to home</a>
    </NotFoundContainer>
  )
}

export default NotFound