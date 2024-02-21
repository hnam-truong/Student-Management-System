import Colors from "./src/constants/Colors";
import Sizes from "./src/constants/Sizes";

const antConfig = {
  components: {
    Menu: {
      itemSelectedColor: Colors.LighterBlack,
      itemSelectedBg: Colors.SlightBlue,
      collapsedWidth: Sizes.Larger,
      iconSize: Sizes.LgMedium,
      collapsedIconSize: Sizes.LgMedium,
    },
    Button: {
      primaryColor: Colors.White,
      primaryBg: Colors.Primary,
    },
  },
  token: {
    colorPrimary: Colors.Primary,
    colorSecondary: Colors.Secondary,
    borderRadius: 4,
  },
};

export default antConfig;
