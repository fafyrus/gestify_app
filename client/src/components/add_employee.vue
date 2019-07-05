<template>
<body>
  <div class="add container">
    <h1 class="page-header">Add employee</h1>
    <form v-on:submit="addEmployee">
      <div class="trait"></div>

      <div>
        <h4>Employee Info</h4>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="First Name"
            v-model="employee.first_name"
          >
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Last Name"
            v-model="employee.last_name"
          >
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Email" v-model="employee.email">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Phone" v-model="employee.phone">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Address" v-model="employee.address">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="City" v-model="employee.city">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="State" v-model="employee.state">
        </div>
      </div>

      <div class="d-flex justify-content-start">
        <button type="submit" class="back btn btn-primary">Submit</button>
        <input type="button" class="back btn btn-info" onclick="history.back();" value="Back">
      </div>
    </form>
  </div>
</body>
</template>

// SELECT `id`, `first_name`, `last_name`, `email`, `address`, `phone`, `city`, `state`, `id_company` FROM `EMPLOYEE` AS `EMPLOYEE` WHERE `EMPLOYEE`.`email` = 'f.bejaoui1@gmail.com' LIMIT 1;
// INSERT INTO `EMPLOYEE` (`id`,`first_name`,`last_name`,`email`,`address`,`phone`,`city`,`state`) VALUES (DEFAULT,?,?,?,?,?,?,?);

<script>
import axios from "axios";

export default {
  name: "add",
  data() {
    return {
      employee: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: ""
      }
    };
  },
  methods: {
    addEmployee(e) {
      e.preventDefault();
      const company = JSON.parse(localStorage.getItem('company'))
      this.employee.id_company = company.id;
      if (
        this.employee.first_name ||
        this.employee.last_name ||
        this.employee.email ||
        this.employee.phone ||
        this.employee.city ||
        this.employee.state
      ) {
        axios.post('http://localhost:3000/employee', this.employee).then(response => {
          if(response.status === 201) {
            this.$router.push('/')
          }
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis:300,700|Montserrat&display=swap");

body {
  width: 100%;
  min-height: 88vh;
  background-color: #f5f5f5;
}

.form-control {
  border-radius: 16px;
  border: 1px solid rgb(128, 127, 127);
}

.trait {
  border-top: solid 1px #b8b8b8;
  width: 80%;
  margin: auto;
  padding-bottom: 1%;
}

.page-header,
h4 {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  padding: 3%;
}

.btn-primary,
.btn-info {
  width: 30%;
  margin: 3%;
  position: relative;
  left: 15%;
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

.btn-info:hover {
  background-color: rgb(102, 101, 101);
  color: white;
}
</style>
