<script lang="ts" setup>
definePageMeta({
  layout: "auth"
})

const user = ref<LoginUser>({
  email: "",
  password: ""
})
const submit = async () => {

}
</script>

<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      Sign in to your account
    </h1>
    <form action="#" class="space-y-4 md:space-y-6">
      <FormInputComponent v-model="user.email" label="Email" place-holder="abc@email.com" type="email"/>
      <FormInputComponent v-model="user.password" label="Password" place-holder="••••••••" type="password"/>
      <div class="flex items-center justify-between">
        <NuxtLink class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500" to="#">
          Forgot password?
        </NuxtLink>
      </div>
      <FormButtonComponent label="Sign In" @click.prevent="submit"/>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?
        <NuxtLink class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  to="/auth/register">
          Sign up
        </NuxtLink>
      </p>
    </form>
  </div>

</template>

<style scoped></style>
