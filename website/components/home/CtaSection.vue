<template>
  <section class="cta-section section">
    <div class="container">
      <div class="cta-section__card">
        <div class="cta-section__bg">
          <div class="cta-section__orb cta-section__orb--1"></div>
          <div class="cta-section__orb cta-section__orb--2"></div>
        </div>
        <div class="cta-section__content">
          <h2 class="cta-section__title scroll-reveal">{{ $t('cta.title') }}</h2>
          <p class="cta-section__subtitle scroll-reveal">{{ $t('cta.subtitle') }}</p>
          <NuxtLink :to="localePath('/contact')" class="btn btn--white btn--lg cta-section__btn scroll-reveal">
            {{ $t('cta.button') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.cta-section__card {
  position: relative;
  overflow: hidden;
  background: var(--gradient-brand);
  border-radius: var(--radius-2xl);
  padding: 100px 60px;
  box-shadow: 0 32px 80px rgba(199, 0, 11, 0.2);
}

.cta-section__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-section__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
}

.cta-section__orb--1 {
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.08);
  top: -100px;
  right: -50px;
  animation: glowPulse 6s ease-in-out infinite;
}

.cta-section__orb--2 {
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.1);
  bottom: -80px;
  left: -40px;
  animation: glowPulse 8s ease-in-out infinite 2s;
}

.cta-section__content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.cta-section__title {
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--text-inverse);
  margin-bottom: var(--space-4);
  letter-spacing: -0.03em;
  font-family: var(--font-display);
}

.cta-section__subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--space-12);
  font-weight: 400;
}

.cta-section__btn {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .cta-section__card {
    padding: 72px 32px;
    border-radius: var(--radius-xl);
  }

  .cta-section__title {
    font-size: var(--text-2xl);
  }
}
</style>
