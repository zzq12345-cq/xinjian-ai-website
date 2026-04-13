<template>
  <section class="trust-bar" ref="barRef">
    <div class="container">
      <div class="trust-bar__grid">
        <div class="trust-bar__item">
          <span class="trust-bar__value">{{ accuracyCount }}<span class="trust-bar__unit">%+</span></span>
          <span class="trust-bar__label">{{ $t('trust.accuracy') }}</span>
        </div>
        <div class="trust-bar__item">
          <span class="trust-bar__value">{{ detectionCount }}<span class="trust-bar__unit">{{ $t('trust.detectionUnit') }}</span></span>
          <span class="trust-bar__label">{{ $t('trust.detection') }}</span>
        </div>
        <div class="trust-bar__item">
          <span class="trust-bar__value trust-bar__value--text">{{ $t('trust.privacyDesc') }}</span>
          <span class="trust-bar__label">{{ $t('trust.privacy') }}</span>
        </div>
        <div class="trust-bar__item">
          <span class="trust-bar__value">{{ teamCount }}<span class="trust-bar__unit">{{ $t('trust.teamUnit') }}</span></span>
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
  if (barRef.value) observer.observe(barRef.value)
})
</script>

<style scoped>
.trust-bar {
  background: var(--surface-white);
  padding: 80px 0;
  border-bottom: 1px solid var(--border-light);
}

.trust-bar__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-10);
  text-align: center;
}

.trust-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.trust-bar__value {
  font-size: 2.75rem;
  font-weight: 500;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
}

.trust-bar__value--text {
  font-size: var(--text-2xl);
}

.trust-bar__unit {
  font-size: var(--text-xl);
  font-weight: 400;
  color: var(--text-secondary);
}

.trust-bar__label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 400;
}

@media (max-width: 768px) {
  .trust-bar__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-10);
  }
}
</style>
