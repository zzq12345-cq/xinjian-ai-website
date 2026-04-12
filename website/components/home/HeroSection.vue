<template>
  <section class="hero">
    <!-- Background Decoration -->
    <div class="hero__bg">
      <div class="hero__bg-gradient"></div>
      <div class="hero__bg-circles">
        <div class="hero__circle hero__circle--1"></div>
        <div class="hero__circle hero__circle--2"></div>
        <div class="hero__circle hero__circle--3"></div>
      </div>
      <!-- Animated Wave -->
      <div class="hero__wave-container">
        <svg class="hero__wave animate-wave" viewBox="0 0 2880 60" fill="none">
          <path d="M0 30C120 10 240 50 360 30C480 10 600 50 720 30C840 10 960 50 1080 30C1200 10 1320 50 1440 30C1560 10 1680 50 1800 30C1920 10 2040 50 2160 30C2280 10 2400 50 2520 30C2640 10 2760 50 2880 30" stroke="var(--brand-primary)" stroke-width="2" stroke-opacity="0.15" />
          <path d="M0 40C120 20 240 60 360 40C480 20 600 60 720 40C840 20 960 60 1080 40C1200 20 1320 60 1440 40C1560 20 1680 60 1800 40C1920 20 2040 60 2160 40C2280 20 2400 60 2520 40C2640 20 2760 60 2880 40" stroke="var(--brand-accent)" stroke-width="1.5" stroke-opacity="0.1" />
        </svg>
      </div>
    </div>

    <div class="container hero__content">
      <div class="hero__text">
        <!-- Badge -->
        <div class="hero__badge animate-fade-in">
          <span class="hero__badge-dot"></span>
          {{ $t('hero.badge') }}
        </div>

        <!-- Title -->
        <h1 class="hero__title animate-fade-in-up">
          {{ $t('hero.title') }}
          <br />
          <span class="text-gradient">{{ $t('hero.titleHighlight') }}</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero__subtitle animate-fade-in-up" style="animation-delay: 0.15s;">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="hero__actions animate-fade-in-up" style="animation-delay: 0.3s;">
          <NuxtLink :to="localePath('/product')" class="btn btn--primary btn--lg">
            {{ $t('hero.cta') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn btn--outline btn--lg">
            {{ $t('hero.ctaSecondary') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Product Image -->
      <div class="hero__image animate-fade-in" style="animation-delay: 0.3s;">
        <div class="hero__image-wrapper">
          <img src="/images/product-device.png" alt="心音智鉴设备" class="hero__product-img animate-float" />
          <!-- Decorative Pulse -->
          <div class="hero__pulse">
            <div class="hero__pulse-ring"></div>
            <div class="hero__pulse-ring" style="animation-delay: 0.5s;"></div>
            <div class="hero__pulse-core animate-heartbeat">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--brand-primary)">
                <path d="M12 4.5c-1.7-1.7-4.4-1.7-6.1 0s-1.7 4.4 0 6.1L12 17l6.1-6.4c1.7-1.7 1.7-4.4 0-6.1s-4.4-1.7-6.1 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: calc(100vh - var(--navbar-height));
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: var(--space-20) 0;
}

/* Background */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--brand-primary-50) 0%, var(--surface-white) 40%, var(--surface-light) 100%);
}

.hero__bg-circles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.hero__circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.06;
}

.hero__circle--1 {
  width: 600px;
  height: 600px;
  background: var(--brand-primary);
  top: -200px;
  right: -100px;
}

.hero__circle--2 {
  width: 400px;
  height: 400px;
  background: var(--brand-accent);
  bottom: -100px;
  left: -100px;
}

.hero__circle--3 {
  width: 200px;
  height: 200px;
  background: var(--brand-warm);
  top: 40%;
  left: 30%;
}

.hero__wave-container {
  position: absolute;
  bottom: 30%;
  left: 0;
  right: 0;
  height: 60px;
  overflow: hidden;
}

.hero__wave {
  width: 200%;
  height: 100%;
}

/* Content */
.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

/* Text */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: var(--brand-primary-50);
  color: var(--brand-primary);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-6);
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--brand-primary);
  border-radius: 50%;
  animation: pulse-ring 2s ease infinite;
}

.hero__title {
  font-size: var(--text-5xl);
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
}

.hero__subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-8);
  max-width: 520px;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  flex-wrap: wrap;
}

/* Image */
.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image-wrapper {
  position: relative;
  max-width: 500px;
}

.hero__product-img {
  width: 100%;
  border-radius: var(--radius-xl);
  filter: drop-shadow(0 20px 60px rgba(8, 145, 178, 0.15));
}

/* Pulse Effect */
.hero__pulse {
  position: absolute;
  top: 15%;
  right: -10%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__pulse-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--brand-primary);
  animation: pulse-ring 2s ease-out infinite;
}

.hero__pulse-core {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__subtitle {
    margin: 0 auto var(--space-8);
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__image {
    order: -1;
  }

  .hero__image-wrapper {
    max-width: 380px;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: var(--space-12) 0;
  }

  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__subtitle {
    font-size: var(--text-base);
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
