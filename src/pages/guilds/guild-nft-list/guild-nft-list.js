import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Navbar from "../../../components/navbar/navbar";
import "./guild-nft-list.css";
function GuildNftList() {
  const navigate = useNavigate();
  return (
    <>
      <div className="nft-cover-img">
        <Navbar />
        <Card
          style={{
            backgroundColor: "white",
            width: "70%",
            height: "500px",
            margin: " 50px 0px 0px 240px"
          }}
        >
          <div className="row">
            <div className="col">
              <img
                width="60px"
                height="40px"
                src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/Layer-816.png"
                alt="Layer-816"
                style={{ margin: "20px 0px 0px 500px" }}
              />
            </div>
            <div className="col">
              <Button
                style={{
                  backgroundColor: "#000",
                  border: "none",
                  borderRadius: "0px",
                  margin: "0px 20px 0px 800px",
                  width: "100px"
                }}
                onClick={() => {
                  navigate("/guilds-upload");
                }}
              >
                Upload
              </Button>
            </div>
          </div>

          <Card.Title style={{ textAlign: "center" }}>
            Guilds NFT Lists
          </Card.Title>
          <hr />
          <div className="container">
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "60px" }}
            >
              <div className="col">NFT-1</div>
              <div className="col">NFT-2</div>
              <div className="col">NFT-3</div>
            </div>
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "60px" }}
            >
              <div className="col">NFT-4</div>
              <div className="col">NFT-5</div>
              <div className="col">NFT-6</div>
            </div>
            <div
              className="row"
              style={{ textAlign: "center", marginTop: "60px" }}
            >
              <div className="col">NFT-7</div>
              <div className="col">NFT-8</div>
              <div className="col">NFT-9</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default GuildNftList;
