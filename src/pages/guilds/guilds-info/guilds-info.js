import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "../../../components/navbar/navbar";
import "./guilds-info.css";

function GuildsInfo() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-sm-6">
          <img
            className="cover-img"
            src="https://www.ifyougiveablondeakitchen.com/wp-content/uploads/2018/06/triple-berry-pie-2020-3-769x1024.jpg"
            alt=""
          />
        </div>
        <div className="col-sm-5">
          <div style={{ margin: "200px 0px 0px 0px" }}>
            <h1 className="guild-title">Guilds Name</h1>
            <p className="guild-description">
              (Dummy description of lorem) lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Suspendisse sagittis tortor eget
              sodales ultrices. Pellentesque bibendum condimentum neque, nec
              iaculis augue ultrices ac. Fusce interdum viverra aliquet.
            </p>
            <Button
              style={{
                backgroundColor: "#000",
                border: "none",
                borderRadius: "0px",
                margin: "20px 200px 0px 10px"
              }}
              onClick={() => {
                navigate("/guilds-nft-list");
              }}
            >
              Join
            </Button>
            <Button
              style={{
                backgroundColor: "#000",
                border: "none",
                borderRadius: "0px",
                margin: "20px 200px 0px 10px"
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuildsInfo;
