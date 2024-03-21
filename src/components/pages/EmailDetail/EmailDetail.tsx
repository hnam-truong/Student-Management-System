import { useParams } from "react-router";
import { useEffect } from "react";
import { useSingleEmailStore } from "../../../store/EmailStore";
import ViewEmailDetail from "../../molecules/ViewEmailDetail/ViewEmailDetail";

const EmailDetail = () => {
  const { id } = useParams();
  const { aEmail, getEmailByID } = useSingleEmailStore();
  useEffect(() => {
    getEmailByID(id || "");
  }, [id, getEmailByID]);
  return <ViewEmailDetail data={aEmail ?? null} />;
};

export default EmailDetail;
