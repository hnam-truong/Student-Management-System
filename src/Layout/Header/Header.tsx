import AvatarUser from "../../Components/AvatarUser/AvatarUser";
import "./Header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header">
      <img className="header-logo" src="/assets/Logo.png" alt="@logo" />
      <div className="header-user">
        <div className="header-organization">
          <div className="wrapper-logo-content">
            <img
              className="organization-logo"
              src="/assets/organization.png"
              alt="@organization"
            />
            <span>uniGate</span>
          </div>
        </div>
        <AvatarUser />
      </div>
    </div>
  );
};

export default Header;
