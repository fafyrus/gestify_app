<template>
<body>
    <h1 class="page-header">Pay slip</h1>
    <form>
        <div class="trait"></div>
        <div class="form-group">
            <input type="salary" class="form-control" id="exampleInputSalary1" aria-describedby="salaryHelp" placeholder="Enter salary ...">
        </div>
        <div class="form-group">
            <input type="net_to_pay" class="form-control" id="exampleInputNet_to_pay1" placeholder="Net to pay ...">
        </div>
        <div class="form-group">
            <input type="hour_worked" class="form-control" id="exampleInputHour_worked1" placeholder="Hour worked ...">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</body>
</template>

<script>
export default {
  
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
