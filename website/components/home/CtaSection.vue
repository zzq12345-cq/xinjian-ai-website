<template>
  <section class="cta-section">
    <div class="cta-section__bg animate-gradient"></div>
    <div class="container cta-section__content">
      <div class="cta-section__pulse-bg">
        <div class="cta-section__pulse-circle"></div>
        <div class="cta-section__pulse-circle" style="animation-delay: 1s;"></div>
        <div class="cta-section__pulse-circle" style="animation-delay: 2s;"></div>
      </div>

      <h2 class="cta-section__title scroll-reveal">{{ $t('cta.title') }}</h2>
      <p class="cta-section__subtitle scroll-reveal">{{ $t('cta.subtitle') }}</p>
      <NuxtLink :to="localePath('/contact')" class="btn btn--white btn--lg cta-section__btn scroll-reveal">
        {{ $t('cta.button') }}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
}

.cta-section__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary), var(--brand-accent));
  background-size: 200% 200%;
}

.cta-section__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.cta-section__pulse-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
}

.cta-section__pulse-circle {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: pulse-ring 3s ease-out infinite;
}

.cta-section__title {
  font-size: var(--text-4xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  color: white;
}

.cta-section__subtitle {
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--space-8);
}

.cta-section__btn {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .cta-section__title {
    font-size: var(--text-2xl);
  }
}
</style>
