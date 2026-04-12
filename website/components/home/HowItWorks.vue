<template>
  <section class="how-it-works section" id="how-it-works">
    <div class="container">
      <div class="section-header">
        <div class="section-badge scroll-reveal">🔄 {{ $t('howItWorks.badge') }}</div>
        <h2 class="section-title scroll-reveal">{{ $t('howItWorks.title') }}</h2>
      </div>

      <div class="how-it-works__steps stagger-children">
        <div v-for="(step, index) in steps" :key="index" class="how-it-works__step scroll-reveal">
          <div class="how-it-works__step-number">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="how-it-works__step-icon" :style="{ background: step.bg }">
            <span v-html="step.icon"></span>
          </div>
          <h3 class="how-it-works__step-title">{{ $t(step.titleKey) }}</h3>
          <p class="how-it-works__step-desc">{{ $t(step.descKey) }}</p>

          <!-- Connector Line -->
          <div v-if="index < steps.length - 1" class="how-it-works__connector">
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
              <path d="M0 6h30" stroke="var(--brand-primary)" stroke-width="2" stroke-dasharray="4 4" />
              <path d="M28 1l6 5-6 5" stroke="var(--brand-primary)" stroke-width="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    titleKey: 'howItWorks.step1Title',
    descKey: 'howItWorks.step1Desc',
    bg: 'var(--brand-primary-50)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h10v10H7z" fill="var(--brand-primary)" opacity="0.2"/></svg>',
  },
  {
    titleKey: 'howItWorks.step2Title',
    descKey: 'howItWorks.step2Desc',
    bg: '#F0FDF4',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2"><path d="M12 4.5c-1.7-1.7-4.4-1.7-6.1 0s-1.7 4.4 0 6.1L12 17l6.1-6.4c1.7-1.7 1.7-4.4 0-6.1s-4.4-1.7-6.1 0z"/></svg>',
  },
  {
    titleKey: 'howItWorks.step3Title',
    descKey: 'howItWorks.step3Desc',
    bg: '#EFF6FF',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
  {
    titleKey: 'howItWorks.step4Title',
    descKey: 'howItWorks.step4Desc',
    bg: '#FFF7ED',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>',
  },
]
</script>

<style scoped>
.how-it-works {
  background: var(--surface-white);
}

.how-it-works__steps {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  position: relative;
}

.how-it-works__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 240px;
  position: relative;
}

.how-it-works__step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--brand-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-sm);
  margin-bottom: var(--space-4);
}

.how-it-works__step-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.how-it-works__step-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.how-it-works__step-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  padding: 0 var(--space-2);
}

.how-it-works__connector {
  position: absolute;
  right: -20px;
  top: 80px;
  z-index: 1;
}

@media (max-width: 768px) {
  .how-it-works__steps {
    flex-direction: column;
    align-items: center;
    gap: var(--space-8);
  }

  .how-it-works__connector {
    display: none;
  }

  .how-it-works__step {
    max-width: 100%;
  }
}
</style>
