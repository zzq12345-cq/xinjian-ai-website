<template>
  <div class="news-page">
    <!-- Hero -->
    <section class="news-hero">
      <div class="container">
        <h1 class="news-hero__title animate-fade-in-up">{{ $t('news.heroTitle') }}</h1>
        <p class="news-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('news.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Featured -->
    <section class="section">
      <div class="container">
        <div class="news-featured scroll-reveal">
          <div class="news-featured__img">
            <NuxtImg src="/images/news-launch.png" alt="官网上线" format="webp" />
          </div>
          <div class="news-featured__body">
            <span class="news-featured__badge">{{ $t(`news.categories.${newsItems[0].category}`) }}</span>
            <h2 class="news-featured__title">{{ newsItems[0].title }}</h2>
            <p class="news-featured__excerpt">{{ newsItems[0].excerpt }}</p>
            <span class="news-featured__date">{{ newsItems[0].date }}</span>
          </div>
        </div>

        <!-- List -->
        <div class="news-list stagger-children">
          <div v-for="(item, i) in newsItems.slice(1)" :key="i" class="news-item scroll-reveal">
            <div class="news-item__left">
              <span class="news-item__badge" :class="`news-item__badge--${item.category}`">
                {{ $t(`news.categories.${item.category}`) }}
              </span>
              <span class="news-item__date">{{ item.date }}</span>
            </div>
            <div class="news-item__content">
              <h3 class="news-item__title">{{ item.title }}</h3>
              <p class="news-item__excerpt">{{ item.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '最新动态 - 心鉴智能科技工作室',
  meta: [{ name: 'description', content: '了解心鉴智能科技工作室的最新动态。' }],
})

const newsItems = [
  {
    date: '2026年4月', title: '心鉴智能科技工作室官网正式上线',
    excerpt: '历经数月精心筹备，心鉴智能科技工作室官方网站今日正式上线。官网全面展示了工作室的品牌理念、核心产品「心音智鉴」的技术架构和功能特色，以及团队介绍和发展历程。官网支持中英双语切换。',
    category: 'milestone',
  },
  {
    date: '2026年3月', title: '心音智鉴原型机完成组装与功能验证',
    excerpt: '心音智鉴硬件终端原型机顺利完成组装，集成树莓派计算模块、5寸触控显示屏、电子听诊器和语音播报系统。经过多轮测试，各项指标均达到预期。',
    category: 'product',
  },
  {
    date: '2026年2月', title: '心音智鉴微信小程序进入内测阶段',
    excerpt: '小程序实现了设备扫码连接、检测流程引导、AI结果展示、健康档案管理和AI健康助手等核心功能。',
    category: 'product',
  },
  {
    date: '2026年1月', title: 'AI心音分类模型训练完成，准确率达95%以上',
    excerpt: '技术团队基于公开心音数据集完成了深度学习心音分类模型的训练和验证。模型已成功部署至树莓派设备，实现5秒内完成本地推理。',
    category: 'tech',
  },
  {
    date: '2025年12月', title: '心鉴智能科技工作室正式注册成立',
    excerpt: '工作室15名成员涵盖技术研发、市场推广和运营管理三大职能，将专注于AI心音检测技术的产品化和商业化。',
    category: 'milestone',
  },
  {
    date: '2025年11月', title: '心音智鉴项目立项，核心团队组建完成',
    excerpt: '项目旨在利用AI和边缘计算技术，打造面向家庭用户的心音检测智能终端。',
    category: 'milestone',
  },
]
</script>

<style scoped>
.news-hero {
  padding: calc(var(--navbar-height) + 80px) 0 80px;
  background: var(--gradient-hero);
  position: relative;
}

.news-hero__title {
  font-size: var(--text-5xl);
  font-weight: 600;
  margin-bottom: var(--space-4);
  letter-spacing: -0.03em;
  color: var(--text-inverse);
}

.news-hero__subtitle {
  font-size: var(--text-lg);
  color: var(--text-inverse-muted);
}

/* Featured */
.news-featured {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  background: var(--surface-light);
  margin-bottom: 60px;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.news-featured__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.news-featured__body {
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-featured__badge {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--brand-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: var(--space-4);
}

.news-featured__title {
  font-size: var(--text-3xl);
  font-weight: 500;
  margin-bottom: var(--space-4);
}

.news-featured__excerpt {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: var(--space-4);
  max-width: 800px;
}

.news-featured__date {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

/* News List */
.news-list {
  display: flex;
  flex-direction: column;
}

.news-item {
  display: flex;
  gap: var(--space-8);
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--border-light);
  transition: background var(--transition-fast);
}

.news-item:hover {
  background: var(--surface-light);
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

.news-item__left {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 120px;
  flex-shrink: 0;
}

.news-item__badge {
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.news-item__badge--milestone { color: var(--brand-primary); }
.news-item__badge--product { color: var(--safe-green); }
.news-item__badge--tech { color: var(--brand-tech); }

.news-item__date {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.news-item__title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--space-2);
}

.news-item__excerpt {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .news-hero {
    padding: calc(var(--navbar-height) + 48px) 0 60px;
  }

  .news-hero__title { font-size: var(--text-3xl); }
  .news-featured { grid-template-columns: 1fr; border-radius: var(--radius-lg); }
  .news-featured__img img { height: 240px; }
  .news-featured__body { padding: var(--space-6) var(--space-8); }
  .news-featured__title { font-size: var(--text-2xl); }
  .news-item { flex-direction: column; gap: var(--space-3); }
  .news-item__left { flex-direction: row; gap: var(--space-3); min-width: auto; }
}
</style>
