/**
 * 数字计数动画组合式函数
 */
export function useCountUp(target: Ref<number>, duration = 2000) {
  const current = ref(0)
  const hasAnimated = ref(false)

  function animate() {
    if (hasAnimated.value) return
    hasAnimated.value = true

    const startTime = performance.now()
    const startValue = 0
    const endValue = target.value

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4)
      current.value = Math.round(startValue + (endValue - startValue) * eased)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  return { current, animate }
}
