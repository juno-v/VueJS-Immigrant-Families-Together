/* imports for Admin landing page */
import AdminLanding from "./components/Admin/LandingPage/AdminLanding.vue"; 
import Events from "./components/Admin/LandingPage/Events.vue";
import Cases from "./components/Admin/LandingPage/Cases.vue";
import Volunteers from "./components/Admin/LandingPage/Volunteers.vue";
import RegisterVolunteer from "./components/Admin/LandingPage/RegisterVolunteer.vue";

/* imports for Case Management landing */
import ViewCases from "./components/Admin/CaseManagement/ViewCases.vue";
import EditCase from "./components/Admin/CaseManagement/EditCase.vue";
import AddCase from "./components/Admin/CaseManagement/AddCase.vue";
import CloseCase from "./components/Admin/CaseManagement/CloseCase.vue";

/* imports for Creating Case Forms */
import BioForm from "./components/Admin/CreateCase/BioForm.vue";
import ChildrenForm from "./components/Admin/CreateCase/ChildrenForm.vue";
import MedicalForm from "./components/Admin/CreateCase/MedicalForm.vue";
import SchoolForm from "./components/Admin/CreateCase/SchoolForm.vue";
import HousingForm from "./components/Admin/CreateCase/HousingForm.vue";
import AidForm from "./components/Admin/CreateCase/AidForm.vue";
import BondForm from "./components/Admin/CreateCase/BondForm.vue"; 
import LegalForm from "./components/Admin/CreateCase/LegalForm.vue";

/* imports for Volunteer */
import LandingPage from "./components/Volunteer/LandingPage.vue"; 

export default [
    /* imports for Admin landing page */
    {path: '/admin-landing', component: AdminLanding},
    {path: '/events', component: Events},
    {path: '/cases', component: Cases},
    {path: '/volunteers', component: Volunteers},
    {path: '/register-volunteer', component: RegisterVolunteer},

    /* imports for Case Management landing */
    {path: '/view-cases', component: ViewCases},
    {path: '/edit-case', component: EditCase},
    {path: '/add-case', component: AddCase},
    {path: '/close-case', component: CloseCase},

    /* imports for Creating Case Forms */
    {path: '/children-form', component: ChildrenForm},
    {path: '/medical-form', component: MedicalForm},
    {path: '/school-form', component: SchoolForm},
    {path: '/housing-form', component: HousingForm},
    {path: '/aid-form', component: AidForm},
    {path: '/bond-form', component: BondForm},
    {path: '/legal-form', component: LegalForm},
    

    /* imports for Volunteer */
    {path: '/volunteer-landing', component: LandingPage},


    
]