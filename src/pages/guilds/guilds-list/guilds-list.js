import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/navbar/navbar";
import { Card } from "react-bootstrap";
import "./guilds-list.css";
function GuildsList() {
  const navigate = useNavigate();
  const guildsList = [
    {
      imageName: "Guild 1",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/6essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    },
    {
      imageName: "Guild 2",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/12essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    },
    {
      imageName: "Guild 3",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/10essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    },
    {
      imageName: "Guild 4",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/11essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    },
    {
      imageName: "Guild 5",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/7essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    },
    {
      imageName: "Guild 6",
      src:
        "https://jevelin.shufflehound.com/portfolio-minimalistic/wp-content/uploads/sites/33/2019/04/1essentialiving-8bEUB1cOKwA-unsplash1-420x660.jpg"
    }
  ];
  return (
    <>
      <Navbar />
      <div>
        <h2 className="label">Gallery</h2>
        <p style={{ textAlign: "center", color: "#8d8d8d" }}>
          <em>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            iaculis varius cursus.
          </em>
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "200px" }}>
        {guildsList.map((image, i) => {
          return (
            <div
              key={i}
              style={{
                margin: "0px 50px 50px 0px",
                boxShadow: "4px 8px 8px hsl(0deg 0% 0% / 38%)",
                cursor: "pointer"
              }}
              onClick={() => {
                navigate("/guilds-info");
              }}
            >
              <Card.Img
                src={image.src}
                style={{
                  width: "350px",
                  height: "300px"
                }}
              />
              <Card.Title style={{ padding: "20px" }}>
                <br />
                <strong>{image.imageName}</strong>
              </Card.Title>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GuildsList;
