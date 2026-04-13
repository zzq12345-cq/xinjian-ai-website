<template>
  <section class="pain section" style="background: var(--surface-light);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('pain.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('pain.subtitle') }}</p>
      </div>

      <div class="pain__grid stagger-children">
        <div v-for="(item, i) in painItems" :key="i" class="pain__card scroll-reveal">
          <div class="pain__number">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="pain__content">
            <h3 class="pain__title">{{ $t(item.titleKey) }}</h3>
            <p class="pain__desc">{{ $t(item.descKey) }}</p>
            <div class="pain__solution">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span>{{ $t(item.solutionKey) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const painItems = [
  { titleKey: 'pain.pain1Title', descKey: 'pain.pain1Desc', solutionKey: 'pain.pain1Solution' },
  { titleKey: 'pain.pain2Title', descKey: 'pain.pain2Desc', solutionKey: 'pain.pain2Solution' },
  { titleKey: 'pain.pain3Title', descKey: 'pain.pain3Desc', solutionKey: 'pain.pain3Solution' },
]
</script>

<style scoped>
.pain__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.pain__card {
  background: var(--surface-white);
  padding: 48px 36px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: var(--shadow-sm);
}

.pain__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.pain__number {
  font-size: var(--text-4xl);
  font-weight: 300;
  color: var(--border-light);
  margin-bottom: var(--space-6);
  font-family: var(--font-display);
  line-height: 1;
}

.pain__title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-3);
}

.pain__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-6);
  flex: 1;
}

.pain__solution {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--brand-primary);
  font-size: var(--text-sm);
  font-weight: 500;
}

@media (max-width: 768px) {
  .pain__grid {
    grid-template-columns: 1fr;
  }
}
</style>
