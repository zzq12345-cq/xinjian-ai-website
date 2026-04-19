<template>
  <div>
    <LayoutTheNavbar />
    <main>
      <NuxtPage />
    </main>
    <LayoutTheFooter />
  </div>
</template>

<script setup lang="ts">
useScrollAnimation()
</script>

<style>
/* No padding-top here — each page's hero handles its own spacing.
   Navbar is transparent overlay on dark hero backgrounds. */
</style>
