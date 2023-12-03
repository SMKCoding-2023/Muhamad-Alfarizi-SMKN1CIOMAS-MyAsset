<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";
import { useRouter, useRoute } from "vue-router";

const authStore = useAuthStore();
const isAuthenticated = ref(false);
const router = useRouter();
const route = useRoute();

onMounted(() => {
  isAuthenticated.value = !!useCookie("access_token").value;
});

const logout = async () => {
  await authStore.logout();
  const accessToken = useCookie("access_token");
  const refreshToken = useCookie("refresh_token");
  accessToken.value = null;
  refreshToken.value = null;
  isAuthenticated.value = false;
  router.push({
    path: "/",
  });
};
</script>

<template>
  <nav class="bg-blue-900 text-white border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center">
        <img src="../public/images/icons/pngwing.com.png  " class="h-8 mr-3" alt="" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyAsset</span>
      </a>
      <input type="checkbox" class="hidden" id="menu-toggle" />
      <label for="menu-toggle"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </label>
      <div class="hidden w-full md:flex md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col md:flex-row md:space-x-4 items-center">
          <NuxtLink to="/" class="text-base hover:underline">Home</NuxtLink>
          <NuxtLink to="/product" class="text-base hover:underline">Product</NuxtLink>
          <NuxtLink to="/cart" class="text-base hover:underline">Cart</NuxtLink>
          <template v-if="!isAuthenticated">
            <NuxtLink to="/login" class="text-base bg-blue-600 px-4 py-2 text-white rounded-lg hover:bg-blue-600/80">
              Login
            </NuxtLink>
          </template>
          <template v-else>
            <div class="text-base cursor-pointer bg-red-600 px-4 py-2 text-white rounded-lg hover:bg-red-600/80"
              @click="logout">
              Logout
            </div>
          </template>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
#menu-toggle:checked~#navbar-default {
  display: block;
}
</style>