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
  min-height: 100vh;
  padding-top: var(--navbar-height);
}
</style>
