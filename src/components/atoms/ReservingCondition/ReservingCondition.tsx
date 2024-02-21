/** This function is response for show all conditions from server
 * and allow user select some conditions that match with student conditions
 */
import { Checkbox, Form } from "antd";
import { IReservingCondition } from "../../../interfaces/reserving-condition.interface";

interface ReservingConditionProps {
  reservingCondition: IReservingCondition[] | null;
}
const ReservingCondition = ({
  reservingCondition,
}: ReservingConditionProps) => (
  <Form.Item
    label="Reserving conditions"
    name="ReservingConditions"
    rules={[
      {
        required: true,
        message: "Please select conditions.",
      },
    ]}
  >
    <Checkbox.Group className="checkbox-group">
      {reservingCondition?.map((condition) => (
        <Checkbox key={condition?.ID} value={condition?.ID}>
          {condition?.Name}
        </Checkbox>
      ))}
    </Checkbox.Group>
  </Form.Item>
);

export default ReservingCondition;
