<template>
  <section class="features section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('features.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('features.subtitle') }}</p>
      </div>

      <!-- Feature cards with image -->
      <div class="features__showcase scroll-reveal">
        <div class="features__showcase-img">
          <img src="/images/miniprogram-mockup.png" alt="小程序界面" />
        </div>
        <div class="features__showcase-content">
          <h3 class="features__showcase-title">{{ $t('features.f2Title') }}</h3>
          <p class="features__showcase-desc">{{ $t('features.f2Desc') }}</p>
          <NuxtLink :to="localePath('/product')" class="link-arrow">
            了解更多
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="features__grid stagger-children">
        <div v-for="(f, i) in features" :key="i" class="features__card scroll-reveal">
          <div class="features__icon" :style="{ color: f.color }">
            <component :is="f.icon" :size="36" />
          </div>
          <h3 class="features__title">{{ $t(f.titleKey) }}</h3>
          <p class="features__desc">{{ $t(f.descKey) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconHeartbeat from '~/components/icons/IconHeartbeat.vue'
import IconReport from '~/components/icons/IconReport.vue'
import type { Component } from 'vue'

const localePath = useLocalePath()

interface FeatureItem {
  titleKey: string
  descKey: string
  color: string
  icon: Component
}

const features: FeatureItem[] = [
  { titleKey: 'features.f1Title', descKey: 'features.f1Desc', color: 'var(--brand-primary)', icon: IconHeartbeat },
  { titleKey: 'features.f3Title', descKey: 'features.f3Desc', color: 'var(--brand-primary)', icon: IconReport },
]
</script>

<style scoped>
/* Showcase (大图 + 文字 华为风格) */
.features__showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
  margin-bottom: 80px;
  background: var(--surface-light);
  padding: 60px;
  border-radius: var(--radius-md);
}

.features__showcase-img img {
  max-width: 100%;
  border-radius: var(--radius-md);
}

.features__showcase-title {
  font-size: var(--text-3xl);
  font-weight: 500;
  margin-bottom: var(--space-4);
}

.features__showcase-desc {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

/* Grid cards */
.features__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
}

.features__card {
  padding: 48px 36px;
  background: var(--surface-light);
  transition: all var(--transition-base);
}

.features__card:hover {
  background: var(--surface-white);
  box-shadow: var(--shadow-lg);
}

.features__icon {
  margin-bottom: var(--space-6);
}

.features__title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.features__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.8;
}

@media (max-width: 768px) {
  .features__showcase {
    grid-template-columns: 1fr;
    padding: var(--space-6);
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
