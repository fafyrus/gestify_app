<template>
<h1>infos employé</h1>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      employee: []
    }
  },
  created() {
    axios.get(`/employee/${this.$route.params.id}`).then(response => {
      if (response.status === 200) {
        console.log(response.data);
        this.employee = response.data;
      } else {
        this.$router.push('/');
      }
    })
  }
}
</script>

