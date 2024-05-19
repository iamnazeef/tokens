import global from '../global';

const { color } = global;

const reference = {
  light: {
    entriBlue: {
      default: color.primary.blue[500],
      onBlue: color.neutrals.pureWhite,
      blueContainer: color.primary.blue[50],
      onBlueContainer: color.primary.blue[800],
      blueHover: color.primary.blue[300],
    },
  },
  dark: {
    entriBlue: {
      default: color.primary.blue[400],
      onBlue: color.primary.blue[900],
      blueContainer: color.primary.blue[900],
      onBlueContainer: color.primary.blue[100],
      blueHover: color.primary.blue[300],
    },
  },
};

export default reference;
