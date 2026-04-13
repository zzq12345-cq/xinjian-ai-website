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

      <!-- Auto-scrolling Certificate Marquee -->
      <div class="credentials__marquee scroll-reveal">
        <div class="credentials__track">
          <div v-for="cert in allCertificates" :key="cert.img" class="credentials__card">
            <img :src="cert.img" :alt="cert.label" loading="lazy" />
            <div class="credentials__card-label">{{ cert.label }}</div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="cert in allCertificates" :key="cert.img + '-dup'" class="credentials__card">
            <img :src="cert.img" :alt="cert.label" loading="lazy" />
            <div class="credentials__card-label">{{ cert.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { allCertificates } from '~/data/certificates'

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

/* Marquee */
.credentials__marquee {
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
}

.credentials__track {
  display: flex;
  gap: 20px;
  animation: credentials-scroll 55s linear infinite;
  width: max-content;
}

.credentials__marquee:hover .credentials__track {
  animation-play-state: paused;
}

@keyframes credentials-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.credentials__card {
  flex-shrink: 0;
  width: 240px;
  background: var(--surface-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.credentials__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.credentials__card img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  background: #fff;
  padding: 10px;
}

.credentials__card-label {
  padding: 10px 14px;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
  border-top: 1px solid var(--border-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .credentials__stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .credentials__card {
    width: 200px;
  }

  .credentials__card img {
    height: 240px;
  }
}
</style>
