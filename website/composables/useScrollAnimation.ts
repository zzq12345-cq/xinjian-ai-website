/**
 * 滚动动画组合式函数
 * 使用 Intersection Observer + MutationObserver 实现元素进入视口时的动画效果
 * 支持动态路由切换后自动重新扫描新元素
 */
export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)
  const mutationObserver = ref<MutationObserver | null>(null)

  function observeTargets() {
    if (!observer.value) return
    const targets = document.querySelectorAll(
      '.scroll-reveal:not(.is-visible), .scroll-reveal-left:not(.is-visible), .scroll-reveal-right:not(.is-visible)'
    )
    targets.forEach((target) => observer.value?.observe(target))
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    )

    // 初始扫描
    observeTargets()

    // 监听 DOM 变化（路由切换时新元素插入）
    mutationObserver.value = new MutationObserver(() => {
      // 延迟一帧，等 Vue 渲染完成
      requestAnimationFrame(() => {
        observeTargets()
      })
    })

    mutationObserver.value.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
    mutationObserver.value?.disconnect()
  })

  return { observer }
}
