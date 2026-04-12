<template>
  <div class="team-page">
    <!-- Hero -->
    <section class="team-hero">
      <div class="team-hero__bg"></div>
      <div class="container team-hero__content">
        <h1 class="team-hero__title animate-fade-in-up">{{ $t('team.heroTitle') }}</h1>
        <p class="team-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('team.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Team Grid by Department -->
    <section class="section">
      <div class="container">
        <div v-for="dept in departments" :key="dept.key" class="team-dept">
          <div class="team-dept__header scroll-reveal">
            <span class="team-dept__icon" v-html="dept.icon"></span>
            <h2 class="team-dept__title">{{ $t(dept.titleKey) }}</h2>
            <span class="team-dept__count">{{ dept.members.length }} 人</span>
          </div>
          <div class="team-dept__grid stagger-children">
            <div v-for="member in dept.members" :key="member.name" class="team-card scroll-reveal">
              <div class="team-card__avatar" :style="{ background: member.avatarBg }">
                <span class="team-card__avatar-initial">{{ member.name.charAt(0) }}</span>
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
            <div class="culture-card__icon">🎯</div>
            <h3 class="culture-card__title">{{ $t('team.mission') }}</h3>
            <p class="culture-card__text">{{ $t('team.missionText') }}</p>
          </div>
          <div class="culture-card scroll-reveal">
            <div class="culture-card__icon">🔭</div>
            <h3 class="culture-card__title">{{ $t('team.vision') }}</h3>
            <p class="culture-card__text">{{ $t('team.visionText') }}</p>
          </div>
          <div class="culture-card scroll-reveal">
            <div class="culture-card__icon">💎</div>
            <h3 class="culture-card__title">{{ $t('team.values') }}</h3>
            <p class="culture-card__text">{{ $t('team.valuesText') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join CTA -->
    <section class="team-join section">
      <div class="container text-center">
        <h2 class="section-title scroll-reveal">{{ $t('team.joinTitle') }}</h2>
        <p class="section-subtitle scroll-reveal">{{ $t('team.joinDesc') }}</p>
        <a href="mailto:contact@xinjian-ai.com" class="btn btn--primary btn--lg scroll-reveal" style="margin-top: var(--space-6);">
          {{ $t('team.joinButton') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '团队介绍 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '心鉴智能科技工作室，一群用技术温暖家庭健康的年轻人。15人团队，覆盖技术、市场、运营三大部门。' }],
})

const colors = [
  'linear-gradient(135deg, #0891B2, #06B6D4)',
  'linear-gradient(135deg, #14B8A6, #2DD4BF)',
  'linear-gradient(135deg, #3B82F6, #60A5FA)',
  'linear-gradient(135deg, #8B5CF6, #A78BFA)',
  'linear-gradient(135deg, #EC4899, #F472B6)',
  'linear-gradient(135deg, #F59E0B, #FBBF24)',
  'linear-gradient(135deg, #22C55E, #4ADE80)',
  'linear-gradient(135deg, #EF4444, #F87171)',
]

const departments = [
  {
    key: 'tech',
    titleKey: 'team.deptTech',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    members: [
      { name: '周志奇', role: '技术负责人 / 全栈工程师', bio: '负责系统架构设计与核心功能开发', avatarBg: colors[0] },
      { name: '李明轩', role: 'AI算法工程师', bio: '心音分类模型设计与训练', avatarBg: colors[1] },
      { name: '王思远', role: '嵌入式开发工程师', bio: '树莓派设备端开发与调试', avatarBg: colors[2] },
      { name: '张浩宇', role: '前端开发工程师', bio: '微信小程序与管理后台开发', avatarBg: colors[3] },
      { name: '赵天成', role: '后端开发工程师', bio: 'FastAPI服务端与数据库设计', avatarBg: colors[4] },
      { name: '刘子涵', role: '测试工程师', bio: '系统测试与质量保障', avatarBg: colors[5] },
    ],
  },
  {
    key: 'market',
    titleKey: 'team.deptMarket',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    members: [
      { name: '陈雨萱', role: '市场负责人', bio: '市场战略规划与品牌建设', avatarBg: colors[6] },
      { name: '林佳琪', role: '产品经理', bio: '用户研究与产品设计', avatarBg: colors[7] },
      { name: '吴思颖', role: '品牌设计师', bio: 'UI/UX设计与视觉规范', avatarBg: colors[0] },
      { name: '黄子豪', role: '商务拓展', bio: '合作伙伴对接与渠道开发', avatarBg: colors[1] },
      { name: '杨晓彤', role: '市场推广', bio: '内容营销与社交媒体运营', avatarBg: colors[2] },
    ],
  },
  {
    key: 'ops',
    titleKey: 'team.deptOps',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    members: [
      { name: '周梦琳', role: '运营负责人', bio: '团队运营与项目管理', avatarBg: colors[3] },
      { name: '孙嘉文', role: '数据运营', bio: '用户数据分析与增长策略', avatarBg: colors[4] },
      { name: '郑宇航', role: '客服支持', bio: '用户反馈处理与服务优化', avatarBg: colors[5] },
      { name: '胡晨曦', role: '行政助理', bio: '日常行政与活动组织', avatarBg: colors[6] },
    ],
  },
]
</script>

<style scoped>
/* Hero */
.team-hero {
  position: relative;
  padding: var(--space-24) 0 var(--space-16);
  text-align: center;
  overflow: hidden;
}

.team-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--surface-light) 0%, var(--surface-white) 100%);
}

.team-hero__content {
  position: relative;
  z-index: 1;
}

.team-hero__title {
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
  background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.team-hero__subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

/* Department Section */
.team-dept {
  margin-bottom: var(--space-16);
}

.team-dept__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--border-light);
}

.team-dept__title {
  font-size: var(--text-2xl);
  font-weight: 700;
}

.team-dept__count {
  font-size: var(--text-sm);
  color: var(--text-muted);
  background: var(--surface-gray);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
}

.team-dept__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-6);
}

/* Team Card */
.team-card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-8) var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.team-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.team-card__avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
}

.team-card__avatar-initial {
  color: white;
  font-size: var(--text-2xl);
  font-weight: 700;
  font-family: var(--font-display);
}

.team-card__name {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-1);
}

.team-card__role {
  font-size: var(--text-sm);
  color: var(--brand-primary);
  font-weight: 500;
  margin-bottom: var(--space-3);
}

.team-card__bio {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Culture */
.culture-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.culture-card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-10) var(--space-8);
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.culture-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.culture-card__icon {
  font-size: 2.5rem;
  margin-bottom: var(--space-4);
}

.culture-card__title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-3);
}

.culture-card__text {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .team-hero__title {
    font-size: var(--text-3xl);
  }

  .culture-grid {
    grid-template-columns: 1fr;
  }
}
</style>
