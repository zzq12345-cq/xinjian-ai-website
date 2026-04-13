<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="container">
        <h1 class="contact-hero__title animate-fade-in-up">{{ $t('contact.heroTitle') }}</h1>
        <p class="contact-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('contact.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info -->
          <div class="contact-info scroll-reveal">
            <h2 class="contact-info__title">{{ $t('contact.infoTitle') }}</h2>

            <div class="contact-info__items">
              <a href="mailto:contact@xinjian-ai.com" class="contact-info__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                <div>
                  <p class="contact-info__label">{{ $t('contact.email') }}</p>
                  <p class="contact-info__value">contact@xinjian-ai.com</p>
                </div>
              </a>

              <a href="tel:+8613800138000" class="contact-info__item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <p class="contact-info__label">{{ $t('contact.phone') }}</p>
                  <p class="contact-info__value">138-0013-8000</p>
                </div>
              </a>
            </div>

            <!-- Business License -->
            <div class="contact-license">
              <h3 class="contact-license__title">{{ $t('contact.licenseTitle') }}</h3>
              <div class="contact-license__card">
                <img src="/images/credentials/business-license.jpeg" :alt="$t('contact.licenseTitle')" />
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="contact-form-wrapper scroll-reveal-right">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="contact-form__row">
                <div class="contact-form__group">
                  <label class="contact-form__label" for="name">{{ $t('contact.formName') }}</label>
                  <input id="name" v-model="form.name" type="text" class="contact-form__input" required />
                </div>
                <div class="contact-form__group">
                  <label class="contact-form__label" for="email">{{ $t('contact.formEmail') }}</label>
                  <input id="email" v-model="form.email" type="email" class="contact-form__input" required />
                </div>
              </div>

              <div class="contact-form__group">
                <label class="contact-form__label" for="subject">{{ $t('contact.formSubject') }}</label>
                <select id="subject" v-model="form.subject" class="contact-form__input contact-form__select">
                  <option value="cooperation">{{ $t('contact.subjects.cooperation') }}</option>
                  <option value="investment">{{ $t('contact.subjects.investment') }}</option>
                  <option value="join">{{ $t('contact.subjects.join') }}</option>
                  <option value="other">{{ $t('contact.subjects.other') }}</option>
                </select>
              </div>

              <div class="contact-form__group">
                <label class="contact-form__label" for="message">{{ $t('contact.formMessage') }}</label>
                <textarea id="message" v-model="form.message" class="contact-form__input contact-form__textarea" rows="5" required></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--lg contact-form__submit" :disabled="isSubmitting">
                <template v-if="isSubmitting">
                  <span class="contact-form__spinner"></span>
                </template>
                <template v-else>{{ $t('contact.formSubmit') }}</template>
              </button>

              <Transition name="fade">
                <p v-if="isSuccess" class="contact-form__success">
                  ✓ {{ $t('contact.formSuccess') }}
                </p>
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners Section -->
    <section class="section" style="background: var(--surface-light);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('contact.partnersTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('contact.partnersSubtitle') }}</p>
        </div>

        <div class="partners-grid stagger-children">
          <div v-for="partner in partners" :key="partner.name" class="partner-card scroll-reveal">
            <img v-if="partner.img" :src="partner.img" :alt="partner.name" class="partner-card__img" loading="lazy" />
            <div class="partner-card__body">
              <h3 class="partner-card__name">{{ partner.name }}</h3>
              <p class="partner-card__desc">{{ partner.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Contracts Showcase -->
        <div class="contracts-bar scroll-reveal">
          <div v-for="contract in contracts" :key="contract.img" class="contract-thumb" @click="lightboxItem = contract">
            <img :src="contract.img" :alt="contract.label" loading="lazy" />
            <span>{{ contract.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <BaseLightbox :item="lightboxItem" @close="lightboxItem = null" />
  </div>
</template>

<script setup lang="ts">
import type { LightboxItem } from '~/components/BaseLightbox.vue'

useHead({
  title: '联系我们 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '联系心鉴智能科技工作室，了解商务合作与投资机会。' }],
})

const lightboxItem = ref<LightboxItem | null>(null)

const form = reactive({ name: '', email: '', subject: 'cooperation', message: '' })
const isSubmitting = ref(false)
const isSuccess = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  isSubmitting.value = false
  isSuccess.value = true
  form.name = ''; form.email = ''; form.subject = 'cooperation'; form.message = ''
  setTimeout(() => { isSuccess.value = false }, 5000)
}

const partners = [
  {
    name: '东莞市慧勤智远科技有限公司',
    desc: '集液晶显示模组的研发、制造及销售的国家高新技术科技企业',
    img: '/images/credentials/partner-huiqin-website.jpeg',
  },
  {
    name: '漳州开发区奇链网络科技工作室',
    desc: '网络技术服务与软件开发',
    img: null,
  },
  {
    name: '深圳市合众电子技术有限公司',
    desc: '电子元器件与技术解决方案提供商',
    img: null,
  },
  {
    name: '淄博艾吉医疗科技有限公司',
    desc: '医疗器械研发与健康管理技术',
    img: null,
  },
]

const contracts = [
  { img: '/images/credentials/contract-huiqin.jpeg', label: '慧勤智远合作协议' },
  { img: '/images/credentials/contract-qilian.jpeg', label: '奇链网络合作协议' },
  { img: '/images/credentials/contract-hezhong.jpeg', label: '合众电子合作协议' },
  { img: '/images/credentials/contract-aiji.jpeg', label: '艾吉医疗合作协议' },
]
</script>

<style scoped>
.contact-hero {
  padding: 120px 0 80px;
  background: var(--surface-light);
}

.contact-hero__title {
  font-size: var(--text-5xl);
  font-weight: 500;
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.contact-hero__subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 80px;
  align-items: start;
}

.contact-info__title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-8);
}

.contact-info__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.contact-info__item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  color: var(--text-primary);
  text-decoration: none;
  transition: background var(--transition-fast);
}

