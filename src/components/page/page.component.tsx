// external imports
import { ReactNode, FC, useState, useEffect } from "react";

// internal imports
import Spinner from "../spinner/spinner.component";
import Light from '../spinner/svg/light.svg';

// types
type PageProps = {
  children: ReactNode;
}

const Page: FC<PageProps> = ({ children }) => {
  // state
  const [ pageLoaded, setPageLoaded ] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setPageLoaded(true);
    })
  })
  
  return (
    pageLoaded ? 
      <div>{ children }</div> : <Spinner spinner={ Light }/>
  )
}

export default Page