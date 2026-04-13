<template>
  <div class="team-page">
    <!-- Hero -->
    <section class="team-hero">
      <div class="container">
        <h1 class="team-hero__title animate-fade-in-up">{{ $t('team.heroTitle') }}</h1>
        <p class="team-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('team.heroSubtitle') }}
        </p>
      </div>
      <div class="team-hero__photo">
        <img src="/images/team-workspace.png" alt="团队协作" />
      </div>
    </section>

    <!-- Team by Department -->
    <section class="section">
      <div class="container">
        <div v-for="dept in departments" :key="dept.key" class="team-dept">
          <div class="team-dept__header scroll-reveal">
            <h2 class="team-dept__title">{{ $t(dept.titleKey) }}</h2>
            <span class="team-dept__count">{{ dept.members.length }}</span>
          </div>
          <div class="team-grid stagger-children">
            <div v-for="member in dept.members" :key="member.name" class="team-card scroll-reveal">
              <div class="team-card__avatar" :style="{ background: member.avatarBg }">
                <span class="team-card__initial">{{ member.name.charAt(0) }}</span>
              </div>
              <h3 class="team-card__name">{{ member.name }}</h3>
              <p class="team-card__role">{{ member.role }}</p>
              <p class="team-card__bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IP & Awards -->
    <section class="section" style="background: var(--surface-light);">
      <div class="container">
        <!-- Intellectual Property -->
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('team.ipTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('team.ipSubtitle') }}</p>
        </div>

        <div class="ip-stats stagger-children">
          <div class="ip-stat scroll-reveal">
            <span class="ip-stat__value">5</span>
            <span class="ip-stat__label">{{ $t('team.ipPatents') }}</span>
            <span class="ip-stat__detail">{{ $t('team.ipPatentsDetail') }}</span>
          </div>
          <div class="ip-stat scroll-reveal">
            <span class="ip-stat__value">4</span>
            <span class="ip-stat__label">{{ $t('team.ipCopyrights') }}</span>
            <span class="ip-stat__detail">{{ $t('team.ipCopyrightsDetail') }}</span>
          </div>
          <div class="ip-stat scroll-reveal">
            <span class="ip-stat__value">6</span>
            <span class="ip-stat__label">{{ $t('team.ipPapers') }}</span>
            <span class="ip-stat__detail">{{ $t('team.ipPapersDetail') }}</span>
          </div>
        </div>

        <!-- Patent & Copyright Gallery -->
        <div class="ip-gallery stagger-children">
          <div v-for="cert in ipCertificates" :key="cert.img" class="ip-card scroll-reveal" @click="openLightbox(cert)">
            <img :src="cert.img" :alt="cert.label" loading="lazy" />
            <p class="ip-card__label">{{ cert.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Awards -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('team.awardsTitle') }}</h2>
          <p class="section-subtitle scroll-reveal">{{ $t('team.awardsSubtitle') }}</p>
        </div>

        <div class="awards-grid stagger-children">
          <div v-for="(award, i) in awards" :key="i" class="award-card scroll-reveal" @click="openLightbox(award)">
            <img :src="award.img" :alt="award.label" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section class="section" style="background: var(--surface-light);">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title scroll-reveal">{{ $t('team.cultureTitle') }}</h2>
        </div>
        <div class="culture-grid stagger-children">
          <div class="culture-card scroll-reveal">
            <h3 class="culture-card__title">{{ $t('team.mission') }}</h3>
            <p class="culture-card__text">{{ $t('team.missionText') }}</p>
          </div>
          <div class="culture-card scroll-reveal">
            <h3 class="culture-card__title">{{ $t('team.vision') }}</h3>
            <p class="culture-card__text">{{ $t('team.visionText') }}</p>
          </div>
          <div class="culture-card scroll-reveal">
            <h3 class="culture-card__title">{{ $t('team.values') }}</h3>
            <p class="culture-card__text">{{ $t('team.valuesText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <HomeCtaSection />

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxItem" class="lightbox" @click.self="lightboxItem = null">
          <button class="lightbox__close" @click="lightboxItem = null">&times;</button>
          <img :src="lightboxItem.img" :alt="lightboxItem.label" class="lightbox__img" />
          <p v-if="lightboxItem.label" class="lightbox__label">{{ lightboxItem.label }}</p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '团队介绍 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '心鉴智能科技工作室团队，覆盖技术、市场、运营三大部门。累计5项专利、4个软著、6篇学术论文。' }],
})

interface LightboxItem {
  img: string
  label: string
}

const lightboxItem = ref<LightboxItem | null>(null)

function openLightbox(item: LightboxItem) {
  lightboxItem.value = item
}

const departments = [
  {
    key: 'core', titleKey: 'team.deptCore',
    members: [
      { name: '周志琪', role: '项目负责人', bio: '负责项目整体规划与系统架构设计，全栈工程师', avatarBg: 'var(--brand-primary)' },
      { name: '范子琦', role: '技术部负责人', bio: '负责AI算法与核心技术模块开发', avatarBg: '#333' },
      { name: '孙思雨', role: '市场部负责人', bio: '市场战略规划与商务拓展', avatarBg: '#444' },
      { name: '张雨婷', role: '运营部负责人', bio: '团队运营管理与内容策划', avatarBg: '#555' },
    ],
  },
  {
    key: 'tech', titleKey: 'team.deptTech',
    members: [
      { name: '谢堃昊', role: '核心技术成员', bio: '参与模型训练与系统测试', avatarBg: '#333' },
      { name: '谢堃昊', role: '技术开发', bio: '嵌入式开发与硬件调试', avatarBg: '#444' },
    ],
  },
  {
    key: 'market', titleKey: 'team.deptMarket',
    members: [
      { name: '市场成员', role: '品牌推广', bio: '品牌建设与渠道开发', avatarBg: '#333' },
    ],
  },
  {
    key: 'ops', titleKey: 'team.deptOps',
    members: [
      { name: '运营成员', role: '内容运营', bio: '用户增长与社交媒体运营', avatarBg: '#333' },
    ],
  },
]

const ipCertificates = [
  { img: '/images/credentials/patent-heart-detector.jpeg', label: '外观设计专利：心音检测仪' },
  { img: '/images/credentials/patent-recyclable-box.jpeg', label: '实用新型专利：可循环外卖盒' },
  { img: '/images/credentials/patent-ev-charging.jpeg', label: '实用新型专利：新能源充电系统' },
  { img: '/images/credentials/copyright-heart-detection-cert.jpeg', label: '软著：心音异常检测平台' },
  { img: '/images/credentials/copyright-ml-training-cert.jpeg', label: '软著：机器学习模型训练平台' },
  { img: '/images/credentials/paper-ei-1-detail.jpeg', label: 'EI会议论文' },
]

const awards = Array.from({ length: 10 }, (_, i) => ({
  img: `/images/credentials/award-${i + 1}.jpeg`,
  label: `获奖证书 ${i + 1}`,
}))
</script>

<style scoped>
.team-hero {
  padding: 120px 0 80px;
  background: var(--surface-light);
}

.team-hero__title {
  font-size: var(--text-5xl);
  font-weight: 500;
  margin-bottom: var(--space-4);
  letter-spacing: -0.02em;
}

.team-hero__subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  font-weight: 400;
}

.team-hero__photo {
  margin-top: 48px;
  padding: 0 var(--space-8);
  max-width: var(--container-xl);
  margin-left: auto;
  margin-right: auto;
}

.team-hero__photo img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: var(--radius-lg);
}

