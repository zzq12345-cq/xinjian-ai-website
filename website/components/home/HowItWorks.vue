<template>
  <section class="how-it-works section" style="background: var(--surface-light);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('howItWorks.title') }}</h2>
      </div>

      <div class="how-it-works__steps stagger-children">
        <div v-for="(step, index) in steps" :key="index" class="how-it-works__step scroll-reveal">
          <div class="how-it-works__step-line">
            <div class="how-it-works__step-dot how-it-works__step-dot--active">
              {{ index + 1 }}
            </div>
            <div v-if="index < steps.length - 1" class="how-it-works__step-connector"></div>
          </div>
          <div class="how-it-works__step-content">
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

.how-it-works__step-line {
  display: flex;
  align-items: center;
  margin-bottom: var(--space-6);
  width: 100%;
  justify-content: center;
  position: relative;
}

.how-it-works__step-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid var(--border-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: var(--text-sm);
  color: var(--text-muted);
  background: var(--surface-white);
  z-index: 1;
  flex-shrink: 0;
}

.how-it-works__step-dot--active {
  border-color: var(--brand-primary);
  color: var(--brand-primary);
}

.how-it-works__step-connector {
  position: absolute;
  top: 50%;
  left: calc(50% + 24px);
  right: calc(-50% + 24px);
  height: 1px;
  background: var(--border-medium);
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

  .how-it-works__step-line {
    width: auto;
    margin-bottom: 0;
    flex-direction: column;
    align-items: center;
  }

  .how-it-works__step-connector {
    position: static;
    width: 1px;
    height: 40px;
    margin-top: var(--space-2);
    background: var(--border-medium);
  }

  .how-it-works__step-content {
    padding-top: var(--space-2);
    padding-bottom: var(--space-6);
  }

  .how-it-works__step-desc {
    padding: 0;
  }
}
</style>
