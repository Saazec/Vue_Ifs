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
        <ul class="nav justify-content-end" v-if="loggedInStatus">
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
              <button type="button" @click="logout()" class="btn btn-sm btn-danger capsule-btn margin-l-20">Logout &gt;</button>
            </li>
          </ul>
      </nav>
      <!--    navigation ends here    -->

      <!--    login component here    -->

      <!--    Login component ends here   -->
      
      
      <!-- <router-outlet></router-outlet> -->
       <transition name="slide-fade">
      <router-view @isAuthenticated="status => loggedInStatus = status" />
       </transition>

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
  },
  data() {
    return {
      loggedInStatus: false
    }
  },
  methods: {
    logout() {
      this.loggedInStatus = false;
      this.$router.push({name: 'Home'});
    }
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
/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 0.9s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
} */

.slide-fade-enter-active {
  transition: all .3s ease-in-out;
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 1.0, 0.8, 1.0); */
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-500px);
  opacity: 0;
}
.custom-footer {
  position: fixed;
  bottom: 0%;
  width: 100%;
}
</style>
