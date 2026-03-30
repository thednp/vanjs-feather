import van from "vanjs-core";
import type { ChildDom, PropsWithKnownKeys } from "vanjs-core";
import { cn } from "../util/cn";

const { dialog, div, form, button, h3 } = van.tags;

export type ModalProps = PropsWithKnownKeys<HTMLDialogElement> & {
  id: string;
  title?: string;
  class?: string;
  closeOnBackdrop?: boolean;
  onClose?: () => void;
};

// open/close helpers — mirrors daisyUI's recommended JS API [1]
export const showModal = (id: string) =>
  (document.getElementById(id) as HTMLDialogElement)?.showModal();

export const closeModal = (id: string) =>
  (document.getElementById(id) as HTMLDialogElement)?.close();

export const Modal = (
  { id, title, class: cls, closeOnBackdrop = true, onClose }: ModalProps,
  ...children: (ChildDom | ((el?: ChildDom) => ChildDom))[]
) => {
  const onDialogClose = () => onClose?.();

  return dialog(
    {
      id,
      class: cn("modal", cls),
      onclose: onDialogClose,
    },
    div(
      { class: "modal-box" },
      // close button
      form(
        { method: "dialog" },
        button({
          type: "submit",
          class:
            "btn btn-sm btn-circle btn-ghost cursor-pointer absolute right-2 top-2",
        }, "✕"),
      ),
      h3({ class: "font-bold text-lg mb-3" }, title ? title : "Notification"),
      children as ChildDom,
    ),
    // backdrop close — second form covers screen [1]
    closeOnBackdrop
      ? form(
        { method: "dialog", class: "modal-backdrop" },
        button({ type: "submit" }, "close"),
      )
      : null,
  );
};
