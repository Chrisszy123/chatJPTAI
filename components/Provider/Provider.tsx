"use client"
import {SessionProvider} from "next-auth/react"
import { Session } from "../../types/Session"


const Provider = ({children, session}: {children: any, session: Session}) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider