<template>
  <div class="container h-100 bg-grey" style="margin-top:15%;">
    <div class="row h-100 justify-content-center align-items-center">
      <form class="col-md-4" @submit.prevent="handleSubmit">
        <h6 class="text-center" style="padding-bottom: 50px;">Forgot Password</h6>
        <div class="form-group">
          <label for="registeredEmail">Enter Email ID</label>
          <input
            type="email"
            v-model="user.recoveryEmail"
            v-validate="'required|email'"
            class="form-control"
            id="email"
            name="email"
            :class="{ 'is-invalid': submitted && errors.has('email') }"
            placeholder="abc@example.com"
          >
          <div
            v-if="submitted && errors.has('email')"
            class="invalid-feedback"
          >{{ errors.first('email') }}</div>
        </div>

        <div class="row d-flex justify-content-end margin-0 margin-t-5">
          <button class="btn btn-danger capsule-btn">Send Recovery Email</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      user: {
        recoveryEmail: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          setTimeout(() => {
            this.$toasted.success("Recovery email has been sent.", {
              action: {
                text: "X",
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
              onComplete: () => {
                this.$router.push({name: 'Home'});
              }
            });
          }, 500);
        }
      });
    }
  }
};
</script>

<style>
</style>

