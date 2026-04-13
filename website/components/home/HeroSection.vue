<template>
  <section class="hero">
    <div class="hero__bg">
      <!-- 纯色分区背景 -->
      <div class="hero__bg-solid"></div>
      <!-- 品牌色竖条装饰 -->
      <div class="hero__accent-bar"></div>
    </div>

    <div class="container hero__content">
      <div class="hero__text">
        <h1 class="hero__title animate-fade-in-up">
          {{ $t('hero.title') }}<br />
          <span class="hero__title-highlight">{{ $t('hero.titleHighlight') }}</span>
        </h1>

        <p class="hero__subtitle animate-fade-in-up" style="animation-delay: 0.15s;">
          {{ $t('hero.subtitle') }}
        </p>

        <div class="hero__actions animate-fade-in-up" style="animation-delay: 0.3s;">
          <NuxtLink :to="localePath('/product')" class="btn btn--primary btn--lg">
            {{ $t('hero.cta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn btn--outline btn--lg">
            {{ $t('hero.ctaSecondary') }}
          </NuxtLink>
        </div>
      </div>

      <div class="hero__image animate-fade-in" style="animation-delay: 0.2s;">
        <div class="hero__image-wrapper">
          <!-- 心跳脉搏波纹 -->
          <div class="hero__pulse-ring hero__pulse-ring--1"></div>
          <div class="hero__pulse-ring hero__pulse-ring--2"></div>
          <NuxtImg src="/images/credentials/product-render-front.jpeg" alt="心音智鉴设备" format="webp" />
        </div>
      </div>
    </div>

    <!-- Family scene banner -->
    <div class="hero__scene">
      <div class="container">
        <div class="hero__scene-inner scroll-reveal">
          <NuxtImg src="/images/family-health.png" alt="家庭健康守护" class="hero__scene-img" format="webp" />
          <div class="hero__scene-overlay">
            <p class="hero__scene-text">{{ $t('hero.ctaSecondary') }} — {{ $t('pain.subtitle') }}</p>
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
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  height: 100%;
}

/* 左白右浅灰 纯色分区 — 不是渐变 */
.hero__bg-solid {
  position: absolute;
  inset: 0;
  background: #F5F5F5;
}

.hero__bg-solid::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #FFFFFF;
}

/* 品牌红竖条 — 左侧边缘装饰线 */
.hero__accent-bar {
  position: absolute;
  top: 15%;
  left: 0;
  width: 4px;
  height: 120px;
  background: var(--brand-primary);
}

.hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}

.hero__title {
  font-size: var(--text-5xl);
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.hero__title-highlight {
  color: var(--brand-primary);
}

.hero__subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-10);
  max-width: 480px;
  font-weight: 400;
}

.hero__actions {
  display: flex;
  gap: var(--space-4);
}

/* 产品图区域 */
.hero__image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image :deep(img) {
  max-width: 100%;
  max-height: 460px;
  object-fit: contain;
  border-radius: var(--radius-lg);
  position: relative;
  z-index: 1;
}

/* 心跳脉搏波纹 — 纯色边框，不是渐变 */
.hero__pulse-ring {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  border: 1px solid rgba(199, 0, 11, 0.06);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse-expand 4s ease-out infinite;
}

.hero__pulse-ring--2 {
  animation-delay: 2s;
}

@keyframes pulse-expand {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
  }
}

/* Family Scene Banner */
.hero__scene {
  position: relative;
  z-index: 1;
  padding: 0 0 80px;
  background: #FFFFFF;
}

.hero__scene-inner {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.hero__scene-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
}

.hero__scene-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
}

.hero__scene-text {
  color: white;
  font-size: var(--text-lg);
  font-weight: 400;
  max-width: 600px;
}

@media (max-width: 1024px) {
  .hero__bg-solid::before {
    width: 100%;
  }

  .hero__accent-bar {
    display: none;
  }

  .hero__content {
    grid-template-columns: 1fr;
    gap: var(--space-10);
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
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

  .hero__image :deep(img) {
    max-height: 320px;
  }

  .hero__scene-img {
    height: 240px;
  }

  .hero__pulse-ring {
    width: 280px;
    height: 280px;
  }
}

@media (max-width: 640px) {
  .hero__title {
    font-size: var(--text-3xl);
  }

  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .hero__pulse-ring {
    display: none;
  }
}
</style>
