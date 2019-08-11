/* imports for Admin landing page */
import LandingPage from "./components/Admin/LandingPage/LandingPage.vue"; 
import Events from "./components/Admin/LandingPage/Events.vue";
import Cases from "./components/Admin/LandingPage/Cases.vue";
import Volunteers from "./components/Admin/LandingPage/Volunteers.vue";
import RegisterVolunteer from "./components/Admin/LandingPage/RegisterVolunteer.vue";

export default [
    /* imports for Admin landing page */
    {path: '/', component: LandingPage},
    {path: '/events', component: Events},
    {path: '/cases', component: Cases},
    {path: '/volunteers', component: Volunteers},
    {path: '/register-volunteer', component: RegisterVolunteer}

    
]