import type { StepperProps } from "./type";

/**
 * Stepper Component
 *
 * A visual horizontal stepper to indicate progress through a series of steps.
 * Commonly used in multi-step forms, onboarding flows, or checkout processes.
 *
 * @component
 * @param {StepperProps} props - Component props
 * @param {Step[]} props.steps - Array of steps with a title and optional icon
 * @param {number} props.current - Index of the currently active step (zero-based)
 *
 */
const Stepper = ({ steps, current }: StepperProps) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 border-t-3 font-semibold flex lg:items-center justify-between ${
              index <= current
                ? "border-primary text-primary active"
                : "border-gray-500 text-gray-500"
            }`}
          >
            <div className="mt-3 sm:block hidden">
              <span className="text-[1.5rem]">{step.icon}</span>
              <span className="text-[1rem] lg:block hidden">{step.title}</span>
            </div>
            <span className="text-[2.5rem] sm:text-[3rem] lg:text-[5rem] leading-[4rem] font-bold opacity-40 lg:mt-2">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stepper;
