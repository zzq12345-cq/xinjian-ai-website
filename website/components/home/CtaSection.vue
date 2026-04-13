<template>
  <section class="cta-section">
    <div class="cta-section__bg">
      <NuxtImg src="/images/ai-heart-tech.png" alt="" class="cta-section__bg-img" format="webp" />
      <div class="cta-section__bg-overlay"></div>
    </div>
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
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.cta-section__bg {
  position: absolute;
  inset: 0;
}

.cta-section__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-section__bg-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
}

.cta-section__content {
  position: relative;
  z-index: 1;
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
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--space-10);
  font-weight: 400;
}

@media (max-width: 768px) {
  .cta-section {
    padding: 80px 0;
  }

  .cta-section__title {
    font-size: var(--text-2xl);
  }
}
</style>
