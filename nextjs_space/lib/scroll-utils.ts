export const scrollToSection = (sectionId: string) => {
  const element = document?.getElementById?.(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const showComingSoon = () => {
  if (typeof window !== 'undefined') {
    alert('Coming soon! Sign up for our beta to get early access.')
  }
}
