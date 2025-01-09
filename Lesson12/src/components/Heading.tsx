import { ReactElement } from "react"

type HeadingProps = {title: string}

const Heading = ({title} :HeadingProps) : ReactElement => {
    //if we are returning an element then it will be more specific 
  return (
    <h1>{title}</h1>
  )
}

export default Heading