<template>
  <section class="credentials section credentials--dark">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('credentials.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('credentials.subtitle') }}</p>
      </div>

      <!-- Auto-scrolling Certificate Marquee -->
      <div class="credentials__marquee scroll-reveal">
        <div class="credentials__track">
          <div v-for="cert in allCertificates" :key="cert.img" class="credentials__card">
            <NuxtImg :src="cert.img" :alt="cert.label" loading="lazy" format="webp" />
            <div class="credentials__card-label">{{ cert.label }}</div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div v-for="cert in allCertificates" :key="cert.img + '-dup'" class="credentials__card">
            <NuxtImg :src="cert.img" :alt="cert.label" loading="lazy" format="webp" />
            <div class="credentials__card-label">{{ cert.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { allCertificates } from '~/data/certificates'
</script>

<style scoped>
/* Dark theme for credentials section */
.credentials--dark {
  background: var(--surface-dark);
}

.credentials--dark .section-title {
  color: var(--text-inverse);
}

.credentials--dark .section-subtitle {
  color: rgba(255, 255, 255, 0.6);
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
  will-change: transform;
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

.credentials__card :deep(img) {
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
  .credentials__card {
    width: 200px;
  }

  .credentials__card :deep(img) {
    height: 240px;
  }
}
</style>
