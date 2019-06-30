<template>
  <form>
    <div class="form-group">
        <label for="exampleInputEmail1">Start date</label>
        <input type="start_date" class="form-control" id="exampleInputStartdate1" aria-describedby="startdate1Help" placeholder="Enter start date">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputEnd_date1">End date</label>
        <input type="end_date" class="form-control" id="exampleInputEnd_date1" placeholder="Enter End date">
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

