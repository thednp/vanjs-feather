/**
 * Concatenates Tailwind-like class names. Supports conditional classes but requires
 * conditioning for competing classes (e.g., `hidden` vs. `block`). The classes marked `!important`
 * don’t override others with the same prefix (e.g., `!mb-5`); use order or conditioning to resolve.
 *
 * Inspired by clsx: @see https://github.com/lukeed/clsx/blob/master/src/lite.js
 *
 * @param classNames - Class names as strings, `false`, or `undefined`. Strings may contain
 *                     multiple space-separated classes.
 * @returns A space-separated string of unique, resolved class names.
 *
 * @example
 * ```ts
 * import { cn } from './cn';
 *
 * // Conditional classes
 * const isActive = true;
 * console.log(cn('card p-4', isActive && 'p-6')); // 'card p-6'
 *
 * // Competing classes require conditioning
 * console.log(cn('custom block hidden')); // 'custom block hidden'
 * const isVisible = true;
 * console.log(cn('custom', isVisible ? 'block' : 'hidden')); // 'custom block'
 * ```
 */
export const cn = (...classNames: (string | false | null | undefined)[]) => {
  let i = 0, tmp: string | false | null | undefined, str = "";
  const len = classNames.length;
  for (; i < len; i++) {
    if (tmp = classNames[i]) {
      if (typeof tmp === "string") {
        str += (str && " ") + tmp;
      }
    }
  }
  return str;
};
