<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__grid">
          <!-- Brand Column -->
          <div class="footer__brand">
            <span class="footer__logo">心鉴智能</span>
            <p class="footer__slogan">{{ $t('footer.slogan') }}</p>
          </div>

          <!-- Nav Columns -->
          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.products') }}</h4>
            <NuxtLink :to="localePath('/product')" class="footer__link">{{ $t('footer.heartSound') }}</NuxtLink>
            <span class="footer__link footer__link--disabled">{{ $t('footer.miniProgram') }}</span>
          </div>

          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.company') }}</h4>
            <NuxtLink :to="localePath('/team')" class="footer__link">{{ $t('footer.about') }}</NuxtLink>
            <NuxtLink :to="localePath('/news')" class="footer__link">{{ $t('footer.news') }}</NuxtLink>
          </div>

          <div class="footer__col">
            <h4 class="footer__col-title">{{ $t('footer.contact') }}</h4>
            <a href="mailto:contact@xinjian-ai.com" class="footer__link">contact@xinjian-ai.com</a>
            <a href="tel:+8613800138000" class="footer__link">138-0013-8000</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copyright">{{ $t('footer.copyright') }}</p>
        <div class="footer__legal">
          <span class="footer__legal-link footer__legal-link--disabled">{{ $t('footer.privacy') }}</span>
          <span class="footer__legal-link footer__legal-link--disabled">{{ $t('footer.terms') }}</span>
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
  background: var(--surface-darker);
  color: rgba(255, 255, 255, 0.6);
  position: relative;
}

/* Subtle grid texture */
.footer::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.footer__top {
  padding: 72px 0 56px;
  position: relative;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: var(--space-10);
}

.footer__logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-inverse);
  display: block;
  margin-bottom: var(--space-3);
  letter-spacing: 0.02em;
  font-family: var(--font-display);
}

.footer__slogan {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.35);
  max-width: 260px;
  line-height: 1.6;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.footer__col-title {
  color: var(--text-inverse);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-1);
}

.footer__link {
  color: rgba(255, 255, 255, 0.4);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--brand-primary-light);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: var(--space-5) 0;
  position: relative;
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.25);
}

.footer__legal {
  display: flex;
  gap: var(--space-6);
}

.footer__legal-link {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.25);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: rgba(255, 255, 255, 0.5);
}

.footer__link--disabled {
  cursor: default;
  opacity: 0.4;
}

.footer__link--disabled:hover {
  color: rgba(255, 255, 255, 0.4);
}

.footer__legal-link--disabled {
  cursor: default;
}

.footer__legal-link--disabled:hover {
  color: rgba(255, 255, 255, 0.25);
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-8);
  }

  .footer__bottom-inner {
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }
}
</style>
