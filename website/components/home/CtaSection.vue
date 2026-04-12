<template>
  <section class="cta-section">
    <div class="container cta-section__content">
      <h2 class="cta-section__title scroll-reveal">{{ $t('cta.title') }}</h2>
      <p class="cta-section__subtitle scroll-reveal">{{ $t('cta.subtitle') }}</p>
      <NuxtLink :to="localePath('/contact')" class="btn btn--primary btn--lg cta-section__btn scroll-reveal">
        {{ $t('cta.button') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.cta-section {
  padding: 100px 0;
  background: var(--surface-dark);
}

.cta-section__content {
  text-align: center;
}

.cta-section__title {
  font-size: var(--text-4xl);
  font-weight: 500;
  color: var(--text-inverse);
  margin-bottom: var(--space-4);
}

.cta-section__subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: var(--space-10);
  font-weight: 400;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 60px 0;
  }

  .cta-section__title {
    font-size: var(--text-2xl);
  }
}
</style>
