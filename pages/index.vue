<script lang="ts" setup>
import {Bars3Icon, XMarkIcon} from "@heroicons/vue/20/solid";

definePageMeta({
  layout: false
})

const navigation = [
  {name: 'Product', href: '#'},
  {name: 'Features', href: '#'},
  {name: 'Marketplace', href: '#'},
  {name: 'Company', href: '#'},
]
const mobileMenuOpen = ref(false)
</script>

<template>
  <div class="bg-white">
    <!-- Header -->
    <header class="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Uber Company</span>
            <img alt="" class="h-8 w-auto"
                 src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC8xN1wvNTUxMFwvMmM3MTkyZDM1NGQ0YjA2YWFhZTgzZDc5Yzc2MzYwNWMtMTYyMDM3Nzc0OC5haSJ9:postmates:cvkkT2vHrzRiGiujqpqbVFn9z8dn773yTgVOCePXowk?width=2400"/>
          </a>
        </div>
        <div class="flex lg:hidden">
          <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" type="button"
                  @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href"
             class="text-sm font-semibold leading-6 text-white">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a class="text-sm font-semibold leading-6 text-white" href="#">Log in <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
      <HeadlessDialog :open="mobileMenuOpen" as="div" class="lg:hidden " @close="mobileMenuOpen = false">
        <div class="fixed inset-0 z-50"/>
        <HeadlessDialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black/80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a class="-m-1.5 p-1.5" href="#">
              <span class="sr-only">Your Company</span>
              <img alt="" class="h-8 w-auto"
                   src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC8xN1wvNTUxMFwvMmM3MTkyZDM1NGQ0YjA2YWFhZTgzZDc5Yzc2MzYwNWMtMTYyMDM3Nzc0OC5haSJ9:postmates:cvkkT2vHrzRiGiujqpqbVFn9z8dn773yTgVOCePXowk?width=2400"/>
            </a>
            <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href"
                   class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-blue-400">
                  {{ item.name }}</a>
              </div>
              <div class="py-6 p-2">
                <NuxtLink
                    class="-mx-3 p-1 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900  bg-green-400 hover:bg-green-600"
                    to="/auth/register">Sign Up
                </NuxtLink>
                <NuxtLink
                    class="-mx-3 mt-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7  text-white  dark:bg-blue-400 dark:hover:bg-blue-600"
                    to="/auth/login">Log in
                </NuxtLink>
              </div>
            </div>
          </div>
        </HeadlessDialogPanel>
      </HeadlessDialog>
    </header>

    <main>
      <!-- Hero section -->
      <div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <!--        <img src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />-->
        <!--        -->
        <div aria-hidden="true"
             class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Ride to any point of the universe
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-300">
                Ride with us to any part of the universe at a low cost.
                The best part is you can pay us with crypto. Eg Ethereum</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                   href="#">Get started
                </a>

              </div>
            </div>
          </div>

          <!-- Logo cloud -->
          <div
              class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img alt="Transistor"
                 class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" height="48"
                 src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
                 width="158"/>
            <img alt="Reform"
                 class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" height="48"
                 src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
                 width="158"/>
            <img alt="Tuple"
                 class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" height="48"
                 src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
                 width="158"/>
            <img alt="SavvyCal"
                 class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" height="48"
                 src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
                 width="158"/>
            <img alt="Statamic"
                 class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                 height="48" src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
                 width="158"/>
          </div>
        </div>
        <div
            aria-hidden="true"
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
              class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"/>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
