import colors from "./Colors";
const styles = {
  greenBtnContainer: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.greenColor,
    borderWidth: 2,
    height: 40,
    borderRadius: 24,
    width: "auto",
    minWidth: 60,
    marginLeft: "auto",
    marginRight: "auto",
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  greenBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    // width: "100%",
  },
  btnImage: {
    width: 10,
    height: 20,
    marginRight: 10,
  },
  whiteOutlineButtonContainer: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#77869E",
  },
  whiteOutlineButtonText: {
    color: "#8493A9",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: "Nunito-SemiBold",
    width: "100%",
  },
};

export default styles;
