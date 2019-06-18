<template>
  <div class="add container">
    <h1 class="page-hearder">Add employee</h1>
    <form v-on:submit="addEmployee"><br/><hr color="gray">

        <div class="well">
            <h4>Employee Info</h4>
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class='form-control' placeholder="First Name" v-model="employee.first_name">
            </div>
            <div class="form-group">
            <label>Last Name</label>
            <input type="text" class='form-control' placeholder="Last Name" v-model="employee.last_name">
            </div>
        </div><br/>

        <div class="well">
            <h4>Employee Contact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class='form-control' placeholder="Email" v-model="employee.email">
                </div>
            <div class="form-group">
            <label>Phone</label>
            <input type="text" class='form-control' placeholder="Phone" v-model="employee.phone">
            </div>
        </div><br/>

        <div class="well">
            <h4>Employee location</h4>
            <div class="form-group">
                <label>Adress</label>
                <input type="text" class='form-control' placeholder="Adress" v-model="employee.adress">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type="text" class='form-control' placeholder="City" v-model="employee.city">
            </div>
          <div class="form-group">
                <label>State</label>
                <input type="text" class='form-control' placeholder="State" v-model="employee.state">
          </div>
        </div>
        <div class="d-flex justify-content-start">
    <button type="submit" class="back btn btn-primary">Submit</button>
    <input type="button" class="back btn btn-info" onclick="history.back();" value="Back">
    </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add",
  data(){
    return {
      employee: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        adress: '',
        city: '',
        state: ''
      }
    }
  },
  methods:{
    addEmployee(e){
        console.log(123);
        e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.back {
  width: 100px;
  margin-top: 20px;
}

.well{
  background-color: lightgrey;
  padding: 30px;
  border-radius: 5px;
}


</style>

