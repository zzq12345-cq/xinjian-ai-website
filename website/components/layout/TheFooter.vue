<template>
  <footer class="footer">
    <!-- Wave Separator -->
    <div class="footer__wave">
      <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
        <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z" fill="var(--surface-dark)" />
      </svg>
    </div>

    <div class="footer__inner">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand Column -->
          <div class="footer__brand">
            <div class="footer__logo">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="url(#footer-logo-gradient)" />
                <path d="M18 10c-2.5-2.5-6.5-2.5-9 0s-2.5 6.5 0 9l9 9 9-9c2.5-2.5 2.5-6.5 0-9s-6.5-2.5-9 0z" fill="white" opacity="0.9" />
                <path d="M12 18h3l2-4 2 8 2-6 2 2h3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                <defs>
                  <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stop-color="#0891B2" />
                    <stop offset="100%" stop-color="#14B8A6" />
                  </linearGradient>
                </defs>
              </svg>
              <span>心鉴智能</span>
            </div>
            <p class="footer__desc">{{ $t('footer.desc') }}</p>
          </div>

          <!-- Quick Links -->
          <div class="footer__column">
            <h4 class="footer__column-title">{{ $t('footer.quickLinks') }}</h4>
            <nav class="footer__nav">
              <NuxtLink :to="localePath('/')" class="footer__link">{{ $t('nav.home') }}</NuxtLink>
              <NuxtLink :to="localePath('/product')" class="footer__link">{{ $t('nav.product') }}</NuxtLink>
              <NuxtLink :to="localePath('/team')" class="footer__link">{{ $t('nav.team') }}</NuxtLink>
              <NuxtLink :to="localePath('/news')" class="footer__link">{{ $t('nav.news') }}</NuxtLink>
            </nav>
          </div>

          <!-- Contact -->
          <div class="footer__column">
            <h4 class="footer__column-title">{{ $t('footer.contactUs') }}</h4>
            <div class="footer__contact-items">
              <a href="mailto:contact@xinjian-ai.com" class="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                contact@xinjian-ai.com
              </a>
              <a href="tel:+8613800138000" class="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                138-0013-8000
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer__bottom">
          <p>{{ $t('footer.copyright') }}</p>
          <p>{{ $t('footer.icp') }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style scoped>
.footer {
  position: relative;
}

.footer__wave {
  height: 60px;
  overflow: hidden;
  line-height: 0;
}

.footer__wave svg {
  width: 100%;
  height: 100%;
}

.footer__inner {
  background: var(--surface-dark);
  color: rgba(255, 255, 255, 0.8);
  padding: var(--space-16) 0 var(--space-8);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

/* Brand */
.footer__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.footer__logo span {
  font-size: var(--text-xl);
  font-weight: 700;
  color: white;
  font-family: var(--font-display);
}

.footer__desc {
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--text-sm);
  line-height: 1.6;
  max-width: 320px;
}

/* Columns */
.footer__column-title {
  font-size: var(--text-sm);
  font-weight: 600;
  color: white;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
  padding: var(--space-1) 0;
}

.footer__link:hover {
  color: var(--brand-primary-light);
}

/* Contact Items */
.footer__contact-items {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.6);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__contact-item:hover {
  color: var(--brand-primary-light);
}

/* Bottom */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.4);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .footer__bottom {
    flex-direction: column;
    gap: var(--space-2);
    text-align: center;
  }
}
</style>
