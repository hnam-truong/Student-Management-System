/** This function component is response for handle update scores of one student by
 * passed a student id. User can input all scores and each of these in range 0-10.
 * If not, it will throw an error message. When user input scores on Quiz and
 * ASM columns, it will automatically calculate the average score and reflect in
 * UI when user submit.
 */
import React, { useEffect, useState } from "react";
import { Form } from "antd";
import FormQuizTable from "./Partials/FormQuizTable";
import FormASMTable from "./Partials/FormASMTable";
import FormMockTable from "./Partials/FormMockTable";
import FormTotalTable from "./Partials/FormTotalTable";
import { useParams } from "react-router-dom";
import { useSingleScoreStore } from "../../../Store";
import { useForm } from "antd/es/form/Form";
import "./UpdateStudentScore.scss";
import FormFooter from "./Partials/FormFooter";
import StatusButton from "../../../Components/StatusButton/StatusButton";
const UpdateStudentScore: React.FC = () => {
  const id = useParams();
  const [form] = useForm();
  const studentID = id?.id || "";
  const { getStudentScoreByID, aScore, putStudentScore } =
    useSingleScoreStore();
  const [isUpdateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    getStudentScoreByID(studentID);
  }, [getStudentScoreByID, studentID]);

  useEffect(() => {
    if (isUpdateSuccess) {
      // Fetch the updated data after the update is successful
      getStudentScoreByID(studentID);
      setUpdateSuccess((prevState) => !prevState);
    }
  }, [aScore, studentID, getStudentScoreByID, isUpdateSuccess]);

  //These functions handle form submission.
  const onFinish = async (values: any) => {
    try {
      await putStudentScore(values, studentID);
      setUpdateSuccess(true);
      form.setFieldsValue(values);
    } catch (err) {
      console.error("Update scores failed: ", err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //These functions handle update average score of table ASM
  //and Quiz.
  const handleUpdateAverageASM = (updatedAverage: number) => {
    form.setFieldsValue({ AvgASM: updatedAverage });
  };
  const handleUpdateAverageQuiz = (updatedAverage: number) => {
    form.setFieldsValue({ AvgQuiz: updatedAverage });
  };
  const formTables = [
    {
      key: "1",
      title: "FEE",
      status: aScore?.Status,
      children: [
        {
          key: "1",
          element: (
            <FormQuizTable
              quizScore={aScore}
              onUpdateAverage={handleUpdateAverageQuiz}
            />
          ),
          title: "Quiz",
        },
        {
          key: "2",
          element: (
            <FormASMTable
              asmScore={aScore}
              onUpdateAverage={handleUpdateAverageASM}
            />
          ),
          title: "Assignment",
        },
        {
          key: "3",
          element: <FormMockTable mockScore={aScore} />,
          title: "Mock",
        },
      ],
    },
    {
      key: "2",
      title: "MOCK",
      status: aScore?.MockStatus,
      children: [
        {
          key: "4",
          element: <FormTotalTable totalScore={aScore} />,
          title: "Final Total",
        },
      ],
    },
  ];
  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="form-wrapper">
        {formTables.map((item) => (
          <div key={item.key} className="form-wrapper__container">
            <div className="form-header">
              <h2>{item.title}</h2>
              <div>
                <StatusButton status={item.status} isInTable={false} />
              </div>
            </div>
            {item.children.map((child) => (
              <div className="form-wrapper__content" key={child.key}>
                <div className="box-title">
                  <strong>{child.title}</strong>
                </div>
                {child.element}
              </div>
            ))}
          </div>
        ))}
      </div>
      <FormFooter />
    </Form>
  );
};

export default UpdateStudentScore;
