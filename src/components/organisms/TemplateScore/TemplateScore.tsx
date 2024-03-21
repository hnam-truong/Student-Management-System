/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Checkbox, Col, Spin, Divider, Card } from "antd";
import TableHeader from "../TableHeader/TableHeader";
import useModuleScoreStore from "../../../store/ModuleScoreStore";
import "./TemplateScore.scss";

interface TemplateScoreProps {}

const TemplateScore: React.FC<TemplateScoreProps> = () => {
  const { fetchModuleScores, moduleScore, loading } = useModuleScoreStore();
  useEffect(() => {
    fetchModuleScores();
    console.log(moduleScore);
  }, []);

  return (
    <div>
      <TableHeader isHeaderBottom={false} title="Scores" />
      <div className="mt-2">
        <div className="template-module-score">
          <h2>Choose module scores you want to send</h2>
          <Checkbox className="template-check-all">
            All module scores will be applied
          </Checkbox>
        </div>
        <Divider />
      </div>
      <Spin spinning={loading}>
        <div className="template-score-col">
          {moduleScore?.map((module) => (
            <Col key={module.ID}>
              <Card
                className="template-score-card"
                title={<Checkbox>{module.ModuleGroupName}</Checkbox>}
                bordered={false}
              >
                {module.ModuleGroup?.map((score) => (
                  <Form.Item
                    key={score.Module}
                    name={score.Module}
                    valuePropName="checked"
                  >
                    <Checkbox>{score.Name}</Checkbox>
                  </Form.Item>
                ))}
              </Card>
            </Col>
          ))}
        </div>
      </Spin>
    </div>
  );
};

export default TemplateScore;
