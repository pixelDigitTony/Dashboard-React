import { VscSearch } from "react-icons/vsc";

const SearchBar = ({ placeholder }) => {
  const searchStyle = {
    width: "350px",
    height: "73px",
    float: "right",
    paddingLeft: "50px",

    background: "rgba(255, 255, 255, 0.65)",
    borderRadius: "100px 0px 0px 100px",
    borderRight: "0px",
    border: "5px",

    marginTop: "50px",

    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "178%",
    /* or 178% */

    color: "#666666"
  };

  const styleEllipse = {
    background: "#C4C4C4",
    position: "absolute",

    marginTop: "60px",
    marginLeft: "5%",

    width: "48px",
    height: "48px",
    borderRadius: "100px",
    border: "5px",
    float: "left"
  };

  return (
    <div className="searchBar">
      <button className="hideScreenStyle" style={styleEllipse}></button>
      <button className="searchButton">
        <VscSearch />
      </button>
      <input
        className="hideScreenStyle"
        style={searchStyle}
        key="1"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
