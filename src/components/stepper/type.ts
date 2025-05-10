/**
 * Props for the Stepper component.
 */
export interface StepperProps {
  /**
   * Array of step objects representing each step in the stepper.
   */
  steps: Step[];

  /**
   * Index of the current active step (0-based index).
   */
  current: number;
}

/**
 * Represents a single step in the stepper component.
 */
export interface Step {
  /**
   * Title or label of the step.
   */
  title: string;

  /**
   * Optional icon for the step, represented as a string (e.g., class name or image path).
   */
  icon?: string;
}