.team-dept {
  margin-bottom: 60px;
}

.team-dept__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--border-light);
}

.team-dept__title {
  font-size: var(--text-xl);
  font-weight: 600;
}

.team-dept__count {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 400;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-6);
}

.team-card {
  padding: var(--space-8) var(--space-6);
  text-align: center;
  background: var(--surface-light);
  transition: all var(--transition-base);
}

.team-card:hover {
  background: var(--surface-white);
  box-shadow: var(--shadow-lg);
}

.team-card__avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.team-card__initial {
  color: white;
  font-size: var(--text-xl);
  font-weight: 500;
}

.team-card__name {
  font-size: var(--text-base);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.team-card__role {
  font-size: var(--text-sm);
  color: var(--brand-primary);
  font-weight: 400;
  margin-bottom: var(--space-2);
}

.team-card__bio {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* IP Stats */
.ip-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-bottom: 60px;
}

.ip-stat {
  background: var(--surface-white);
  padding: 40px 24px;
  text-align: center;
  transition: all var(--transition-base);
}

.ip-stat:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.ip-stat__value {
  display: block;
  font-size: 3rem;
  font-weight: 500;
  color: var(--text-primary);
  font-family: var(--font-display);
  margin-bottom: var(--space-2);
}

.ip-stat__label {
  display: block;
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.ip-stat__detail {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* IP Gallery */
.ip-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.ip-card {
  background: var(--surface-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-base);
}

.ip-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.ip-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.ip-card:hover img {
  transform: scale(1.03);
}

.ip-card__label {
  padding: 12px 16px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  font-weight: 500;
  text-align: center;
}

/* Awards Grid */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-4);
}

.award-card {
  background: var(--surface-light);
  border-radius: var(--radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-base);
}

.award-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.award-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.award-card:hover img {
  transform: scale(1.05);
}

/* Culture */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.culture-card {
  background: var(--surface-white);
  padding: 48px 36px;
  text-align: center;
}

.culture-card__title {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.culture-card__text {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.8;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  padding: var(--space-8);
}

.lightbox__close {
  position: absolute;
  top: 20px;
  right: 24px;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.lightbox__close:hover {
  opacity: 0.7;
}

.lightbox__img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: var(--radius-md);
}

.lightbox__label {
  margin-top: var(--space-4);
  color: rgba(255, 255, 255, 0.8);
  font-size: var(--text-base);
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .team-hero__title { font-size: var(--text-3xl); }
  .ip-stats { grid-template-columns: 1fr; }
  .ip-gallery { grid-template-columns: repeat(2, 1fr); }
  .awards-grid { grid-template-columns: repeat(2, 1fr); }
  .culture-grid { grid-template-columns: 1fr; }
}
</style>
