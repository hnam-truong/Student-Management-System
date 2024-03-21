/** This function component is response for handle update scores of one student by
 * passed a student id. User can input all scores and each of these in range 0-10.
 * If not, it will throw an error message. When user input scores on Quiz and
 * ASM columns, it will automatically calculate the average score and reflect in
 * UI when user submit.
 */
import React, { useEffect, useState } from "react";
import { Form, Spin } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import FormQuizTable from "../../atoms/FormQuizTable/FormQuizTable";
import FormASMTable from "../../atoms/FormASMTable/FormASMTable";
import FormMockTable from "../../atoms/FormMockTable/FormMockTable";
import FormFinalTable from "../../atoms/FormFinalTable/FormFinalTable";
import { useSingleScoreStore } from "../../../store/ScoreStore";
import FormFooter from "../../molecules/FormFooter/FormFooter";
import StatusTag from "../../atoms/StatusTag/StatusTag";
import { IScore } from "../../../interfaces/score.interface";
import "./EditScore.scss";
import RouterEndpoints from "../../../constants/RouterEndpoints";
import { getCourseStatus } from "../../../utils/GenerateStatus";
import { BackButton } from "../../atoms/CustomButton/CustomButton";

const EditScore: React.FC = () => {
  const id = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const studentID = id?.id || "";
  const { getStudentScoreByID, aScore, putStudentScore, loading } =
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

  // These functions handle form submission.
  const onFinish = async (values: IScore) => {
    try {
      await putStudentScore(values, studentID);
      setUpdateSuccess(true);
      form.setFieldsValue(values);
    } catch (err) {
      console.error("Update scores failed: ", err);
    }
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };
  // These functions handle update average score of table ASM and Quiz
  const handleUpdateAverageASM = (updatedAverage: number) => {
    form.setFieldsValue({ AvgASM: updatedAverage });
  };
  const handleUpdateAverageQuiz = (updatedAverage: number) => {
    form.setFieldsValue({ AvgQuiz: updatedAverage });
  };

  const handleCancel = () => {
    navigate(RouterEndpoints.ClassesManagement);
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
          element: <FormFinalTable totalScore={aScore} />,
          title: "Final",
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
          element: <FormMockTable mockScore={aScore} />,
          title: "Mock",
        },
      ],
    },
  ];
  return loading ? (
    <div className="spin-container">
      <Spin />
    </div>
  ) : (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      name="EditScore"
    >
      <div className="back-btn">
        <BackButton />
      </div>
      <div className="form-wrapper">
        {formTables.map((item) => (
          <div key={item.key} className="form-wrapper__container">
            <div className="form-header">
              <h2>{item.title}</h2>
              <div>
                <StatusTag
                  status={item.status || null}
                  content={getCourseStatus(item.status)}
                  isBorder
                />
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
      <div className="centered">
        <FormFooter handleCancel={handleCancel} formName="EditScore" />
      </div>
    </Form>
  );
};

export default EditScore;
