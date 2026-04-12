<template>
  <div class="news-page">
    <!-- Hero -->
    <section class="news-hero">
      <div class="news-hero__bg"></div>
      <div class="container news-hero__content">
        <h1 class="news-hero__title animate-fade-in-up">{{ $t('news.heroTitle') }}</h1>
        <p class="news-hero__subtitle animate-fade-in-up" style="animation-delay: 0.1s;">
          {{ $t('news.heroSubtitle') }}
        </p>
      </div>
    </section>

    <!-- Featured News -->
    <section class="section">
      <div class="container">
        <div class="news-featured scroll-reveal" v-if="newsItems.length">
          <div class="news-featured__badge">
            {{ $t(`news.categories.${newsItems[0].category}`) }}
          </div>
          <h2 class="news-featured__title">{{ newsItems[0].title }}</h2>
          <p class="news-featured__excerpt">{{ newsItems[0].excerpt }}</p>
          <div class="news-featured__meta">
            <span class="news-featured__date">{{ newsItems[0].date }}</span>
          </div>
        </div>

        <!-- News Timeline -->
        <div class="news-timeline">
          <div v-for="(item, i) in newsItems.slice(1)" :key="i" class="news-timeline__item scroll-reveal">
            <div class="news-timeline__dot" :class="`news-timeline__dot--${item.category}`"></div>
            <div class="news-timeline__card">
              <div class="news-timeline__card-header">
                <span class="news-timeline__badge" :class="`news-timeline__badge--${item.category}`">
                  {{ $t(`news.categories.${item.category}`) }}
                </span>
                <span class="news-timeline__date">{{ item.date }}</span>
              </div>
              <h3 class="news-timeline__title">{{ item.title }}</h3>
              <p class="news-timeline__excerpt">{{ item.excerpt }}</p>
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
  meta: [{ name: 'description', content: '了解心鉴智能科技工作室的最新动态，包括产品进展、技术突破和团队里程碑。' }],
})

const newsItems = [
  {
    date: '2026年4月',
    title: '心鉴智能科技工作室官网正式上线',
    excerpt: '历经数月精心筹备，心鉴智能科技工作室官方网站今日正式上线。官网全面展示了工作室的品牌理念、核心产品「心音智鉴」的技术架构和功能特色，以及团队介绍和发展历程。官网支持中英双语切换，面向全球用户和合作伙伴提供信息服务。',
    category: 'milestone',
  },
  {
    date: '2026年3月',
    title: '心音智鉴原型机完成组装与功能验证',
    excerpt: '心音智鉴硬件终端原型机顺利完成组装，集成树莓派计算模块、5寸触控显示屏、电子听诊器和语音播报系统。经过多轮测试，设备在心音采集质量、AI推理速度和用户交互体验方面均达到预期指标。',
    category: 'product',
  },
  {
    date: '2026年2月',
    title: '心音智鉴微信小程序进入内测阶段',
    excerpt: '基于微信原生开发的心音智鉴小程序正式进入内部测试阶段。小程序实现了设备扫码连接、检测流程引导、AI结果展示、健康档案管理和AI健康助手等核心功能，界面设计参考丁香医生风格，简洁专业。',
    category: 'product',
  },
  {
    date: '2026年1月',
    title: 'AI心音分类模型训练完成，准确率达95%以上',
    excerpt: '技术团队基于公开心音数据集完成了深度学习心音分类模型的训练和验证。模型支持识别正常心音、收缩期杂音、舒张期杂音、额外心音等多种类型，在测试集上的分类准确率达到95%以上。模型已成功部署至树莓派设备，实现5秒内完成本地推理。',
    category: 'tech',
  },
  {
    date: '2025年12月',
    title: '心鉴智能科技工作室正式注册成立',
    excerpt: '心鉴智能科技工作室正式完成工商注册，标志着团队从项目孵化阶段迈入正式运营。工作室15名成员涵盖技术研发、市场推广和运营管理三大职能，将专注于AI心音检测技术的产品化和商业化。',
    category: 'milestone',
  },
  {
    date: '2025年11月',
    title: '心音智鉴项目立项，核心团队组建完成',
    excerpt: '在深入调研家庭心脏健康管理痛点后，心音智鉴项目正式立项。项目旨在利用AI和边缘计算技术，打造一款面向家庭用户的心音检测智能终端。核心团队成员来自计算机、电子信息和生物医学工程等专业背景，团队组建工作顺利完成。',
    category: 'milestone',
  },
]
</script>

<style scoped>
/* Hero */
.news-hero {
  position: relative;
  padding: var(--space-24) 0 var(--space-16);
  text-align: center;
  overflow: hidden;
}

.news-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--surface-light) 0%, var(--surface-white) 100%);
}

.news-hero__content {
  position: relative;
  z-index: 1;
}

.news-hero__title {
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: var(--space-4);
}

.news-hero__subtitle {
  font-size: var(--text-xl);
  color: var(--text-secondary);
}

/* Featured */
.news-featured {
  background: linear-gradient(135deg, var(--brand-primary-50), var(--surface-light));
  border-radius: var(--radius-xl);
  padding: var(--space-12) var(--space-10);
  margin-bottom: var(--space-16);
  border: 1px solid var(--brand-primary-100);
  position: relative;
  overflow: hidden;
}

.news-featured::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent));
}

.news-featured__badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  background: var(--brand-primary);
  color: white;
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  margin-bottom: var(--space-4);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.news-featured__title {
  font-size: var(--text-3xl);
  font-weight: 800;
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

/* Timeline */
.news-timeline {
  position: relative;
  padding-left: var(--space-10);
}

.news-timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border-light);
}

.news-timeline__item {
  position: relative;
  margin-bottom: var(--space-8);
}

.news-timeline__dot {
  position: absolute;
  left: calc(-1 * var(--space-10) + 10px);
  top: var(--space-5);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--brand-primary);
  border: 3px solid var(--surface-white);
  box-shadow: 0 0 0 2px var(--brand-primary);
}

.news-timeline__dot--milestone { background: var(--brand-primary); box-shadow: 0 0 0 2px var(--brand-primary); }
.news-timeline__dot--product { background: var(--safe-green); box-shadow: 0 0 0 2px var(--safe-green); }
.news-timeline__dot--tech { background: #3B82F6; box-shadow: 0 0 0 2px #3B82F6; }

.news-timeline__card {
  background: var(--surface-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-light);
  transition: all var(--transition-base);
}

.news-timeline__card:hover {
  box-shadow: var(--shadow-md);
}

.news-timeline__card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-3);
}

.news-timeline__badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}

.news-timeline__badge--milestone { background: var(--brand-primary-50); color: var(--brand-primary); }
.news-timeline__badge--product { background: var(--safe-green-bg); color: var(--safe-green); }
.news-timeline__badge--tech { background: #EFF6FF; color: #3B82F6; }

.news-timeline__date {
  font-size: var(--text-sm);
  color: var(--text-muted);
}

.news-timeline__title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-2);
}

.news-timeline__excerpt {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .news-hero__title {
    font-size: var(--text-3xl);
  }

  .news-featured {
    padding: var(--space-8) var(--space-6);
  }

  .news-featured__title {
    font-size: var(--text-2xl);
  }
}
</style>
