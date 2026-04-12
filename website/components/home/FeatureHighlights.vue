<template>
  <section class="features section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge scroll-reveal">✨ {{ $t('features.badge') }}</div>
        <h2 class="section-title scroll-reveal">{{ $t('features.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('features.subtitle') }}</p>
      </div>

      <div class="features__grid stagger-children">
        <div class="features__card scroll-reveal">
          <div class="features__icon features__icon--primary">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
            </svg>
          </div>
          <h3 class="features__title">{{ $t('features.f1Title') }}</h3>
          <p class="features__desc">{{ $t('features.f1Desc') }}</p>
          <div class="features__tag">Edge Computing</div>
        </div>

        <div class="features__card scroll-reveal">
          <div class="features__icon features__icon--accent">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
          </div>
          <h3 class="features__title">{{ $t('features.f2Title') }}</h3>
          <p class="features__desc">{{ $t('features.f2Desc') }}</p>
          <div class="features__tag">WeChat Mini Program</div>
        </div>

        <div class="features__card scroll-reveal">
          <div class="features__icon features__icon--warm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h3 class="features__title">{{ $t('features.f3Title') }}</h3>
          <p class="features__desc">{{ $t('features.f3Desc') }}</p>
          <div class="features__tag">Cloud Archive</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.features__card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-10) var(--space-8);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
  position: relative;
  overflow: hidden;
}

.features__card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent));
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.features__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-6px);
}

.features__card:hover::before {
  transform: scaleX(1);
}

.features__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-6);
}

.features__icon--primary {
  background: var(--brand-primary-50);
  color: var(--brand-primary);
}

.features__icon--accent {
  background: #F0FDFA;
  color: var(--brand-accent);
}

.features__icon--warm {
  background: #FFF7ED;
  color: var(--brand-warm);
}

.features__title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.features__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.features__tag {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--surface-gray);
  color: var(--text-muted);
  font-size: var(--text-xs);
  border-radius: var(--radius-full);
  font-weight: 500;
  letter-spacing: 0.02em;
}

@media (max-width: 768px) {
  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
