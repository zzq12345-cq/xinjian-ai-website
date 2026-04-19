<template>
  <section class="features section">
    <div class="container">
      <div class="features__header">
        <div>
          <h2 class="features__section-title scroll-reveal">{{ $t('features.title') }}</h2>
          <p class="features__section-subtitle scroll-reveal">{{ $t('features.subtitle') }}</p>
        </div>
        <div class="features__nav">
          <button class="features__nav-btn" @click="scrollCards(-1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button class="features__nav-btn" @click="scrollCards(1)">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <!-- Horizontal scrolling card strip -->
      <div ref="stripRef" class="features__strip" @wheel.prevent="onStripWheel">
        <div 
          v-for="(f, i) in features" 
          :key="i" 
          class="feature-card scroll-reveal"
          :style="{ '--card-bg': f.bgGradient }"
        >
          <!-- Visual area with decorative art -->
          <div class="feature-card__visual">
            <!-- Abstract art SVGs unique to each card -->
            <div class="feature-card__art" v-html="f.artSvg"></div>
            <!-- NEW badge -->
            <span class="feature-card__badge">NEW</span>
          </div>

          <!-- Info footer -->
          <div class="feature-card__info">
            <div class="feature-card__info-top">
              <div class="feature-card__name-row">
                <span class="feature-card__name">{{ $t(f.titleKey) }}</span>
                <span class="feature-card__tag">{{ f.tag }}</span>
              </div>
              <button class="feature-card__arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
            <p class="feature-card__desc">{{ $t(f.descKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const stripRef = ref<HTMLElement | null>(null)

interface FeatureItem {
  titleKey: string
  descKey: string
  bgGradient: string
  tag: string
  artSvg: string
}

// Decorative abstract art SVGs for each card (styled like MiniMax)
const art1 = `
<svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="280" cy="80" r="120" fill="rgba(255,255,255,0.08)"/>
  <circle cx="320" cy="120" r="80" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none"/>
  <path d="M40 280 Q120 180 200 220 T380 160" stroke="rgba(255,255,255,0.2)" stroke-width="3" fill="none"/>
  <path d="M60 320 Q160 200 260 260 T420 180" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <circle cx="100" cy="100" r="40" fill="rgba(255,255,255,0.06)"/>
  <rect x="180" y="40" width="60" height="60" rx="16" fill="rgba(255,255,255,0.05)" transform="rotate(15 210 70)"/>
  <circle cx="340" cy="260" r="24" stroke="rgba(255,255,255,0.12)" stroke-width="2" fill="none"/>
  <line x1="20" y1="180" x2="100" y2="140" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
  <circle cx="60" cy="240" r="8" fill="rgba(255,255,255,0.15)"/>
</svg>`

const art2 = `
<svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="160" r="140" stroke="rgba(255,255,255,0.12)" stroke-width="2" fill="none"/>
  <circle cx="200" cy="160" r="100" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" fill="none"/>
  <circle cx="200" cy="160" r="60" fill="rgba(255,255,255,0.06)"/>
  <path d="M80 40 Q200 120 320 40" stroke="rgba(255,255,255,0.15)" stroke-width="2" fill="none"/>
  <path d="M40 280 Q200 200 360 280" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <rect x="300" y="60" width="70" height="70" rx="20" fill="rgba(255,255,255,0.05)" transform="rotate(-10 335 95)"/>
  <rect x="30" y="200" width="50" height="50" rx="14" fill="rgba(255,255,255,0.07)" transform="rotate(20 55 225)"/>
  <circle cx="350" cy="240" r="16" fill="rgba(255,255,255,0.1)"/>
  <circle cx="60" cy="80" r="12" fill="rgba(255,255,255,0.12)"/>
</svg>`

const art3 = `
<svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="300" cy="100" rx="160" ry="120" fill="rgba(255,255,255,0.06)"/>
  <path d="M0 200 Q100 100 200 180 T400 120" stroke="rgba(255,255,255,0.15)" stroke-width="3" fill="none"/>
  <path d="M0 260 Q150 160 300 240 T400 180" stroke="rgba(255,255,255,0.08)" stroke-width="2" fill="none"/>
  <circle cx="100" cy="60" r="50" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none"/>
  <circle cx="100" cy="60" r="20" fill="rgba(255,255,255,0.08)"/>
  <rect x="260" y="220" width="80" height="80" rx="24" stroke="rgba(255,255,255,0.1)" stroke-width="2" fill="none" transform="rotate(10 300 260)"/>
  <circle cx="360" cy="280" r="10" fill="rgba(255,255,255,0.15)"/>
  <line x1="180" y1="30" x2="240" y2="70" stroke="rgba(255,255,255,0.12)" stroke-width="1.5" stroke-dasharray="6 4"/>
</svg>`

const features: FeatureItem[] = [
  { 
    titleKey: 'features.f1Title', 
    descKey: 'features.f1Desc', 
    bgGradient: 'linear-gradient(135deg, #F87171 0%, #DC2626 40%, #991B1B 100%)',
    tag: 'AI 检测',
    artSvg: art1
  },
  { 
    titleKey: 'features.f2Title', 
    descKey: 'features.f2Desc', 
    bgGradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 40%, #5B21B6 100%)',
    tag: '云端同步',
    artSvg: art2
  },
  { 
    titleKey: 'features.f3Title', 
    descKey: 'features.f3Desc', 
    bgGradient: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 40%, #D97706 100%)',
    tag: '智能报告',
    artSvg: art3
  },
]

let lastWheelTime = 0

function onStripWheel(e: WheelEvent) {
  if (!stripRef.value) return
  const now = Date.now()
  if (now - lastWheelTime < 60) return
  lastWheelTime = now
  stripRef.value.scrollLeft += e.deltaY * 2
}

function scrollCards(dir: number) {
  if (!stripRef.value) return
  stripRef.value.scrollBy({ left: dir * 380, behavior: 'smooth' })
}
</script>

<style scoped>
/* Header row with title on left and nav arrows on right */
.features__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-10);
}

.features__section-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.features__section-subtitle {
  font-size: var(--text-base);
  color: var(--text-secondary);
}

.features__nav {
  display: flex;
  gap: var(--space-3);
}

.features__nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--border-light);
  background: var(--surface-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;
}

