<template>
  <section class="hero">
    <!-- Ambient background -->
    <div class="hero__bg">
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
    </div>

    <div class="container hero__inner">
      <!-- Centered text -->
      <div class="hero__text">
        <h1 class="hero__title">
          {{ $t('hero.title') }}
          <span class="hero__title-highlight">{{ $t('hero.titleHighlight') }}</span>
        </h1>
        <p class="hero__subtitle">{{ $t('hero.subtitle') }}</p>
        <div class="hero__actions">
          <NuxtLink :to="localePath('/product')" class="btn btn--brand btn--lg">
            {{ $t('hero.cta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn btn--outline-dark btn--lg">
            {{ $t('hero.ctaSecondary') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Visual block: brand-colored container with 3 floating feature capsules -->
      <div class="hero__visual">
        <div class="hero__block">
          <!-- Decorative SVG art inside block -->
          <svg class="hero__block-art" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="100" r="180" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
            <circle cx="1000" cy="300" r="220" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
            <circle cx="600" cy="200" r="80" fill="rgba(255,255,255,0.04)"/>
            <path d="M0 300 Q300 100 600 250 T1200 150" stroke="rgba(255,255,255,0.12)" stroke-width="2" fill="none"/>
            <path d="M0 350 Q400 200 800 320 T1200 200" stroke="rgba(255,255,255,0.06)" stroke-width="1.5" fill="none"/>
            <rect x="100" y="250" width="80" height="80" rx="24" fill="rgba(255,255,255,0.05)" transform="rotate(15 140 290)"/>
            <rect x="900" y="50" width="60" height="60" rx="18" fill="rgba(255,255,255,0.06)" transform="rotate(-10 930 80)"/>
            <circle cx="400" cy="80" r="12" fill="rgba(255,255,255,0.1)"/>
            <circle cx="850" cy="320" r="8" fill="rgba(255,255,255,0.12)"/>
          </svg>

          <!-- Product image centered -->
          <NuxtImg
            src="/images/product-hero.jpg"
            alt="心音智鉴设备"
            format="webp"
            class="hero__product-img"
          />

          <!-- Three floating feature capsules overlapping the block -->
          <div class="hero__capsule hero__capsule--1">
            <div class="hero__capsule-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div class="hero__capsule-text">
              <span class="hero__capsule-title">{{ $t('features.f1Title') }}</span>
              <span class="hero__capsule-sub">{{ $t('pain.pain1Solution') }}</span>
            </div>
          </div>

          <div class="hero__capsule hero__capsule--2">
            <div class="hero__capsule-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
            </div>
            <div class="hero__capsule-text">
              <span class="hero__capsule-title">{{ $t('features.f2Title') }}</span>
              <span class="hero__capsule-sub">{{ $t('pain.pain2Solution') }}</span>
            </div>
          </div>

          <div class="hero__capsule hero__capsule--3">
            <div class="hero__capsule-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            </div>
            <div class="hero__capsule-text">
              <span class="hero__capsule-title">{{ $t('features.f3Title') }}</span>
              <span class="hero__capsule-sub">{{ $t('pain.pain3Solution') }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Carousel indicators (dot style) -->
      <div class="hero__dots">
        <span v-for="n in 7" :key="n" class="hero__dot" :class="{ 'hero__dot--active': n === 3 }"></span>
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
  overflow: hidden;
  background: var(--gradient-hero);
  padding-top: calc(var(--navbar-height) + 80px);
  padding-bottom: 80px;
}

/* ─── Background ─── */
.hero__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.8;
}

.hero__orb--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(199, 0, 11, 0.06) 0%, transparent 70%);
  top: -10%;
  right: 10%;
  animation: glowPulse 8s ease-in-out infinite;
}

.hero__orb--2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.04) 0%, transparent 70%);
  bottom: 0%;
  left: -5%;
  animation: glowPulse 10s ease-in-out infinite 2s;
}

/* ─── Inner ─── */
.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ─── Text ─── */
.hero__text {
  text-align: center;
  max-width: 800px;
  margin-bottom: var(--space-16);
}

.hero__title {
  font-size: var(--text-hero);
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: var(--space-6);
  letter-spacing: -0.04em;
  color: var(--text-primary);
  font-family: var(--font-display);
}

.hero__title-highlight {
  display: inline-block;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-10);
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

/* Outline dark button for light bg */
.btn--outline-dark {
  background: transparent;
  border: 1.5px solid var(--border-medium);
  color: var(--text-primary);
  border-radius: var(--radius-full);
  padding: 14px 32px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn--outline-dark:hover {
  background: var(--surface-light);
  border-color: var(--text-primary);
}

/* ─── Visual Block ─── */
.hero__visual {
  width: 100%;
  max-width: 1200px;
}

.hero__block {
  position: relative;
  width: 100%;
  height: 420px;
  background: var(--gradient-brand);
  border-radius: var(--radius-2xl);
  overflow: visible;
  box-shadow: 0 32px 80px rgba(199, 0, 11, 0.2);
}

.hero__block-art {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  overflow: hidden;
}

.hero__product-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 320px;
  max-height: 380px;
  object-fit: contain;
  z-index: 3;
  filter: drop-shadow(0 24px 48px rgba(0, 0, 0, 0.35));
  border-radius: var(--radius-xl);
}

/* ─── Floating feature capsules (like MiniMax's Token Plan cards) ─── */
.hero__capsule {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-radius: var(--radius-full);
  padding: 12px 24px 12px 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  z-index: 5;
  transition: transform 0.3s ease;
}

.hero__capsule:hover {
  transform: translateY(-4px);
}

.hero__capsule-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--gradient-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand-primary);
  flex-shrink: 0;
}

.hero__capsule-text {
  display: flex;
  flex-direction: column;
}

.hero__capsule-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
}

.hero__capsule-sub {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}

/* Position each capsule around the block */
.hero__capsule--1 {
  top: 40px;
  left: -20px;
}

.hero__capsule--2 {
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
}

.hero__capsule--2:hover {
  transform: translateY(calc(-50% - 4px));
}

.hero__capsule--3 {
  bottom: 40px;
  left: 60px;
}

/* ─── Dots indicator (decorative, like MiniMax) ─── */
.hero__dots {
  display: flex;
  gap: 8px;
  margin-top: var(--space-12);
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.hero__dot--active {
  width: 28px;
  border-radius: var(--radius-full);
  background: var(--text-primary);
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .hero__title {
    font-size: var(--text-5xl);
  }

  .hero__block {
    height: 320px;
  }

  .hero__product-img {
    max-width: 260px;
    max-height: 300px;
  }

  .hero__capsule {
    display: none;
  }
}

@media (max-width: 640px) {
  .hero {
    padding-top: calc(var(--navbar-height) + 40px);
    padding-bottom: 60px;
  }

  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .hero__block {
    height: 240px;
    border-radius: var(--radius-xl);
  }

  .hero__product-img {
    max-width: 200px;
    max-height: 240px;
  }

  .hero__orb--1 {
    width: 250px;
    height: 250px;
  }

  .hero__orb--2 {
    display: none;
  }
}
</style>
