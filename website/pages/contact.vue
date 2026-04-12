<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="contact-hero">
      <div class="contact-hero__bg"></div>
      <div class="container contact-hero__content">
        <h1 class="contact-hero__title animate-fade-in-up">{{ $t('contact.heroTitle') }}</h1>
        <p class="contact-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('contact.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Info Column -->
          <div class="contact-info scroll-reveal">
            <h2 class="contact-info__title">{{ $t('contact.infoTitle') }}</h2>

            <div class="contact-info__items">
              <a href="mailto:contact@xinjian-ai.com" class="contact-info__item">
                <div class="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <div>
                  <p class="contact-info__label">{{ $t('contact.email') }}</p>
                  <p class="contact-info__value">contact@xinjian-ai.com</p>
                </div>
              </a>

              <a href="tel:+8613800138000" class="contact-info__item">
                <div class="contact-info__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p class="contact-info__label">{{ $t('contact.phone') }}</p>
                  <p class="contact-info__value">138-0013-8000</p>
                </div>
              </a>
            </div>

            <!-- Decorative -->
            <div class="contact-info__decor">
              <div class="contact-info__heart animate-heartbeat">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="var(--brand-primary)" opacity="0.1">
                  <path d="M12 4.5c-1.7-1.7-4.4-1.7-6.1 0s-1.7 4.4 0 6.1L12 17l6.1-6.4c1.7-1.7 1.7-4.4 0-6.1s-4.4-1.7-6.1 0z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Form Column -->
          <div class="contact-form-wrapper scroll-reveal-right">
            <h2 class="contact-form__title">{{ $t('contact.formTitle') }}</h2>

            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="contact-form__group">
                <label class="contact-form__label" for="name">{{ $t('contact.formName') }}</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="contact-form__input"
                  :placeholder="$t('contact.formName')"
                  required
                />
              </div>

              <div class="contact-form__group">
                <label class="contact-form__label" for="email">{{ $t('contact.formEmail') }}</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="contact-form__input"
                  :placeholder="$t('contact.formEmail')"
                  required
                />
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
                <textarea
                  id="message"
                  v-model="form.message"
                  class="contact-form__input contact-form__textarea"
                  :placeholder="$t('contact.formMessage')"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn--primary btn--lg contact-form__submit" :disabled="isSubmitting">
                <template v-if="isSubmitting">
                  <span class="contact-form__spinner"></span>
                </template>
                <template v-else>
                  {{ $t('contact.formSubmit') }}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </template>
              </button>

              <Transition name="fade">
                <p v-if="isSuccess" class="contact-form__success">
                  ✅ {{ $t('contact.formSuccess') }}
                </p>
              </Transition>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '联系我们 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '联系心鉴智能科技工作室，探讨商务合作、投资咨询或加入我们的团队。' }],
})

const form = reactive({
  name: '',
  email: '',
  subject: 'cooperation',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500))
  isSubmitting.value = false
  isSuccess.value = true

  // Reset form
  form.name = ''
  form.email = ''
  form.subject = 'cooperation'
  form.message = ''

  setTimeout(() => {
    isSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
/* Hero */
.contact-hero {
  position: relative;
  padding: var(--space-24) 0 var(--space-16);
  text-align: center;
  overflow: hidden;
}

.contact-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--surface-light) 0%, var(--surface-white) 100%);
}

.contact-hero__content {
  position: relative;
  z-index: 1;
}

.contact-hero__title {
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.contact-hero__subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

/* Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--space-16);
  align-items: start;
}

/* Info */
.contact-info__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
}

.contact-info__items {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-info__item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  border-radius: var(--radius-lg);
  transition: all var(--transition-fast);
  text-decoration: none;
  color: inherit;
}

.contact-info__item:hover {
  background: var(--surface-light);
}

.contact-info__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--brand-primary-50);
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-info__label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-info__value {
  font-weight: 600;
  color: var(--text-primary);
}

.contact-info__decor {
  margin-top: var(--space-12);
  display: flex;
  justify-content: center;
}

/* Form */
.contact-form-wrapper {
  background: var(--surface-white);
  border-radius: var(--radius-xl);
  padding: var(--space-10);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border-light);
}

.contact-form__title {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--space-8);
}

.contact-form__group {
  margin-bottom: var(--space-5);
}

.contact-form__label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.contact-form__input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1.5px solid var(--border-light);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-family: var(--font-sans);
  transition: all var(--transition-fast);
  background: var(--surface-white);
  color: var(--text-primary);
}

.contact-form__input:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
}

.contact-form__select {
  appearance: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__submit {
  width: 100%;
  margin-top: var(--space-4);
}

.contact-form__spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin-slow 0.8s linear infinite;
}

.contact-form__success {
  margin-top: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--safe-green-bg);
  color: var(--safe-green);
  border-radius: var(--radius-md);
  font-weight: 500;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .contact-hero__title {
    font-size: var(--text-3xl);
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .contact-form-wrapper {
    padding: var(--space-6);
  }
}
</style>
