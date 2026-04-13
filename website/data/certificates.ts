/**
 * 证书数据 — 单一数据源
 * 被 CredentialsShowcase.vue 和 team.vue 共同引用
 */

export interface Certificate {
  img: string
  label: string
}

export const allCertificates: Certificate[] = [
  // 专利 (5)
  { img: '/images/credentials/patent-heart-detector.jpeg', label: '外观设计专利：心音检测仪' },
  { img: '/images/credentials/patent-recyclable-box.jpeg', label: '实用新型专利：可循环外卖盒' },
  { img: '/images/credentials/patent-ev-charging.jpeg', label: '实用新型专利：新能源充电系统' },
  { img: '/images/credentials/patent-road-detection.jpeg', label: '外观设计专利：道路颠簸检测' },
  { img: '/images/credentials/patent-motherboard-welder.jpeg', label: '外观设计专利：计算机主板焊接器' },
  // 软著 (4)
  { img: '/images/credentials/copyright-heart-detection-cert.jpeg', label: '软著：心音异常检测平台' },
  { img: '/images/credentials/copyright-ml-training-cert.jpeg', label: '软著：计算机机器学习模型训练平台' },
  { img: '/images/credentials/copyright-road-detection-system.jpeg', label: '软著：道路颠簸检测系统' },
  { img: '/images/credentials/copyright-heart-data-analysis.jpeg', label: '软著：心音数据管理分析系统' },
  // 论文 (6)
  { img: '/images/credentials/paper-ei-1.jpeg', label: 'EI论文 (1)' },
  { img: '/images/credentials/paper-ei-1-detail.jpeg', label: 'EI论文详情 (1)' },
  { img: '/images/credentials/paper-ei-2.jpeg', label: 'EI论文 (2)' },
  { img: '/images/credentials/paper-ei-2-detail.jpeg', label: 'EI论文详情 (2)' },
  { img: '/images/credentials/paper-ei-3.jpeg', label: 'EI论文 (3)' },
  { img: '/images/credentials/paper-core-journal.jpeg', label: '中国核心期刊论文' },
]
