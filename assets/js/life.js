(() => {
  const dialog = document.querySelector(".life-lightbox");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("figcaption");
  document.querySelectorAll(".life-photo-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      const figure = link.closest("figure");
      const detail = figure.querySelector(".life-caption");
      caption.textContent = `${figure.querySelector(".life-place").textContent} — ${figure.querySelector(".life-date").textContent}${detail ? " · " + detail.textContent : ""}`;
      dialog.showModal();
    });
  });
  dialog.querySelector(".life-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
