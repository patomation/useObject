import React, { ReactNode, FunctionComponent } from 'react'

export interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
}

export const MyComponent: FunctionComponent<Props> = ({
  children,
  className,
  style
}: Props) => {
  return (
    <div
      className={className}
      style={{ ...style }}>
      { children }
    </div>
  )
}
