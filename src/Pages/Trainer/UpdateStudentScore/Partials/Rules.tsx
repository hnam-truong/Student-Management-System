/** This is function handles validate score input fields.
 * It makes sure that the score field is valid number
 * in range 0-10.
 */
import { Rule, RuleObject } from "antd/es/form";

const scoreValidator = (_: RuleObject, value: number): Promise<void> => {
  if (isNaN(value)) {
    return Promise.reject("Please enter a number.");
  }

  if (value < 0) {
    return Promise.reject("Score must be greater than or equal to 0.");
  }

  if (value > 10) {
    return Promise.reject("Score must be less than or equal to 10.");
  }

  return Promise.resolve();
};

export const rules: Rule[] = [{ validator: scoreValidator }];
