<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 mt-5 mx-auto">
              <form v-on:submit.prevent="register">
                  <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                  <div class="form-group">
                    <input type="text" v-model="first_name" class="form-control" name="first_name" placeholder="Enter First Name">
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="last_name" class="form-control" name="Last_name" placeholder="Enter Last Name">
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="email" class="form-control" name="email" placeholder="Enter Email">
                  </div>
                  <div class="form-group">
                    <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter Password">
                  </div>
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import router from '../router'

  export default {
    data() {
      return {
        first_name:'',
        last_name:'',
        email:'',
        password: ''
      }
    },

  methods: {
      register () {
        axios.post('http://localhost:3000/users/register',
      {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password
      }).then(res => {
        console.log(res)
        this.first_name=''
        this.last_name=
        this.email = ''
        this.password = ''
        router.push({name: 'Login'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Dosis:300,700|Montserrat&display=swap');

body {
  width: 100%;
  min-height: 88vh;
  background-color: #f5f5f5;
}

h1 {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
}

label {
  font-family: "Dosis";
  font-weight: bold;
}

.form-control {
  border-radius: 16px;
  border: 1px solid rgb(128, 127, 127);
}

.btn-block {
  width: 50%;
  margin: auto;
  border-radius: 16px;
  font-family: "Montserrat";
  background-color: #f5f5f5;
  border: 1px solid #b8b8b8;
  color: #b8b8b8;
}

.btn-block:hover {
  background-color: #b8b8b8;
  border: 0;

}
</style>
