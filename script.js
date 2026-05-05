window.addEventListener('scroll', () => {
  const section = document.querySelector('.scroll-section')
  const image = document.querySelector('.scaler img')

  const rect = section.getBoundingClientRect()

  const total = section.offsetHeight - window.innerHeight // ✅ define first

  console.log('rect.top:', rect.top)
  console.log('total:', total)

  let progress = -rect.top / total

  progress = Math.max(0, Math.min(progress, 1))

  console.log('progress:', progress)

  image.style.transform = `scale(${1.5 - progress * 0.5})`
})