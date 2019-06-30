<template>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Salary</label>
    <input type="salary" class="form-control" id="exampleInputSalary1" aria-describedby="salaryHelp" placeholder="Enter salary ...">
    <small id="salaryHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputNet_to_pay1">Net to pay </label>
    <input type="net_to_pay" class="form-control" id="exampleInputNet_to_pay1" placeholder="Net to pay ...">
  </div>
  <div class="form-group">
    <label for="exampleInputHour_worked1">Hour worked</label>
    <input type="hour_worked" class="form-control" id="exampleInputHour_worked1" placeholder="Hour worked ...">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>


<script>
export default {

}
</script>

<style scoped>

</style>
