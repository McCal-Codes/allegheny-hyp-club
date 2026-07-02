import type { Variants } from "framer-motion";

// Shared animation variants for consistent motion across the site.
// All animations only trigger when the element enters the viewport (whileInView).

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

// Use with viewport={{ once: true, margin: "-80px" }} so animations
// fire once as elements scroll into view, not on every scroll pass.
export const viewportOnce = { once: true, margin: "-80px" } as const;
