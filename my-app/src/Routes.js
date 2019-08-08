import AdminLandingPage from "./components/Admin/AdminLandingPage.vue";
import Events from "./components/Admin/Events/Events.vue"; 

export default [
    {path: '/', component: AdminLandingPage},
    {path: '/events', component: Events}
]