<template>
  <section class="trust-bar" ref="barRef">
    <div class="container">
      <div class="trust-bar__grid">
        <div class="trust-bar__item">
          <span class="trust-bar__value">{{ accuracyCount }}<span class="trust-bar__unit">%+</span></span>
          <span class="trust-bar__label">{{ $t('trust.accuracy') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
        <div class="trust-bar__item">
          <span class="trust-bar__value">{{ detectionCount }}<span class="trust-bar__unit">{{ $t('trust.detectionUnit') }}</span></span>
          <span class="trust-bar__label">{{ $t('trust.detection') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
        <div class="trust-bar__item">
          <span class="trust-bar__value trust-bar__value--text">{{ $t('trust.privacyDesc') }}</span>
          <span class="trust-bar__label">{{ $t('trust.privacy') }}</span>
        </div>
        <div class="trust-bar__divider"></div>
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
  background: var(--surface-light);
  padding: 72px 0;
  position: relative;
  overflow: hidden;
}

.trust-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 1200px;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--border-light) 50%, transparent 100%);
  pointer-events: none;
}

.trust-bar__grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-10);
}

.trust-bar__divider {
  width: 1px;
  height: 48px;
  background: var(--border-light);
  flex-shrink: 0;
}

.trust-bar__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: 0 var(--space-8);
}

.trust-bar__value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.trust-bar__value--text {
  font-size: var(--text-2xl);
  -webkit-text-fill-color: unset;
  background: none;
  color: var(--text-primary);
}

.trust-bar__unit {
  font-size: var(--text-xl);
  font-weight: 400;
  -webkit-text-fill-color: var(--text-muted);
}

.trust-bar__label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.02em;
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
    width: 45%;
    padding: var(--space-4) 0;
  }

  .trust-bar__value {
    font-size: 2.25rem;
  }
}
</style>
