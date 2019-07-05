<template>
<body>
  <div class="employees container">
    <h1 class="page-header">Manage Employees</h1>
    <div class="row">
      <div class="col-8">
        <div class="input-group mb-3">
          <p class="find">
            <i class="fa fa-search"></i> Find an employee:
          </p>
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          >
          <!-- <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>-->
        </div>
      </div>
      <div class="col-4 text-right">
        <router-link class="nav-link" to="/add_employee">
          <button class="btn btn-outline-secondary" type="button">
            <i class="fa fa-user-plus"></i>
            <p class="add">+ Add</p>
          </button>
        </router-link>
      </div>
    </div>
    <div class="trait"></div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(employee) in filteredEmployee" :key="employee.id">
          <td>{{employee.first_name}}</td>
          <td>{{employee.last_name}}</td>
          <td>{{employee.email}}</td>
          <td>
            <router-link class="btn btn-default" :to="'/employee_info/' + employee.id">View</router-link>
          </td>
          <td>
            <button @click="() => deleteEmployee(employee.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
</template>

<script>
import axios from 'axios'

export default {
  name: "employees",
  data() {
    return {
      listEmployee: [],
      search: ""
    }
  },
  created() {
    axios.get('http://localhost:3000/employee').then(response => {
      this.listEmployee = response.data;
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    deleteEmployee(id) {
      axios.delete(`http://localhost:3000/employee/${id}`).then((response) => {
        if (response.status === 200) {
          console.log("Employee deleted")
          let index = this.listEmployee.findIndex((val) => val.id === id)
          delete this.listEmployee[index];
          this.listEmployee = this.listEmployee.filter(val => !!val)
        }
      }).catch(error => {
        console.log(error)
      })
    }
    // onSearchChange(e) {
    //   const { value } = e.target;
    //   const employees = this.listEmployee;
    //   this.filteredEmployee = employees.filter((employee) => !!employee.email.match(value))
    // }
  },
  computed: {
    filteredEmployee() {
      const employees = this.listEmployee;
      return employees.filter((employee) => !!employee.email.match(this.search))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Dosis:300,700|Montserrat&display=swap");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

body {
  width: 100%;
  min-height: 88vh;
  background-color: #f5f5f5;
}

.container {
  margin: auto;
}

table {
  font-family: "Dosis";
  font-weight: bold;
}

.table th,
.table td {
  border-top: 0;
}

.trait {
  border-top: solid 1px #b8b8b8;
  width: 80%;
  margin: auto;
  padding-bottom: 1%;
}

.page-header {
  display: flex;
  justify-content: center;
  font-family: "Montserrat";
  padding: 3%;
}

/* Computer Version */
@media screen and (min-width: 960px) {
  .find {
    font-family: "Montserrat";
    position: relative;
    left: 10%;
    margin-top: 3px;
  }

  .form-control {
    border-radius: 16px;
    left: 15%;
    top: 2%;
    height: 30px;
    border: 1px solid rgb(128, 127, 127);
  }

  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  button {
    background-color: #d5d5d5;
    color: white;
    border: 0;
    border-radius: 16px;
    width: 8vw;
    height: 33px;
    position: relative;
    margin-top: -4%;
    padding-top: 1%;
  }

  .fa-user-plus {
    display: none;
  }
}

/* XL Tablet Version */
@media screen and (min-width: 780px) and (max-width: 959px) {
  .find {
    font-family: "Montserrat";
    position: relative;
    left: 10%;
    margin-top: 3px;
  }

  .form-control {
    border-radius: 16px;
    left: 15%;
    top: 2%;
    height: 1%;
    border: 1px solid rgb(128, 127, 127);
  }

  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  button {
    background-color: #d5d5d5;
    color: white;
    border: 0;
    border-radius: 16px;
    width: 80px;
    height: 40px;
    position: relative;
    margin-top: -7%;
    padding-top: 1%;
  }

  .add {
    display: none;
  }
}

/* XS Tablet Version */
@media screen and (min-width: 481px) and (max-width: 779px) {
  .find {
    display: none;
  }

  .form-control {
    border-radius: 16px;
    left: 15%;
    top: 2%;
    height: 1%;
    border: 1px solid rgb(128, 127, 127);
  }

  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  button {
    background-color: #d5d5d5;
    color: white;
    border: 0;
    border-radius: 16px;
    width: 80px;
    height: 40px;
    position: relative;
    margin-top: -7%;
    padding-top: 1%;
  }

  .add {
    display: none;
  }
}

/* Phone Version */
@media screen and (max-width: 480px) {
  .find {
    display: none;
  }

  .form-control {
    border-radius: 16px;
    left: 15%;
    top: 2%;
    height: 1%;
    border: 1px solid rgb(128, 127, 127);
  }

  .input-group > .form-control:not(:first-child),
  .input-group > .custom-select:not(:first-child) {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  button {
    background-color: #d5d5d5;
    color: white;
    border: 0;
    border-radius: 16px;
    width: 80%;
    height: 40px;
    position: relative;
    margin-top: -15%;
    padding-top: 1%;
  }

  .add {
    display: none;
  }
}
</style>
