<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': isMobileOpen }">
    <div class="navbar__inner container">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="navbar__logo" @click="closeMobile">
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
        <button class="navbar__lang-btn" @click="toggleLocale">
          {{ locale === 'zh' ? 'EN' : '中文' }}
        </button>
        <NuxtLink :to="localePath('/contact')" class="navbar__contact-link">
          {{ $t('nav.contact') }}
        </NuxtLink>

        <!-- Mobile Hamburger -->
        <button class="navbar__hamburger" @click="toggleMobile">
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
          <span class="navbar__hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Bottom border line -->
    <div class="navbar__border"></div>

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
        <div class="navbar__mobile-divider"></div>
        <button class="navbar__mobile-lang" @click="toggleLocale">
          {{ locale === 'zh' ? 'Switch to English' : '切换到中文' }}
        </button>
        <NuxtLink :to="localePath('/contact')" class="navbar__mobile-contact" @click="closeMobile">
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

useEventListener(window, 'scroll', () => {
  isScrolled.value = window.scrollY > 10
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
  background: var(--surface-white);
  transition: box-shadow var(--transition-base);
}

.navbar--scrolled {
  box-shadow: 0 1px 0 var(--border-light);
}

.navbar__border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--border-light);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

/* Logo — 华为风格纯文字 */
.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
}

.navbar__logo-text {
  font-size: 1.375rem;
  font-weight: 600;
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

/* Links — 华为风格简约 */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.navbar__link {
  padding: 0 var(--space-5);
  color: var(--text-primary);
  font-weight: 400;
  font-size: var(--text-base);
  transition: color var(--transition-fast);
  text-decoration: none;
  height: var(--navbar-height);
  display: flex;
  align-items: center;
  position: relative;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--space-5);
  right: var(--space-5);
  height: 2px;
  background: var(--brand-primary);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}

.navbar__link:hover {
  color: var(--brand-primary);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  transform: scaleX(1);
}

.navbar__link--active {
  color: var(--brand-primary);
}

/* Actions */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-5);
}

.navbar__lang-btn {
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: 400;
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
  transition: color var(--transition-fast);
}

.navbar__lang-btn:hover {
  color: var(--brand-primary);
}

.navbar__contact-link {
  color: var(--text-primary);
  font-size: var(--text-base);
  font-weight: 400;
  transition: color var(--transition-fast);
}

.navbar__contact-link:hover {
  color: var(--brand-primary);
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
  width: 20px;
  height: 1.5px;
  background: var(--text-primary);
  transition: all var(--transition-base);
}

.navbar--open .navbar__hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
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
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
}

.navbar__mobile-link {
  padding: var(--space-4) 0;
  color: var(--text-primary);
  font-weight: 400;
  font-size: var(--text-lg);
  text-decoration: none;
  border-bottom: 1px solid var(--border-light);
}

.navbar__mobile-divider {
  height: 1px;
  background: var(--border-light);
  margin: var(--space-2) 0;
}

.navbar__mobile-lang {
  padding: var(--space-3) 0;
  color: var(--text-secondary);
  font-size: var(--text-sm);
  text-align: left;
  cursor: pointer;
}

.navbar__mobile-contact {
  padding: var(--space-3) 0;
  color: var(--brand-primary);
  font-weight: 500;
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

@media (max-width: 768px) {
  .navbar__links,
  .navbar__contact-link {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }
}
</style>
