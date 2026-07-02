import { memo } from "react";
import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "../../lib/motion";

type StatItem = {
  value: string;
  label: string;
};

type Props = {
  stats: StatItem[];
};

function StatsRow({ stats }: Props) {
  return (
    <section className="bg-[var(--color-gold)] py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <p className="text-[var(--color-navy)] font-heading text-3xl lg:text-4xl font-semibold mb-1 font-variant-numeric: tabular-nums">
                {stat.value}
              </p>
              <p className="text-[var(--color-navy)]/70 text-sm font-medium tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(StatsRow);
