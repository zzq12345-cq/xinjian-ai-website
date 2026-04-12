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
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '团队介绍 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '心鉴智能科技工作室15人团队，覆盖技术、市场、运营三大部门。' }],
})

const departments = [
  {
    key: 'tech', titleKey: 'team.deptTech',
    members: [
      { name: '周志奇', role: '技术负责人 / 全栈工程师', bio: '负责系统架构设计与核心功能开发', avatarBg: 'var(--surface-dark)' },
      { name: '李明轩', role: 'AI算法工程师', bio: '心音分类模型设计与训练', avatarBg: '#333' },
      { name: '王思远', role: '嵌入式开发工程师', bio: '树莓派设备端开发与调试', avatarBg: '#444' },
      { name: '张浩宇', role: '前端开发工程师', bio: '微信小程序与管理后台开发', avatarBg: '#555' },
      { name: '赵天成', role: '后端开发工程师', bio: 'FastAPI服务端与数据库设计', avatarBg: '#666' },
      { name: '刘子涵', role: '测试工程师', bio: '系统测试与质量保障', avatarBg: '#777' },
    ],
  },
  {
    key: 'market', titleKey: 'team.deptMarket',
    members: [
      { name: '陈雨萱', role: '市场负责人', bio: '市场战略规划与品牌建设', avatarBg: 'var(--surface-dark)' },
      { name: '林佳琪', role: '产品经理', bio: '用户研究与产品设计', avatarBg: '#333' },
      { name: '吴思颖', role: '品牌设计师', bio: 'UI/UX设计与视觉规范', avatarBg: '#444' },
      { name: '黄子豪', role: '商务拓展', bio: '合作伙伴对接与渠道开发', avatarBg: '#555' },
      { name: '杨晓彤', role: '市场推广', bio: '内容营销与社交媒体运营', avatarBg: '#666' },
    ],
  },
  {
    key: 'ops', titleKey: 'team.deptOps',
    members: [
      { name: '周梦琳', role: '运营负责人', bio: '团队运营与项目管理', avatarBg: 'var(--surface-dark)' },
      { name: '孙嘉文', role: '数据运营', bio: '用户数据分析与增长策略', avatarBg: '#333' },
      { name: '郑宇航', role: '客服支持', bio: '用户反馈处理与服务优化', avatarBg: '#444' },
      { name: '胡晨曦', role: '行政助理', bio: '日常行政与活动组织', avatarBg: '#555' },
    ],
  },
]
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

@media (max-width: 768px) {
  .team-hero__title { font-size: var(--text-3xl); }
  .culture-grid { grid-template-columns: 1fr; }
}
</style>
