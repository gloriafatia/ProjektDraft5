import { FunctionComponent } from 'react'

interface PublicLayoutPropsType {
  children: React.ReactNode
}

export const PublicLayout: FunctionComponent<PublicLayoutPropsType> = ({ children }) => {
  return <div>{children}</div>
}

export default PublicLayout
