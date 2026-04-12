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
            <a href="#" class="footer__link">{{ $t('footer.miniProgram') }}</a>
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
          <a href="#" class="footer__legal-link">{{ $t('footer.privacy') }}</a>
          <a href="#" class="footer__legal-link">{{ $t('footer.terms') }}</a>
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
  background: var(--surface-dark);
  color: rgba(255, 255, 255, 0.7);
}

.footer__top {
  padding: 64px 0 48px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: var(--space-10);
}

.footer__logo {
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--text-inverse);
  display: block;
  margin-bottom: var(--space-3);
}

.footer__slogan {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.45);
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
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--text-sm);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--text-inverse);
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: var(--space-5) 0;
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__copyright {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
}

.footer__legal {
  display: flex;
  gap: var(--space-6);
}

.footer__legal-link {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer__legal-link:hover {
  color: rgba(255, 255, 255, 0.6);
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