.contact-info__item:hover {
  background: var(--surface-light);
}

.contact-info__item svg {
  color: var(--text-muted);
  flex-shrink: 0;
}

.contact-info__label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-info__value {
  font-weight: 500;
}

/* Business License */
.contact-license {
  margin-top: 48px;
}

.contact-license__title {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.contact-license__card {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-light);
}

.contact-license__card img {
  width: 100%;
  display: block;
}

/* Form */
.contact-form-wrapper {
  background: var(--surface-light);
  padding: 48px;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-5);
}

.contact-form__group {
  margin-bottom: var(--space-5);
}

.contact-form__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.contact-form__input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  font-size: var(--text-base);
  font-family: var(--font-sans);
  transition: border-color var(--transition-fast);
  background: var(--surface-white);
  color: var(--text-primary);
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--text-primary);
}

.contact-form__select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 40px;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__submit {
  width: 100%;
  margin-top: var(--space-2);
}

.contact-form__spinner {
  width: 18px; height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin-slow 0.8s linear infinite;
}

.contact-form__success {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--safe-green-bg);
  color: var(--safe-green);
  font-weight: 500;
  text-align: center;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Partners */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-bottom: 60px;
}

.partner-card {
  background: var(--surface-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-base);
}

.partner-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.partner-card__img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.partner-card__body {
  padding: 20px 24px;
}

.partner-card__name {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.partner-card__desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

/* Contracts Bar */
.contracts-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.contract-thumb {
  background: var(--surface-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-base);
  text-align: center;
}

.contract-thumb:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.contract-thumb img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: top;
}

.contract-thumb span {
  display: block;
  padding: 10px 12px;
  font-size: var(--text-xs);
  color: var(--text-secondary);
  font-weight: 500;
}



@media (max-width: 768px) {
  .contact-hero__title { font-size: var(--text-3xl); }
  .contact-grid { grid-template-columns: 1fr; gap: var(--space-10); }
  .contact-form-wrapper { padding: var(--space-6); }
  .contact-form__row { grid-template-columns: 1fr; }
  .partners-grid { grid-template-columns: 1fr; }
  .contracts-bar { grid-template-columns: repeat(2, 1fr); }
}
</style>
