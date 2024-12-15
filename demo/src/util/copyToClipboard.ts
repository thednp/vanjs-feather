const copyToClipboard = (
  e: MouseEvent & { currentTarget: HTMLButtonElement; target: Element },
) => {
  if (typeof document === "undefined") return;
  const btn = e.target.closest("button") as HTMLButtonElement;
  const pre = document.getElementById(btn.dataset.target as string);
  if (pre) {
    const textContent = pre.textContent?.trim() as string;
    navigator.clipboard.writeText(textContent + "()");
    alert(`Copied Icon Component "${textContent + "()"}" to clipboard`);
  }
};

export default copyToClipboard;
