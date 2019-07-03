<template>
<body>
  <div class='container'>
    <h1 class="text-center">PROFILE</h1>
      <div class="trait"></div>
        <table class="table col-md-6 mx-auto">
          <tbody>
            <tr>
              <p>First name : </p>
              <td>{{first_name}}</td>
            </tr>
            <tr>
              <p>Last name : </p>
              <td>{{last_name}}</td>
            </tr>
            <tr>
              <p>Email : </p>
              <td>{{email}}</td>
            </tr>
             <tr>
              <p>Phone : </p>
              <td>{{phone}}</td>
            </tr>
             <tr>
              <p>City : </p>
              <td>{{city}}</td>
            </tr>
             <tr>
              <p>State: </p>
              <td>{{state}}</td>
            </tr>
          </tbody>

        </table>
  </div>
</body>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {
  data() {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      phone: decoded.phone,
      city: decoded.city,
      state: decoded.state
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

.text-center {
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

p {
  font-family: "Dosis";
}

tbody {
  display: grid;
}

.table th, .table td {
  border: 0;
}

</style>
