<template>
  <div class="product-page">
    <!-- Hero -->
    <section class="product-hero">
      <div class="container product-hero__content">
        <div class="product-hero__text">
          <h1 class="product-hero__title animate-fade-in-up">{{ $t('product.heroTitle') }}</h1>
          <p class="product-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
            {{ $t('product.heroSubtitle') }}
          </p>
          <p class="product-hero__desc animate-fade-in-up" style="animation-delay: 0.2s;">
            {{ $t('product.heroDesc') }}
          </p>
        </div>
        <div class="product-hero__image animate-fade-in" style="animation-delay: 0.15s;">
          <NuxtImg src="/images/credentials/product-render-front.jpeg" alt="HeartSound Device" format="webp" />
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.featuresTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('product.featuresSubtitle') }}</p>
        </div>
        <div class="product-features stagger-children">
          <div v-for="(f, i) in features" :key="i" class="product-feature scroll-reveal">
            <div class="product-feature__icon" :style="{ color: f.color }">
              <component :is="f.icon" />
            </div>
            <h3 class="product-feature__title">{{ $t(f.titleKey) }}</h3>
            <p class="product-feature__desc">{{ $t(f.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="section" style="background: var(--surface-light);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.archTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('product.archSubtitle') }}</p>
        </div>
        <div class="arch-flow stagger-children">
          <div v-for="(node, i) in archNodes" :key="i" class="arch-node scroll-reveal">
            <div class="arch-node__step">{{ String(i + 1).padStart(2, '0') }}</div>
            <h4 class="arch-node__title">{{ $t(node.titleKey) }}</h4>
            <p class="arch-node__desc">{{ $t(node.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Gallery -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.galleryTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('product.gallerySubtitle') }}</p>
        </div>
        <div class="product-gallery stagger-children">
          <div class="product-gallery__main scroll-reveal">
            <NuxtImg src="/images/credentials/product-render-front.jpeg" alt="产品正面渲染图" format="webp" />
          </div>
          <div class="product-gallery__side">
            <div class="product-gallery__item scroll-reveal">
              <NuxtImg src="/images/credentials/product-render-angle.jpeg" alt="产品电路板细节" format="webp" />
            </div>
            <div class="product-gallery__item scroll-reveal" style="animation-delay: 0.1s;">
              <NuxtImg src="/images/credentials/product-render-banner.jpeg" alt="产品横幅渲染" format="webp" />
            </div>
          </div>
        </div>
        <div class="product-gallery__data scroll-reveal">
          <div class="product-gallery__data-item">
            <NuxtImg src="/images/credentials/experiment-data-1.jpeg" alt="实验数据1" format="webp" />
            <p>{{ $t('product.dataCaption1') }}</p>
          </div>
          <div class="product-gallery__data-item">
            <NuxtImg src="/images/credentials/experiment-data-2.jpeg" alt="实验数据2" format="webp" />
            <p>{{ $t('product.dataCaption2') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specs -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.specsTitle') }}</h2>
        </div>
        <div class="specs-table scroll-reveal">
          <div class="specs-row" v-for="(spec, i) in specs" :key="i">
            <span class="specs-label">{{ $t(spec.labelKey) }}</span>
            <span class="specs-value">{{ spec.valueKey ? $t(spec.valueKey) : spec.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
import IconHeartbeat from '~/components/icons/IconHeartbeat.vue'
import IconEye from '~/components/icons/IconEye.vue'
import IconLayers from '~/components/icons/IconLayers.vue'
import IconChat from '~/components/icons/IconChat.vue'
import IconMic from '~/components/icons/IconMic.vue'
import IconUsers from '~/components/icons/IconUsers.vue'
import type { Component } from 'vue'

useHead({
  title: '产品介绍 - 心音智鉴 | 心鉴智能',
  meta: [{ name: 'description', content: '心音智鉴是一款基于AI的家庭级心音检测系统，集心音采集、AI分析、健康档案于一体。' }],
})

interface FeatureItem {
  titleKey: string
  descKey: string
  color: string
  icon: Component
}

const features: FeatureItem[] = [
  { titleKey: 'product.f1Title', descKey: 'product.f1Desc', color: 'var(--brand-primary)', icon: IconHeartbeat },
  { titleKey: 'product.f2Title', descKey: 'product.f2Desc', color: 'var(--text-primary)', icon: IconEye },
  { titleKey: 'product.f3Title', descKey: 'product.f3Desc', color: 'var(--text-primary)', icon: IconLayers },
  { titleKey: 'product.f4Title', descKey: 'product.f4Desc', color: 'var(--text-primary)', icon: IconChat },
  { titleKey: 'product.f5Title', descKey: 'product.f5Desc', color: 'var(--text-primary)', icon: IconMic },
  { titleKey: 'product.f6Title', descKey: 'product.f6Desc', color: 'var(--text-primary)', icon: IconUsers },
]

const archNodes = [
  { titleKey: 'product.archDevice', descKey: 'product.archDeviceDesc' },
  { titleKey: 'product.archEdge', descKey: 'product.archEdgeDesc' },
  { titleKey: 'product.archCloud', descKey: 'product.archCloudDesc' },
  { titleKey: 'product.archApp', descKey: 'product.archAppDesc' },
]

const specs = [
  { labelKey: 'product.spec1', value: '95%+' },
  { labelKey: 'product.spec2', value: '30秒' },
  { labelKey: 'product.spec3', value: '<5秒' },
  { labelKey: 'product.spec4', value: '≥30fps' },
  { labelKey: 'product.spec5', valueKey: 'product.spec5Value' },
  { labelKey: 'product.spec6', valueKey: 'product.spec6Value' },
]
</script>

<style scoped>
/* Hero */
.product-hero {
  padding: 120px 0 80px;
  background: var(--surface-light);
}

.product-hero__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.product-hero__title {
  font-size: var(--text-5xl);
  font-weight: 500;
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.product-hero__subtitle {
  font-size: var(--text-xl);
  font-weight: 400;
  margin-bottom: var(--space-4);
  color: var(--text-secondary);
}

.product-hero__desc {
  font-size: var(--text-base);
  color: var(--text-muted);
  line-height: 1.8;
}

.product-hero__image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
}

/* Features */
.product-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.product-feature {
  padding: 40px 32px;
  background: var(--surface-light);
  transition: all var(--transition-base);
}

.product-feature:hover {
  background: var(--surface-white);
  box-shadow: var(--shadow-lg);
}

.product-feature__icon {
  margin-bottom: var(--space-4);
}

.product-feature__title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.product-feature__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Arch Flow */
.arch-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.arch-node {
  text-align: center;
  padding: 40px 24px;
  background: var(--surface-white);
}

.arch-node__step {
  font-size: var(--text-3xl);
  font-weight: 300;
  color: var(--border-medium);
  margin-bottom: var(--space-4);
  font-family: var(--font-display);
}

.arch-node__title {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.arch-node__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Specs */
.specs-table {
  max-width: 680px;
  margin: 0 auto;
}

.specs-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) 0;
  border-bottom: 1px solid var(--border-light);
}

.specs-row:last-child {
  border-bottom: none;
}

.specs-label {
  font-weight: 500;
  color: var(--text-primary);
}

.specs-value {
  color: var(--text-secondary);
  font-family: var(--font-display);
}

/* Product Gallery */
.product-gallery {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-6);
  margin-bottom: 48px;
}

.product-gallery__main {
  border-radius: var(--radius-md);
  overflow: hidden;
}

.product-gallery__main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
  transition: transform 0.4s ease;
}

.product-gallery__main:hover img {
  transform: scale(1.02);
}

.product-gallery__side {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.product-gallery__item {
  border-radius: var(--radius-md);
  overflow: hidden;
  flex: 1;
}

.product-gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--radius-md);
  transition: transform 0.4s ease;
}

.product-gallery__item:hover img {
  transform: scale(1.03);
}

.product-gallery__data {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-6);
}

.product-gallery__data-item {
  background: var(--surface-light);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.product-gallery__data-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-gallery__data-item p {
  padding: 12px 16px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-align: center;
  font-weight: 500;
}

@media (max-width: 768px) {
  .product-hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .product-hero__image { order: -1; }
  .product-hero__title { font-size: var(--text-3xl); }
  .product-features { grid-template-columns: 1fr; }
  .arch-flow { grid-template-columns: repeat(2, 1fr); }
  .product-gallery { grid-template-columns: 1fr; }
  .product-gallery__data { grid-template-columns: 1fr; }
}
</style>
