
/* imports for Admin landing page */
import LandingPage from "./components/Admin/LandingPage/LandingPage.vue"; 
import Events from "./components/Admin/LandingPage/Events.vue"

export default [
    /* imports for Admin landing page */
    {path: '/', component: LandingPage},
    {path: '/events', component: Events},
    {path: '/register-volunteer', component: Events},
    {path: '/volunteers', component: Events},
    {path: '/cases', component: Events},
]