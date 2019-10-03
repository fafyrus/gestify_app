<template>
  <body>
    <h1 class="page-header">Add company</h1>
    <form @submit="addCompany">
      <div class="trait"></div>
      <div class="form-group">
          <input type="text" class="form-control" v-model="company.name" placeholder="Enter name">
      </div>
      <div class="form-group">
          <input type="text" class="form-control" v-model="company.address" placeholder="Address">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </body>
</template>

<script>
import axios from "axios";
import jwtDecode from 'jwt-decode';

export default {
  data(){
    return {
      company: {
        name: '',
        address: ''
      }
    }
  },
  methods:{
    addCompany(e){
      e.preventDefault();
      const token = localStorage.getItem('usertoken')
      const user = jwtDecode(token)
      axios.post(`/company`, { ...this.company, author_id: user.id }).then(response => {
        localStorage.setItem('company', JSON.stringify(response.data.statusMsg))
        this.changeUserStatus(user.id)
      }).catch(error => {
        console.log(error)
      })
    },
    changeUserStatus(userId) {
      axios.patch(`/users/${userId}`).then(response => {
        this.$router.push('/');
      }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    const token = localStorage.getItem('usertoken')
    const user = jwtDecode(token)
    if (user.first_connection) {
      return false;
    } else {
      axios.get(`/users/${user.id}/company`).then(response => {
        console.log("test")
        localStorage.setItem('company', JSON.stringify(response.data))
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dosis:300,700|Montserrat&display=swap');

body {
  width: 100%;
  min-height: 88vh;
  background-color: #f5f5f5;
}

.page-header{
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  padding: 3%;
}

.trait {
  border-top: solid 1px #b8b8b8;
  width: 80%;
  margin: auto;
  padding-bottom: 1%;
}

small, .form-check {
  display: flex;
  justify-content: center;
}

.form-check-input {
  position: relative;
}

.form-control {
  border-radius: 16px;
  border: 1px solid rgb(128, 127, 127);
  margin: auto;
  width: 50%;
}

.form-group {
  margin-top: 2%;
  background-color: #f5f5f5;
}

.btn-primary {
  width: 30%;
  position: relative;
  left: 35%;
  margin-top: 2%;
  border-radius: 16px;
  font-family: "Montserrat";
  background-color: #f5f5f5;
  border: 1px solid #b8b8b8;
  color: #b8b8b8;
}

.btn-primary:hover {
  background-color: #b8b8b8;
  border: 0;
  color: white;

}
</style>

