<script lang="ts" setup></script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white" href="#">
        <img alt="logo" class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg">
        Flowbite
      </a>
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <slot/>
      </div>
    </div>
  </section>


</template>

<style scoped></style>
