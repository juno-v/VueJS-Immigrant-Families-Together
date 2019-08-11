/* imports for Admin landing page */
import LandingPage from "./components/Admin/LandingPage/LandingPage.vue"; 
import Events from "./components/Admin/LandingPage/Events.vue";
import Cases from "./components/Admin/LandingPage/Cases.vue";
import Volunteers from "./components/Admin/LandingPage/Volunteers.vue";
import RegisterVolunteer from "./components/Admin/LandingPage/RegisterVolunteer.vue";

/* imports for Case Management landing */
import ViewCases from "./components/Admin/CaseManagement/ViewCases.vue";
import EditCase from "./components/Admin/CaseManagement/EditCase.vue";
import AddCase from "./components/Admin/CaseManagement/AddCase.vue";
import CloseCase from "./components/Admin/CaseManagement/CloseCase.vue";

export default [
    /* imports for Admin landing page */
    {path: '/', component: LandingPage},
    {path: '/events', component: Events},
    {path: '/cases', component: Cases},
    {path: '/volunteers', component: Volunteers},
    {path: '/register-volunteer', component: RegisterVolunteer},

    /* imports for Case Management landing */
    {path: '/view-cases', component: ViewCases},
    {path: '/edit-case', component: EditCase},
    {path: '/add-case', component: AddCase},
    {path: '/close-case', component: CloseCase},


    
]