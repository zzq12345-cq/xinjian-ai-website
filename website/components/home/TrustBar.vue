<template>
  <section class="trust-bar">
    <div class="container">
      <div class="trust-bar__grid">
        <div class="trust-bar__item scroll-reveal" ref="barRef">
          <span class="trust-bar__value">
            <span class="count-up">{{ accuracyCount }}</span><span class="trust-bar__unit">%+</span>
          </span>
          <span class="trust-bar__label">{{ $t('trust.accuracy') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
        <div class="trust-bar__item scroll-reveal">
          <span class="trust-bar__value">
            <span class="count-up">{{ detectionCount }}</span><span class="trust-bar__unit">{{ $t('trust.detectionUnit') }}</span>
          </span>
          <span class="trust-bar__label">{{ $t('trust.detection') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
        <div class="trust-bar__item scroll-reveal">
          <span class="trust-bar__value trust-bar__value--text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </span>
          <span class="trust-bar__label">{{ $t('trust.privacyDesc') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
        <div class="trust-bar__item scroll-reveal">
          <span class="trust-bar__value">
            <span class="count-up">{{ teamCount }}</span><span class="trust-bar__unit">{{ $t('trust.teamUnit') }}</span>
          </span>
          <span class="trust-bar__label">{{ $t('trust.team') }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const barRef = ref<HTMLElement | null>(null)

const accuracy = ref(95)
const detection = ref(30)
const teamSize = ref(15)

const { current: accuracyCount, animate: animateAccuracy } = useCountUp(accuracy)
const { current: detectionCount, animate: animateDetection } = useCountUp(detection, 1500)
const { current: teamCount, animate: animateTeam } = useCountUp(teamSize, 1500)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        animateAccuracy()
        animateDetection()
        animateTeam()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  if (barRef.value) {
    observer.observe(barRef.value)
  }
})
</script>

<style scoped>
.trust-bar {
  background: var(--surface-white);
  border-top: 1px solid var(--border-light);
  border-bottom: 1px solid var(--border-light);
  padding: var(--space-10) 0;
}

.trust-bar__grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-10);
}

.trust-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  text-align: center;
}

.trust-bar__value {
  display: flex;
  align-items: baseline;
  gap: 2px;
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--brand-primary);
  font-family: var(--font-display);
}

.trust-bar__value--text {
  font-size: var(--text-2xl);
}

.trust-bar__unit {
  font-size: var(--text-lg);
  font-weight: 600;
}

.trust-bar__label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

.trust-bar__divider {
  width: 1px;
  height: 40px;
  background: var(--border-light);
}

@media (max-width: 768px) {
  .trust-bar__grid {
    flex-wrap: wrap;
    gap: var(--space-6);
  }

  .trust-bar__divider {
    display: none;
  }

  .trust-bar__item {
    flex: 1;
    min-width: 120px;
  }
}
</style>
