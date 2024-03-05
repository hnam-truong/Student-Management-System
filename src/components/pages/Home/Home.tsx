import React from "react";
import StatusTag from "../../atoms/AvailableTag/AvailableTag";

const Home: React.FC = () => (
  <div>
    <StatusTag status="Active" />
    {/* Renders a green tag with "Passed" content, custom width of 100px, and a border */}

    <StatusTag status="Inactive" />
    {/* Renders a red tag with "Failed" content, using the default width and no border */}

    <StatusTag status="Unknown" />
    {/* Renders a tag with "-" content, custom width of 150px, and no border */}
  </div>
);
export default Home;
