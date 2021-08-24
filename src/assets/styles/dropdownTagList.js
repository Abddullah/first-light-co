import Colors from "./colors";
const styles = {
  listContainer: {
    position: "absolute",
    width: "80%",
    top: "8%",
    zIndex: 9999,
    left: 0,
    right: 0,
    width: "100%",
    // borderWidth: 1,
    // borderColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(89, 89, 89, 0.9)",
  },
  listItem: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.47)",
    paddingVertical: 7,
  },
  itemText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    fontFamily: "OpenSansCondensed-Bold",
    textTransform: "uppercase",
  },
};

export default styles;
