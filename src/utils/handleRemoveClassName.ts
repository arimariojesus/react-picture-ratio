export const handleRemoveClassName = (
  ref: HTMLElement | null,
  className: string,
) => {
  if (ref && className) {
    ref.classList.remove(className);
  }

  return null;
};
