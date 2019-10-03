<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 mt-5 mx-auto">
              <form v-on:submit.prevent="login">
                  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                  <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" v-model="email" class="form-control" name="email" placeholder="Enter Email">

                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" class="form-control" name="password" placeholder="Enter Password">
                  </div>
                  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
              </form>
          </div>
      </div>
  </div>
</template>
// Appel backend via appel ajax
<script>
  import axios from 'axios'
  import  EventBus  from '../EventBus.js';

  export default {
    data() {
      return {
        email:'',
        password: ''
      }
    },

    methods: {
      login() {
        axios.post('/users/login', {
            email: this.email,
            password: this.password
          }).then(res => {
            localStorage.setItem('usertoken', res.data.token)
            this.email = ''
            this.password = ''
            this.$router.push({name: 'Add_company'})
          }).catch(err => {
            console.log(err)
            })
          this.emitMethod()
      },
      emitMethod() {
        EventBus.$emit('logged-in', 'loggedin')
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
