<template>
<!-- <nav class= "nav.navbar.navbar-expand-lg navbar-dark bg-dark rounded">
  <button class= "navbar-toggle"
      type="button"
      data-toggle="collapse"
      data-target="#navbar1"
      aria-controls="navbar"
      aria-expanded="false"
      aria-label="toggle navigation">
      <span class="navbar-toggle-icon"></span>
  </button>

    <div class="collapse navbar-collapse justify-content-md-center" id="navbar1">
      <ul class="navbar-nav">
        <li class="nav-item">
        <router-link class="nav-link" to="/">Login</router-link>
        </li>

        <li v-if="auth==''" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
        </li>

        <li v-if="auth=='loggedin'" class="nav-item">
          <router-link class="nav-link" to="/profile">Profile</router-link>
        <li/>

        <li v-if="auth=='loggedin'" class="nav-item">
          <a class="nav-link" href="" v-on:click='logout'>Logout</a>
        </li>
      </ul>
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to="/">Gestify</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li v-if="!isLogged" class="nav-item">
        <router-link class="nav-link" to="/login">Login</router-link>
      </li>
      <li v-if="!isLogged" class="nav-item">
        <router-link class="nav-link" to="/register">Register</router-link>
      </li>
      <li v-if="isLogged" class="nav-item">
        <router-link class="nav-link" to="/profile">Profile</router-link>
      <li v-if="isLogged" class="nav-item1">
        <router-link class="nav-link" to="/add_employee">Add_employee</router-link>
      <li/>
      <li v-if="isLogged" @click="logout()" class="nav-item">
        <a class="nav-link" href="" v-on:click='logout'>Logout</a>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
import { EventBus } from '@/Eventbus.js';
export default {
  data() {
    return {
      user:''
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/login')
    }
  },
  computed: {
    isLogged() {
      return !!localStorage.getItem('usertoken')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:300|Varela+Round&display=swap');

.nav-item1{
  float: right;
}

nav {
  box-shadow: -1px 4px 6px gray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.bg-light {
  background-color: #f2f2f2 !important
}

.nav-item:first-child {
  border-right: 1px solid gray
}

ul {
  font-family: "Dosis";
  font-weight: bold;
}

.navbar-brand {
  font-family: "Varela Round";
  text-shadow: 1px 1px 1px grey;
}

</style>

