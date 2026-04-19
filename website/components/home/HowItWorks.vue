<template>
  <section class="how-it-works section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge scroll-reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {{ $t('howItWorks.badge') }}
        </div>
        <h2 class="section-title scroll-reveal">{{ $t('howItWorks.title') }}</h2>
      </div>

      <div class="how-it-works__steps stagger-children">
        <div v-for="(step, index) in steps" :key="index" class="how-it-works__step scroll-reveal">
          <div class="how-it-works__step-header">
            <div class="how-it-works__step-num">
              {{ index + 1 }}
            </div>
            <div v-if="index < steps.length - 1" class="how-it-works__step-connector"></div>
          </div>
          <div class="how-it-works__step-body">
            <h3 class="how-it-works__step-title">{{ $t(step.titleKey) }}</h3>
            <p class="how-it-works__step-desc">{{ $t(step.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  { titleKey: 'howItWorks.step1Title', descKey: 'howItWorks.step1Desc' },
  { titleKey: 'howItWorks.step2Title', descKey: 'howItWorks.step2Desc' },
  { titleKey: 'howItWorks.step3Title', descKey: 'howItWorks.step3Desc' },
  { titleKey: 'howItWorks.step4Title', descKey: 'howItWorks.step4Desc' },
]
</script>

<style scoped>
.how-it-works {
  background: var(--surface-light);
}

.how-it-works__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.how-it-works__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.how-it-works__step-header {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-8);
  width: 100%;
  justify-content: center;
  position: relative;
}

.how-it-works__step-num {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--gradient-brand);
  color: var(--text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--text-lg);
  z-index: 1;
  flex-shrink: 0;
  box-shadow: var(--shadow-brand);
}

.how-it-works__step-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 30px);
  right: calc(-50% + 30px);
  height: 2px;
  background: linear-gradient(90deg, var(--brand-primary) 0%, rgba(199, 0, 11, 0.1) 100%);
  border-radius: 1px;
}

.how-it-works__step-title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.how-it-works__step-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  padding: 0 var(--space-4);
}

@media (max-width: 768px) {
  .how-it-works__steps {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .how-it-works__step {
    flex-direction: row;
    text-align: left;
    gap: var(--space-5);
    align-items: flex-start;
  }

  .how-it-works__step-header {
    width: auto;
    margin-bottom: 0;
    flex-direction: column;
    align-items: center;
  }

  .how-it-works__step-connector {
    position: static;
    width: 2px;
    height: 40px;
    margin-top: var(--space-2);
    background: linear-gradient(180deg, var(--brand-primary) 0%, rgba(199, 0, 11, 0.1) 100%);
  }

  .how-it-works__step-body {
    padding-top: var(--space-3);
    padding-bottom: var(--space-6);
  }

  .how-it-works__step-desc {
    padding: 0;
  }
}
</style>
