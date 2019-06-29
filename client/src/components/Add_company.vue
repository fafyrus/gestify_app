<template>
    <form>
      <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name">
          <small id="namelHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
          <label for="exampleInputPassword1">Address</label>
          <input type="address" class="form-control" id="exampleInputName1" placeholder="Name">
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
  name: "add",
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
        console.log(345);
        e.preventDefault();
    }
  }
}
</script>

<style scoped>

</style>

