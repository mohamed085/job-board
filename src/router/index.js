import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Jobs from "@/views/Jobs";
import Dashboard from "@/views/Dashboard/Index";
import HomeDashboard from "@/views/Dashboard/Home";
import JobsDashboard from "@/views/Dashboard/Jobs";

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/jobs', component: Jobs },
  { path: '/dashboard', component: Dashboard,
    children: [
      { path: '/dashboard', component: HomeDashboard },
      { path: '/dashboard/jobs', component: JobsDashboard },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
