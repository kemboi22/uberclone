<script lang="ts" setup></script>

<template>
  <div>
    <main class="p-4 md:ml-64 h-auto pt-20 ">
      <main class="lg:pl-72">
        <div class="xl:pl-96">
          <div class="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
            Main area
          </div>
        </div>
      </main>

      <aside
          class="fixed inset-y-0 left-72 hidden w-96 overflow-y-auto border-r border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
        Secondary column (hidden on smaller screens)
      </aside>
    </main>
  </div>
</template>

<style scoped></style>
