<template>
  <section class="credentials section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title scroll-reveal">{{ $t('credentials.title') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('credentials.subtitle') }}</p>
      </div>

      <!-- Rotary Slider -->
      <div 
        ref="sliderRef"
        class="rotary-slider scroll-reveal"
        @wheel.prevent="onWheel"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
        @touchstart.passive="onTouchStart"
        @touchmove.prevent="onTouchMove"
        @touchend="onTouchEnd"
      >
        <!-- Arrow Left -->
        <button class="rotary-slider__nav rotary-slider__nav--prev" @click="prevSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <!-- Cards Container -->
        <div class="rotary-slider__container">
          <div class="rotary-slider__anchor">
            <div 
              v-for="(cert, index) in allCertificates" 
              :key="cert.img" 
              class="rotary-card"
              :class="{ 'is-active': index === currentIndex }"
              :style="getCardStyle(index)"
              @click="setSlide(index)"
            >
              <div class="rotary-card__inner">
                <NuxtImg :src="cert.img" :alt="cert.label" loading="lazy" format="webp" />
                <div class="rotary-card__label">{{ cert.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Arrow Right -->
        <button class="rotary-slider__nav rotary-slider__nav--next" @click="nextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <!-- Scroll hint -->
        <div v-if="!hasInteracted" class="rotary-slider__hint">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M12 18v2M8 22h8" />
            <path d="M12 6v3" opacity="0.5" />
          </svg>
          <span>滑动滚轮浏览</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { allCertificates } from '~/data/certificates'

const sliderRef = ref<HTMLElement | null>(null)
const currentIndex = ref(Math.floor(allCertificates.length / 2))
const isHovering = ref(false)
const hasInteracted = ref(false)

// Throttle wheel events
let lastWheelTime = 0
const WHEEL_THROTTLE = 300

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = allCertificates.length - 1
  }
  hasInteracted.value = true
}

function nextSlide() {
  if (currentIndex.value < allCertificates.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
  hasInteracted.value = true
}

function setSlide(index: number) {
  currentIndex.value = index
  hasInteracted.value = true
}

// Mouse wheel handler — MiniMax-style interaction
function onWheel(e: WheelEvent) {
  const now = Date.now()
  if (now - lastWheelTime < WHEEL_THROTTLE) return
  lastWheelTime = now

  if (e.deltaY > 0 || e.deltaX > 0) {
    nextSlide()
  } else {
    prevSlide()
  }
}

// Touch/drag support for mobile
let touchStartX = 0

function onTouchStart(e: TouchEvent) {
  touchStartX = e.touches[0].clientX
}

function onTouchMove(_e: TouchEvent) {
  // handled by touchend
}

function onTouchEnd(e: TouchEvent) {
  const touchEndX = e.changedTouches[0].clientX
  const diffX = touchStartX - touchEndX
  
  if (Math.abs(diffX) > 40) {
    if (diffX > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

function getCardStyle(index: number) {
  const diff = index - currentIndex.value
  
  const rotateDeg = diff * 12
  const translateX = diff * 130
  const translateY = Math.abs(diff) * 30
  const scale = Math.max(0.7, 1 - Math.abs(diff) * 0.12)
  const zIndex = 50 - Math.abs(diff)
  const opacity = Math.abs(diff) > 3 ? 0 : Math.max(0.3, 1 - Math.abs(diff) * 0.25)
  const blur = Math.abs(diff) >= 2 ? `blur(${Math.abs(diff) * 1.5}px)` : 'none'
  
  return {
    transform: `translate(-50%, -50%) translateX(${translateX}%) translateY(${translateY}px) rotate(${rotateDeg}deg) scale(${scale})`,
    zIndex,
    opacity,
    filter: blur,
    pointerEvents: Math.abs(diff) > 3 ? 'none' : 'auto'
  }
}
</script>

<style scoped>
.rotary-slider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 600px;
  margin-top: var(--space-12);
  overflow: hidden;
  cursor: ns-resize;
}

/* Scroll hint */
.rotary-slider__hint {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-muted);
  font-size: var(--text-sm);
  animation: hint-pulse 2s ease-in-out infinite;
  pointer-events: none;
  z-index: 60;
}

@keyframes hint-pulse {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) translateY(0); }
  50% { opacity: 1; transform: translateX(-50%) translateY(-4px); }
}

/* Nav Buttons */
.rotary-slider__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: var(--surface-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
}

.rotary-slider__nav:hover {
  background: var(--surface-light);
  box-shadow: var(--shadow-md);
  color: var(--brand-primary);
}

.rotary-slider__nav--prev {
  left: 5%;
}

.rotary-slider__nav--next {
  right: 5%;
}

/* Container */
.rotary-slider__container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

/* Anchor Point */
.rotary-slider__anchor {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
}

/* Card */
.rotary-card {
  position: absolute;
  top: -320px;
  left: 50%;
  width: 260px;
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  transform-origin: center bottom;
  cursor: pointer;
}

.rotary-card__inner {
  background: var(--surface-white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 4px solid var(--border-light);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.rotary-card.is-active .rotary-card__inner {
  border-color: #A855F7;
  box-shadow: 0 24px 64px rgba(168, 85, 247, 0.25);
}

.rotary-card :deep(img) {
  width: 100%;
  height: 260px;
  object-fit: contain;
  background: #FFFFFF;
  padding: 12px;
}

.rotary-card__label {
  padding: 16px;
  font-size: var(--text-base);
  color: var(--text-primary);
  font-weight: 600;
  text-align: center;
  background: var(--gradient-card-hover);
  border-top: 1px solid var(--border-light);
}

@media (max-width: 768px) {
  .rotary-slider {
    height: 450px;
    cursor: grab;
  }
  
  .rotary-card {
    width: 220px;
    top: -150px;
  }
  
  .rotary-slider__nav--prev {
    left: 10px;
  }

  .rotary-slider__nav--next {
    right: 10px;
  }

  .rotary-slider__hint span {
    display: none;
  }
}
</style>
