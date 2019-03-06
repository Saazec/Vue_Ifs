<template>
  <div id="app">
    <div class="container-fluid">
  <div class="col">
    <div>

      <!--    Navigation starts here    -->

      <nav class="navbar navbar-light bg-light sticky-top">
        <router-link :to="{name: 'Home'}" exact>
          <img src="./assets/logo.png" alt="" srcset="">
        </router-link>
        <ul class="nav justify-content-end">
            <li class="nav-item">
              <a class="nav-link active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">View</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Help</a>
            </li>
            <li class="nav-item">
              <select name="" id="" class="form-control form-control-sm">
                <option value="BusinessUnit" selected>Business Unit</option>
                <option value="someOther">Some Other</option>
                <option value="someOther2">Some Other 2</option>
              </select>
            </li>
            <li class="nav-item">
              <button type="button"  class="btn btn-sm btn-danger capsule-btn margin-l-20">Logout &gt;</button>
            </li>
          </ul>
      </nav>
      <!--    navigation ends here    -->

      <!--    login component here    -->

      <!--    Login component ends here   -->
      
      
      <!-- <router-outlet></router-outlet> -->

      <router-view />


      <!-- <login-form *ngIf="!loggedInStatus"></login-form>
      <dashboard *ngIf="loggedInStatus"></dashboard> -->
      <!-- <login-form></login-form> -->
      <!-- footer starts here    -->
      <div class="d-flex justify-content-center custom-footer">
        <footer>&copy; SMRT | 2019</footer>
      </div>
    </div>
    <!--    footer ends here    -->
  </div>
</div>

  </div>
</template>

<script>
// import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body {
  font-size: small;
}
.custom-footer {
  position: fixed;
  bottom: 0%;
  width: 100%;
}
</style>
