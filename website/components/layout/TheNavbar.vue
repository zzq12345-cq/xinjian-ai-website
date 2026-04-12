<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMobileOpen }">
    <div class="navbar__inner container">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="navbar__logo" @click="closeMobile">
        <div class="navbar__logo-icon">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="url(#logo-gradient)" />
            <path d="M18 10c-2.5-2.5-6.5-2.5-9 0s-2.5 6.5 0 9l9 9 9-9c2.5-2.5 2.5-6.5 0-9s-6.5-2.5-9 0z" fill="white" opacity="0.9" />
            <path d="M12 18h3l2-4 2 8 2-6 2 2h3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="36" y2="36">
                <stop offset="0%" stop-color="#0891B2" />
                <stop offset="100%" stop-color="#14B8A6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="navbar__logo-text">心鉴智能</span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <div class="navbar__links">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="localePath(link.path)"
          class="navbar__link"
          active-class="navbar__link--active"
        >
          {{ $t(link.label) }}
        </NuxtLink>
      </div>

      <!-- Right Actions -->
      <div class="navbar__actions">
        <!-- Language Switcher -->
        <button class="navbar__lang-btn" @click="toggleLocale" :title="locale === 'zh' ? 'Switch to English' : '切换到中文'">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>{{ locale === 'zh' ? 'EN' : '中文' }}</span>
        </button>

        <!-- CTA Button (Desktop) -->
        <NuxtLink :to="localePath('/contact')" class="btn btn--primary navbar__cta">
          {{ $t('nav.contact') }}
        </NuxtLink>

        <!-- Mobile Hamburger -->
        <button class="navbar__hamburger" @click="toggleMobile" :aria-label="isMobileOpen ? 'Close menu' : 'Open menu'">
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="isMobileOpen" class="navbar__mobile">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="localePath(link.path)"
          class="navbar__mobile-link"
          @click="closeMobile"
        >
          {{ $t(link.label) }}
        </NuxtLink>
        <button class="navbar__mobile-lang" @click="toggleLocale">
          🌐 {{ locale === 'zh' ? 'Switch to English' : '切换到中文' }}
        </button>
        <NuxtLink :to="localePath('/contact')" class="btn btn--primary navbar__mobile-cta" @click="closeMobile">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isMobileOpen = ref(false)

const navLinks = [
  { path: '/', label: 'nav.home' },
  { path: '/product', label: 'nav.product' },
  { path: '/team', label: 'nav.team' },
  { path: '/news', label: 'nav.news' },
]

function toggleLocale() {
  setLocale(locale.value === 'zh' ? 'en' : 'zh')
}

function toggleMobile() {
  isMobileOpen.value = !isMobileOpen.value
}

function closeMobile() {
  isMobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--navbar-height);
  transition: all var(--transition-base);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.navbar--scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 12px rgba(0, 0, 0, 0.06);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo */
.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--text-primary);
}

.navbar__logo-text {
  font-size: var(--text-xl);
  font-weight: 700;
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}

/* Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.navbar__link {
  padding: var(--space-2) var(--space-4);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: var(--text-sm);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  text-decoration: none;
}

.navbar__link:hover {
  color: var(--brand-primary);
  background: var(--brand-primary-50);
}

.navbar__link--active {
  color: var(--brand-primary);
  background: var(--brand-primary-50);
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.navbar__lang-btn {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) var(--space-3);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  cursor: pointer;
}

.navbar__lang-btn:hover {
  color: var(--brand-primary);
  background: var(--brand-primary-50);
}

.navbar__cta {
  padding: var(--space-2) var(--space-5);
  font-size: var(--text-sm);
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--space-2);
  cursor: pointer;
}

.navbar__hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.navbar--open .navbar__hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar--open .navbar__hamburger-line:nth-child(2) {
  opacity: 0;
}

.navbar--open .navbar__hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Menu */
.navbar__mobile {
  position: absolute;
  top: var(--navbar-height);
  left: 0;
  right: 0;
  background: var(--surface-white);
  border-top: 1px solid var(--border-light);
  box-shadow: var(--shadow-lg);
  padding: var(--space-4) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.navbar__mobile-link {
  padding: var(--space-3) var(--space-4);
  color: var(--text-primary);
  font-weight: 500;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.navbar__mobile-link:hover {
  background: var(--surface-light);
  color: var(--brand-primary);
}

.navbar__mobile-lang {
  padding: var(--space-3) var(--space-4);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  text-align: left;
  cursor: pointer;
}

.navbar__mobile-cta {
  margin-top: var(--space-2);
  text-align: center;
}

/* Transition */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .navbar__links,
  .navbar__cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }
}
</style>
