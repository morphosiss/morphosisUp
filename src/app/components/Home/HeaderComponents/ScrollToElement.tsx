const scrollToElement = (elementId: string, offset: number) => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = offset;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export default scrollToElement;
