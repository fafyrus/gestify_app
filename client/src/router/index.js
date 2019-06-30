import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Add_employee from '@/components/Add_employee';
import Add_company from '@/components/Add_company';
import Contract from '@/components/Contract';
import Pay_slip from '@/components/Pay_slip';


Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/add_employee',
      name: 'Add_employee',
      component: Add_employee
    },
    {
      path: '/add_company',
      name: 'Add_company',
      component: Add_company
    },
    {
      path: '/contract',
      name: 'Contract',
      component: Contract
    },
    {
      path: '/pay_slip',
      name: 'Pay_slip',
      component: Pay_slip
    }
  ]
});

