import {createContext, useContext} from "react"

export const EmailContext = createContext({
    emails: [],
    setEmails: ([email] : any) => {},
})


export const useEmail = () => {
    return useContext(EmailContext)
}

export const EmailProvider = EmailContext.Provider