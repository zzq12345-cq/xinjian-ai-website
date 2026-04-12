/**
 * 滚动动画组合式函数
 * 使用 Intersection Observer 实现元素进入视口时的动画效果
 */
export function useScrollAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // 观察所有带有 scroll-reveal 类的元素
    const targets = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right'
    )
    targets.forEach((target) => observer.value?.observe(target))
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return { observer }
}