.features__nav-btn:hover {
  background: var(--surface-light);
  border-color: var(--border-medium);
}

/* Horizontal scrolling strip */
.features__strip {
  display: flex;
  gap: var(--space-5);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: var(--space-4);
  cursor: grab;
}

.features__strip::-webkit-scrollbar {
  display: none;
}

/* ─── Card ─── */
.feature-card {
  flex-shrink: 0;
  width: 340px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--card-bg);
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  scroll-snap-align: start;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.15);
}

/* Visual area (top ~65%) */
.feature-card__visual {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.feature-card__art {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-card__art :deep(svg) {
  width: 100%;
  height: 100%;
}

/* NEW badge */
.feature-card__badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--surface-white);
  color: #1A1A1A;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-full);
  letter-spacing: 0.02em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Info footer (bottom ~35%) */
.feature-card__info {
  padding: 20px 24px 24px;
}

.feature-card__info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.feature-card__name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.feature-card__name {
  font-size: var(--text-base);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feature-card__tag {
  font-size: 10px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  white-space: nowrap;
  letter-spacing: 0.3px;
  backdrop-filter: blur(4px);
}

.feature-card__arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s ease;
}

.feature-card:hover .feature-card__arrow {
  background: rgba(255,255,255,0.15);
  border-color: rgba(255,255,255,0.4);
}

.feature-card__desc {
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.75;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .features__header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .feature-card {
    width: 280px;
  }

  .feature-card__visual {
    height: 220px;
  }
}
</style>
