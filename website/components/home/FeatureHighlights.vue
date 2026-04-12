<template>
  <section class="features section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('features.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features__grid stagger-children">
        <div v-for="(f, i) in features" :key="i" class="features__card scroll-reveal">
          <div class="features__icon" :style="{ color: f.color }">
            <span v-html="f.icon"></span>
          </div>
          <h3 class="features__title">{{ $t(f.titleKey) }}</h3>
          <p class="features__desc">{{ $t(f.descKey) }}</p>
          <NuxtLink :to="localePath('/product')" class="link-arrow">
            了解更多
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const features = [
  {
    titleKey: 'features.f1Title', descKey: 'features.f1Desc', color: 'var(--brand-primary)',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h2l1-3 2 6 1-4h2"/></svg>',
  },
  {
    titleKey: 'features.f2Title', descKey: 'features.f2Desc', color: 'var(--brand-primary)',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  },
  {
    titleKey: 'features.f3Title', descKey: 'features.f3Desc', color: 'var(--brand-primary)',
    icon: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
  },
]
</script>

<style scoped>
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  margin-bottom: var(--space-6);
}

@media (max-width: 768px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
