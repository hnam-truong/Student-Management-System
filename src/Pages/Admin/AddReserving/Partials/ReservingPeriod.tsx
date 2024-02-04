/** This function is response for choosing reserved period.
 * This range must not exceed 6 months.
 */
import { DatePicker, Form } from "antd";
import { Dayjs } from "dayjs";
import React, { useState } from "react";
import { RangeValue } from "./AddReservingInterface";

const ReservingPeriod: React.FC = () => {
  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);
  const disabledDate = (current: Dayjs) => {
    if (!dates || !dates[0] || !dates[1]) {
      return false;
    }

    const tooLate = current.diff(dates[0], "months") >= 6;
    const tooEarly = dates[1].diff(current, "months") >= 6;

    return tooEarly || tooLate;
  };
  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <Form.Item
      label="Reserving period"
      name="ReservingPeriod"
      rules={[
        {
          required: true,
          message: "Please select a period",
        },
        {
          validator: (_, value) => {
            if (!value || value[0] === null || value[1] === null) {
              return Promise.reject("Please select a period");
            }

            const startDate = value[0];
            const endDate = value[1];

            // Check if the date range is not exceed 6 months
            if (endDate.diff(startDate, "months") <= 6) {
              return Promise.resolve();
            } else {
              return Promise.reject("Reserving period is not exceed 6 months.");
            }
          },
        },
      ]}
    >
      <RangePicker
        value={dates || value}
        disabledDate={disabledDate}
        onCalendarChange={(val) => {
          setDates(val);
        }}
        onChange={(val) => {
          setValue(val);
        }}
        onOpenChange={onOpenChange}
        changeOnBlur
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
};

export default ReservingPeriod;
