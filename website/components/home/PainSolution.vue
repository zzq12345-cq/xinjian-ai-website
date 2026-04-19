<template>
  <section class="pain section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge scroll-reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          {{ $t('pain.badge') }}
        </div>
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
              <div class="pain__solution-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
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
.pain {
  background: var(--surface-light);
}

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
  border-radius: var(--radius-xl);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid var(--border-light);
}

.pain__card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-6px) scale(1.01);
  border-color: transparent;
}

.pain__number {
  font-size: 4rem;
  font-weight: 800;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: var(--space-6);
  font-family: var(--font-display);
  line-height: 1;
  opacity: 0.7;
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
  gap: var(--space-3);
  color: var(--brand-primary);
  font-size: var(--text-sm);
  font-weight: 500;
}

.pain__solution-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--gradient-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pain__solution-icon svg {
  stroke: var(--brand-primary);
}

@media (max-width: 768px) {
  .pain__grid {
    grid-template-columns: 1fr;
  }
}
</style>
