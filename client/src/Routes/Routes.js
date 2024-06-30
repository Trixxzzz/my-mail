import { lazy } from "react"
const Main=lazy(()=>import('../Pages/Main'))
const Emails=lazy(()=>import('../Component/Emails'))
const ViewEmail=lazy(()=>import('../Component/ViewEmail'))

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    },
    invalid: {
        path: '/*',
        element: Emails
    }
}

export {routes}