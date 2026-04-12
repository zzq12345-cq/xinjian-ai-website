<template>
  <section class="pain section">
    <div class="container">
      <div class="section-header">
        <div class="section-badge scroll-reveal">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22c5.5-3 9-7.5 9-12S17.5 2 12 2 3 5.5 3 10s3.5 9 9 12z" />
          </svg>
          {{ $t('pain.badge') }}
        </div>
        <h2 class="section-title scroll-reveal">{{ $t('pain.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('pain.subtitle') }}</p>
      </div>

      <div class="pain__grid stagger-children">
        <!-- Pain Point 1 -->
        <div class="pain__card scroll-reveal">
          <div class="pain__problem">
            <div class="pain__emoji">😟</div>
            <h3 class="pain__problem-title">{{ $t('pain.pain1Title') }}</h3>
            <p class="pain__problem-desc">{{ $t('pain.pain1Desc') }}</p>
          </div>
          <div class="pain__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <div class="pain__solution">
            <div class="pain__solution-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="pain__solution-text">{{ $t('pain.pain1Solution') }}</span>
          </div>
        </div>

        <!-- Pain Point 2 -->
        <div class="pain__card scroll-reveal">
          <div class="pain__problem">
            <div class="pain__emoji">📱</div>
            <h3 class="pain__problem-title">{{ $t('pain.pain2Title') }}</h3>
            <p class="pain__problem-desc">{{ $t('pain.pain2Desc') }}</p>
          </div>
          <div class="pain__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <div class="pain__solution">
            <div class="pain__solution-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="pain__solution-text">{{ $t('pain.pain2Solution') }}</span>
          </div>
        </div>

        <!-- Pain Point 3 -->
        <div class="pain__card scroll-reveal">
          <div class="pain__problem">
            <div class="pain__emoji">🔋</div>
            <h3 class="pain__problem-title">{{ $t('pain.pain3Title') }}</h3>
            <p class="pain__problem-desc">{{ $t('pain.pain3Desc') }}</p>
          </div>
          <div class="pain__arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
          <div class="pain__solution">
            <div class="pain__solution-check">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="pain__solution-text">{{ $t('pain.pain3Solution') }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pain {
  background: var(--surface-light);
}

.pain__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.pain__card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  border: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.pain__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.pain__emoji {
  font-size: 3rem;
  margin-bottom: var(--space-2);
}

.pain__problem-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.pain__problem-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
}

.pain__arrow {
  padding: var(--space-2);
  opacity: 0.5;
}

.pain__solution {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-5);
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  border-radius: var(--radius-full);
  color: white;
}

.pain__solution-check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pain__solution-text {
  font-weight: 600;
  font-size: var(--text-sm);
}

@media (max-width: 768px) {
  .pain__grid {
    grid-template-columns: 1fr;
  }
}
</style>
