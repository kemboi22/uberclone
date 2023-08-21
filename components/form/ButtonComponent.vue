<script lang="ts" setup>
type ButtonType = "reset" | "submit" | "button"
withDefaults(defineProps<{
  type?: ButtonType,
  classes?: string,
  label: string
}>(), {
  type: "button",
  classes: "w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
})
</script>

<template>
  <button
      :class="classes"
      :type="type"
      class="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800">
    {{ label }}
  </button>
</template>

<style scoped></style>
