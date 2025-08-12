<script setup lang="ts">
import imgSrc from "@/assets/advr.png";
</script>

<template>
  <v-container
    id="LoginView"
    class="pa-0 mt-n15 d-flex justify-center align-center"
  >
    <v-container max-width="500">
      <v-img aspect-ratio="16/9" :src="imgSrc"></v-img>

      <v-card class="mx-2 mt-3">
        <v-form>
          <v-container>
            <v-row
              ><v-col cols="12">
                <v-text-field label="Email" required></v-text-field> </v-col
            ></v-row>
            <v-row
              ><v-col cols="12">
                <v-text-field
                  label="Password"
                  type="password"
                  required
                ></v-text-field> </v-col
            ></v-row>
            <v-row
              ><v-col cols="12">
                <v-btn type="submit" color="primary" block>Login</v-btn>
              </v-col></v-row
            >
          </v-container>
        </v-form>
      </v-card>
    </v-container>
  </v-container>
</template>

<style scoped>
#LoginView {
  height: 100%;
}
</style>
