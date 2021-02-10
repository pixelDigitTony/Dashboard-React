import Footer from "./Footer";
import Nav from "./Nav";

const Main = () => {
  const dashBoardStyle = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "32px",
    marginLeft: "7%"
  };
  const nameStyle = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "60px",
    lineHeight: "82px",
    marginLeft: "7%"
  };
  const paragraphStyle = {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "24px",
    lineHeight: "33px",
    marginLeft: "7%"
  };

  return (
    <>
      <main className="text">
        <text className="hideScreenStyleText" style={dashBoardStyle}>
          Dashboard
          <br />
        </text>
        <text className="hideScreenStyleText" style={nameStyle}>
          Hello, Derek Doyel !
        </text>
        <h5 className="hideScreenStyle" style={paragraphStyle}>
          Planning to have tiles installed at your place? <br />
          Get the best service for tile installation at your place in just few
          simple steps with The Hudson Valley.
        </h5>
        <Footer />
        <Nav />
      </main>
    </>
  );
};
export default Main;
