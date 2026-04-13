<template>
  <section class="credentials section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('credentials.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('credentials.subtitle') }}</p>
      </div>

      <!-- Stats Bar -->
      <div class="credentials__stats stagger-children">
        <div v-for="stat in stats" :key="stat.key" class="credentials__stat scroll-reveal">
          <span class="credentials__stat-value">{{ stat.value }}</span>
          <span class="credentials__stat-label">{{ $t(stat.labelKey) }}</span>
        </div>
      </div>

      <!-- Certificate Gallery -->
      <div class="credentials__gallery">
        <div class="credentials__row scroll-reveal">
          <div class="credentials__card credentials__card--wide">
            <img src="/images/credentials/business-license.jpeg" :alt="$t('credentials.license')" loading="lazy" />
            <div class="credentials__card-label">{{ $t('credentials.license') }}</div>
          </div>
          <div class="credentials__card">
            <img src="/images/credentials/patent-heart-detector.jpeg" :alt="$t('credentials.patentDesign')" loading="lazy" />
            <div class="credentials__card-label">{{ $t('credentials.patentDesign') }}</div>
          </div>
        </div>
        <div class="credentials__row credentials__row--3 scroll-reveal" style="animation-delay: 0.1s;">
          <div class="credentials__card">
            <img src="/images/credentials/copyright-heart-detection-cert.jpeg" :alt="$t('credentials.copyright1')" loading="lazy" />
            <div class="credentials__card-label">{{ $t('credentials.copyright1') }}</div>
          </div>
          <div class="credentials__card">
            <img src="/images/credentials/copyright-ml-training-cert.jpeg" :alt="$t('credentials.copyright2')" loading="lazy" />
            <div class="credentials__card-label">{{ $t('credentials.copyright2') }}</div>
          </div>
          <div class="credentials__card">
            <img src="/images/credentials/paper-ei-1-detail.jpeg" :alt="$t('credentials.paper')" loading="lazy" />
            <div class="credentials__card-label">{{ $t('credentials.paper') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { key: 'patents', value: '5', labelKey: 'credentials.patents' },
  { key: 'copyrights', value: '4', labelKey: 'credentials.copyrights' },
  { key: 'papers', value: '6', labelKey: 'credentials.papers' },
  { key: 'partners', value: '4', labelKey: 'credentials.partners' },
]
</script>

<style scoped>
/* Stats */
.credentials__stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-bottom: 60px;
}

.credentials__stat {
  text-align: center;
  padding: 32px 16px;
  background: var(--surface-light);
  transition: all var(--transition-base);
}

.credentials__stat:hover {
  background: var(--surface-white);
  box-shadow: var(--shadow-lg);
}

.credentials__stat-value {
  display: block;
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--text-primary);
  font-family: var(--font-display);
  margin-bottom: var(--space-2);
}

.credentials__stat-label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 400;
}

/* Gallery */
.credentials__gallery {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.credentials__row {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-6);
}

.credentials__row--3 {
  grid-template-columns: repeat(3, 1fr);
}

.credentials__card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--surface-white);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.credentials__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.credentials__card img {
  width: 100%;
  height: 260px;
  object-fit: contain;
  background: #fff;
  padding: 8px;
  display: block;
  transition: transform 0.4s ease;
}

.credentials__card:hover img {
  transform: scale(1.03);
}

.credentials__card-label {
  padding: 12px 16px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
  background: var(--surface-white);
}

@media (max-width: 768px) {
  .credentials__stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .credentials__row,
  .credentials__row--3 {
    grid-template-columns: 1fr;
  }

  .credentials__card img {
    height: 200px;
  }
}
</style>
