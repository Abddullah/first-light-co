import Colors from "./colors";
const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  userName: {
    color: "white",
    fontSize: 23,
    fontFamily: "OpenSansCondensed-Bold",
  },
  status: {
    color: "white",
    fontSize: 23,
    fontFamily: "OpenSansCondensed-Bold",
    textTransform: "uppercase",
  },
  videoMainContainer: {
    position: "relative",
  },

  titleContainer: {
    backgroundColor: "rgba(196, 196, 196, 0.4)",
    // opacity: 0.4,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 5,
    left: 15,
    right: 15,
    zIndex: 99,
  },
  tagBtn: {
    backgroundColor: "#C4C4C4",
    borderRadius: 40,
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 10,
  },
};

export default styles;
