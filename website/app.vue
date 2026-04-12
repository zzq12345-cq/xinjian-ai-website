<template>
  <div>
    <LayoutTheNavbar />
    <main class="main-content">
      <NuxtPage />
    </main>
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useScrollAnimation()
</script>

<style>
.main-content {
  padding-top: var(--navbar-height);
  min-height: 100vh;
}
</style>
