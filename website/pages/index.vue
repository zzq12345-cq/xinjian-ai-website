<template>
  <div>
    <HomeHeroSection />
    <HomeTrustBar />
    <HomeCredentialsShowcase />
    <HomePainSolution />
    <HomeFeatureHighlights />
    <HomeHowItWorks />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '心鉴智能科技工作室 - AI心音检测，守护家庭心脏健康',
  meta: [
    {
      name: 'description',
      content: '心鉴智能科技工作室致力于AI心音检测技术研发，旗下产品「心音智鉴」通过树莓派边缘设备+微信小程序，为家庭用户提供便捷的心脏健康自检服务。',
    },
  ],
})
</script>
