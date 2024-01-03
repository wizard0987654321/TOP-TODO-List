export default function removeElements(currentPage) {
  while (currentPage.firstChild) {
        currentPage.removeChild(currentPage.firstChild);
    }
}