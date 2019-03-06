<template>
    <div class="container h-100 bg-grey"
     style="margin-top:10%;">
    <div class="row h-100 justify-content-center align-items-center">
        <form class="col-md-4"
              name="form"
              novalidate>
            <h6 class="text-center"
                style="padding-bottom: 50px;">Login</h6>
            <div class="form-group">
                <label for="username">USER NAME</label>
                <input type="text" v-model="username"
                       class="form-control input-sm form-control-sm"
                       id="userName"
                       name="userName"
                       placeholder="Enter Your User Name"
                       required>
                <!-- <span class="error-message"
                      *ngIf="userErrorMsg">Enter your user name.</span> -->
               
            </div>
            <div class="form-group">
                <label for="password">PASSWORD</label>
                <input type="password" v-model="password"
                       name="password"
                       class="form-control input-sm form-control-sm"
                       id="password"
                       required
                       placeholder="*********">
                <!-- <span class="error-message"
                      *ngIf="passwordErrorMsg">Enter your password.</span> -->

            </div>

            <div class="form-group">
                <label for="role">LOGIN AS</label>
                <select name="role"
                        id="role" v-model="role"
                        class="form-control input-sm form-control-sm"
                        required>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    <option value="guest">Guest</option>
                </select>
                <!-- <span class="error-message"
                      *ngIf="roleErrorMsg">Select your role.</span> -->

                <div class="invalid-feedback">
                    Select Role
                </div>

            </div>
            <div class="row">
                <div class="col margin-t-5">
                    <input type="checkbox"
                           name="remember"
                           id="remember"> REMEMBER ME
                </div>
                <div class="margin-5-15">
                    <router-link :to="{ name: 'Forgot'}">
                    <span><a>Forgot Password</a></span>
                    </router-link>
                </div>
            </div>
            <!-- <div class="row d-flex justify-content-center">
                <span class="error-message">Invalid Username or password</span>
            </div> -->
            <div class="row d-flex justify-content-end margin-0">
                <button 
                    class="btn btn-danger capsule-btn" @click="authenticate(username, password, role)">Login</button>
            </div>
        </form>
    </div>
</div>


</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
        password: '',
        role: '',
        }
    },
    methods: {
        authenticate: function(username, password, role) {
            if (username == 'jhon' && password == 'snow' && role == 'user') {
                this.$router.push({name: 'Dashboard'});
            }
        }
    }
}
</script>

<style scoped>

</style>
