<template>
  <v-app class="bgColor">
    <v-main class="bgColor">
      <v-container class="fill-height" fluid>
        <v-row class="formDisplay" align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" validation>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                    :counter="15"
                    :rules="passwordRules"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn :loading="loading" :disabled="!valid" @click="onSubmit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { client } from "@/store";
export default {
  data() {
    return {
      client,
      email: "",
      password: "",
      valid: false,
      emailRules: [v => !!v || "E-mail is required"],
      passwordRules: [v => !!v || "Password is required"]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      const user = {
        username: this.email,
        password: this.password
      };
      this.$store
        .dispatch("authUser", user)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {});
    }
  },
  created() {
    if (this.$route.query["loginError"]) {
      this.$store.dispatch("setError", "Please log in to access this page.");
    }
  }
};
</script>
<style lang="scss" scoped>
.bgColor {
  background-color: #f7f7f7;
}
</style>>
