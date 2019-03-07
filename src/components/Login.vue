<template>
  <div class="container h-100 bg-grey" style="margin-top:10%;">
    <div class="row h-100 justify-content-center align-items-center">
      <form class="col-md-4" name="form" @submit.prevent="handleSubmit">
        <h6 class="text-center" style="padding-bottom: 50px;">Login</h6>
        <div class="form-group">
          <label for="username">USER NAME</label>
          <input
            type="text"
            v-model="user.username"
            class="form-control input-sm form-control-sm"
            id="username"
            name="username"
            v-validate="'required'"
            :class="{ 'is-invalid': submitted && errors.has('username') }"
            placeholder="Enter Your User Name"
          >
          <div
            v-if="submitted && errors.has('username')"
            class="invalid-feedback"
          >{{ errors.first('username') }}</div>
        </div>
        <div class="form-group">
          <label for="password">PASSWORD</label>
          <input
            type="password"
            v-model="user.password"
            name="password"
            v-validate="'required'"
            class="form-control input-sm form-control-sm"
            id="password"
            :class="{ 'is-invalid': submitted && errors.has('password') }"
            placeholder="*********"
          >
          <div
            v-if="submitted && errors.has('password')"
            class="invalid-feedback"
          >{{ errors.first('password') }}</div>
        </div>

        <div class="form-group">
          <label for="role">LOGIN AS</label>
          <select
            name="role"
            id="role"
            v-validate="'required'"
            v-model="user.role"
            :class="{ 'is-invalid': submitted && errors.has('role') }"
            class="form-control input-sm form-control-sm"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
          <!-- <span class="error-message"
          *ngIf="roleErrorMsg">Select your role.</span>-->
          <div
            v-if="submitted && errors.has('role')"
            class="invalid-feedback"
          >{{ errors.first('role') }}</div>
        </div>
        <div class="row">
          <div class="col margin-t-5">
            <input type="checkbox" name="remember" id="remember"> REMEMBER ME
          </div>
          <div class="margin-5-15">
            <router-link :to="{ name: 'Forgot'}">
              <span>
                <a>Forgot Password</a>
              </span>
            </router-link>
          </div>
        </div>
        <!-- <div class="row d-flex justify-content-center">
                <span class="error-message">Invalid Username or password</span>
        </div>-->
        <div class="row d-flex justify-content-end margin-0">
          <button class="btn btn-danger capsule-btn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
        role: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(() => {
        this.authenticate(this.user.username, this.user.password, this.user.role);
      });
    },
    authenticate: function(username, password, role) {
      if (username == "jhon" && password == "snow" && role == "user") {
        this.$toasted.success("Logged In", {
          action: {
            text: "X",
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          }
        });
        this.$emit('isAuthenticated', { status: true });
        this.$router.push({ name: "Dashboard" });
      }
    }
  }
};
</script>

<style scoped>
</style>
