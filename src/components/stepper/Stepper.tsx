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
      <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center border-2  py-4 rounded-lg font-semibold ${
              index <= current
                ? "border-blue-500 text-blue-500 active"
                : "border-gray-500 text-gray-500"
            }`}
          >
            {step.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stepper;
