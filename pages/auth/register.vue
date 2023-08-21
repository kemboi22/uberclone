<script lang="ts" setup>
definePageMeta({
  layout: "auth"
})
const user = ref<User>({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const submit = async () => {
  console.log("CLicked")
}
</script>

<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Register an account with us
    </h1>
    <form action="#" class="space-y-4 md:space-y-6">
      <FormInputComponent v-model="user.name" label="Full Name" place-holder="Joe Doe"/>
      <FormInputComponent v-model="user.email" label="Email" place-holder="abc@email.com" type="email"/>
      <FormInputComponent v-model="user.password" label="Password" place-holder="**********" type="password"/>
      <FormInputComponent v-model="user.confirmPassword" label="Confirm Password" place-holder="**********"
                          type="password"/>
      
      <FormButtonComponent label="Register" @click.prevent="submit"/>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?
        <NuxtLink class="font-medium text-blue-600 hover:underline dark:text-blue-500" to="/auth/login">
          Sign in
        </NuxtLink>
      </p>
    </form>
  </div>
</template>

<style scoped></style>
