<template>
  <div class="employees container">
    <h1 class="page-header">Manage Employees</h1>

      <div class="row">
        <div class="col-8">
          <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2">
  <!-- <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">Button</button>
  </div> -->
</div>
        </div>
        <div class="col-4 text-right">
        <router-link class="nav-link" to="/add_employee">
        <button class="btn btn-outline-secondary" type="button">+ Add</button>
        </router-link>

        </div>
      </div>


    <table class="table table-striped">
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for= "employee in employees" :key="employee.id">
            <td>{{employee.first_name}}</td>
            <td>{{employee.name}}</td>
            <td>{{employee.email}}</td>
            <td>{{employee.id}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "employees",
  data(){
    return {
      employees: []
    }
  },
  methods: {
    fetchEmployees(){
      this.$http.get('http://localhost:3000')
        .then(function(response){
          this.employees = JSON.parse(response.body);
      });
    },
    fetchEmployeesV2() {
      axios.get('http://localhost:3000/employee')
        .then((response) => {
          console.log(response);
          this.employees = response.data;
        });
    }
  },
  created(){
    // this.fetchEmployees();
    this.fetchEmployeesV2();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>




