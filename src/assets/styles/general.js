import Colors from "./Colors";
const styles = {
  italicHeading: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "500",
  },
  tabFooter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "13%",
    borderTopWidth: 2,
    borderTopColor: Colors.greenColor,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 25,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
  },
};

export default styles;
