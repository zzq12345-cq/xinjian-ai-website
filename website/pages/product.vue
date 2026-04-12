<template>
  <div class="product-page">
    <!-- Hero -->
    <section class="product-hero">
      <div class="product-hero__bg"></div>
      <div class="container product-hero__content">
        <div class="product-hero__text">
          <h1 class="product-hero__title animate-fade-in-up">
            {{ $t('product.heroTitle') }}
          </h1>
          <p class="product-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
            {{ $t('product.heroSubtitle') }}
          </p>
          <p class="product-hero__desc animate-fade-in-up" style="animation-delay: 0.2s;">
            {{ $t('product.heroDesc') }}
          </p>
        </div>
        <div class="product-hero__image animate-fade-in" style="animation-delay: 0.2s;">
          <img src="/images/product-device.png" alt="HeartSound Device" class="animate-float" />
        </div>
      </div>
    </section>

    <!-- Feature Bento Grid -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.featuresTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('product.featuresSubtitle') }}</p>
        </div>
        <div class="bento-grid stagger-children">
          <div v-for="(feature, i) in features" :key="i"
               class="bento-card scroll-reveal"
               :class="`bento-card--${feature.size}`"
               :style="{ '--card-accent': feature.color }">
            <div class="bento-card__icon" :style="{ background: feature.iconBg }">
              <span v-html="feature.icon"></span>
            </div>
            <h3 class="bento-card__title">{{ $t(feature.titleKey) }}</h3>
            <p class="bento-card__desc">{{ $t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="section" style="background: var(--surface-light);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.archTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('product.archSubtitle') }}</p>
        </div>
        <div class="arch-flow stagger-children">
          <div v-for="(node, i) in archNodes" :key="i" class="arch-node scroll-reveal">
            <div class="arch-node__icon" :style="{ background: node.bg, color: node.color }">
              <span v-html="node.icon"></span>
            </div>
            <h4 class="arch-node__title">{{ $t(node.titleKey) }}</h4>
            <p class="arch-node__desc">{{ $t(node.descKey) }}</p>
            <div v-if="i < archNodes.length - 1" class="arch-node__arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2" opacity="0.4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Specs -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('product.specsTitle') }}</h2>
        </div>
        <div class="specs-grid scroll-reveal">
          <div class="specs-row" v-for="(spec, i) in specs" :key="i">
            <span class="specs-label">{{ $t(spec.labelKey) }}</span>
            <span class="specs-value">{{ spec.valueKey ? $t(spec.valueKey) : spec.value }}</span>
          </div>
        </div>
      </div>
    </section>

    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '产品介绍 - 心音智鉴 | 心鉴智能',
  meta: [{ name: 'description', content: '心音智鉴是一款基于AI的家庭级心音检测系统，集心音采集、AI分析、健康档案于一体。' }],
})

const features = [
  {
    titleKey: 'product.f1Title', descKey: 'product.f1Desc', size: 'large', color: 'var(--brand-primary)',
    iconBg: 'var(--brand-primary-50)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 12h2l1-3 2 6 1-4h2"/></svg>',
  },
  {
    titleKey: 'product.f2Title', descKey: 'product.f2Desc', size: 'small', color: '#22C55E',
    iconBg: '#F0FDF4',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22C55E" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
  },
  {
    titleKey: 'product.f3Title', descKey: 'product.f3Desc', size: 'small', color: '#3B82F6',
    iconBg: '#EFF6FF',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  },
  {
    titleKey: 'product.f4Title', descKey: 'product.f4Desc', size: 'small', color: '#8B5CF6',
    iconBg: '#F5F3FF',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  },
  {
    titleKey: 'product.f5Title', descKey: 'product.f5Desc', size: 'small', color: '#EC4899',
    iconBg: '#FDF2F8',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#EC4899" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>',
  },
  {
    titleKey: 'product.f6Title', descKey: 'product.f6Desc', size: 'large', color: 'var(--brand-warm)',
    iconBg: '#FFF7ED',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand-warm)" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  },
]

const archNodes = [
  {
    titleKey: 'product.archDevice', descKey: 'product.archDeviceDesc',
    bg: 'var(--brand-primary-50)', color: 'var(--brand-primary)',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  },
  {
    titleKey: 'product.archEdge', descKey: 'product.archEdgeDesc',
    bg: '#F0FDF4', color: '#22C55E',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></svg>',
  },
  {
    titleKey: 'product.archCloud', descKey: 'product.archCloudDesc',
    bg: '#EFF6FF', color: '#3B82F6',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  },
  {
    titleKey: 'product.archApp', descKey: 'product.archAppDesc',
    bg: '#FFF7ED', color: '#F59E0B',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  },
]

const specs = [
  { labelKey: 'product.spec1', value: '95%+' },
  { labelKey: 'product.spec2', value: '30秒' },
  { labelKey: 'product.spec3', value: '<5秒' },
  { labelKey: 'product.spec4', value: '≥30fps' },
  { labelKey: 'product.spec5', valueKey: 'product.spec5Value' },
  { labelKey: 'product.spec6', valueKey: 'product.spec6Value' },
]
</script>

<style scoped>
/* Product Hero */
.product-hero {
  position: relative;
  padding: var(--space-24) 0 var(--space-16);
  overflow: hidden;
}

.product-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--brand-primary-50) 0%, var(--surface-white) 100%);
}

.product-hero__content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

.product-hero__title {
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: var(--space-2);
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.product-hero__subtitle {
  font-size: var(--text-2xl);
  font-weight: 600;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.product-hero__desc {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.8;
}

.product-hero__image img {
  max-width: 100%;
  border-radius: var(--radius-xl);
  filter: drop-shadow(0 20px 60px rgba(8, 145, 178, 0.15));
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.bento-card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.bento-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-accent);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.bento-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.bento-card:hover::after {
  transform: scaleX(1);
}

.bento-card--large {
  grid-column: span 2;
}

.bento-card__icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.bento-card__title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.bento-card__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Architecture Flow */
.arch-flow {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-2);
}

.arch-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  max-width: 220px;
  position: relative;
}

.arch-node__icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
}

.arch-node__title {
  font-size: var(--text-base);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.arch-node__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.arch-node__arrow {
  position: absolute;
  right: -16px;
  top: 24px;
}

/* Specs */
.specs-grid {
  max-width: 680px;
  margin: 0 auto;
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.specs-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-light);
}

.specs-row:last-child {
  border-bottom: none;
}

.specs-row:nth-child(even) {
  background: var(--surface-gray);
}

.specs-label {
  font-weight: 600;
  color: var(--text-primary);
}

.specs-value {
  color: var(--brand-primary);
  font-weight: 600;
  font-family: var(--font-display);
}

@media (max-width: 768px) {
  .product-hero__content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .product-hero__image {
    order: -1;
  }

  .product-hero__title {
    font-size: var(--text-3xl);
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-card--large {
    grid-column: span 1;
  }

  .arch-flow {
    flex-direction: column;
    align-items: center;
  }

  .arch-node__arrow {
    display: none;
  }
}
</style>
