import { Button } from "react-bootstrap";
import Navbar from "../../components/navbar/navbar";
import "./dao-dashboard.css";
function Dashboard() {
  const dashboardData = [
    {
      id: 1,
      uri: "uri 1",
      status: "Accept"
    },
    {
      id: 2,
      uri: "uri 2",
      status: "Reject"
    },
    {
      id: 3,
      uri: "uri 3",
      status: "Reject"
    },
    {
      id: 4,
      uri: "uri 4",
      status: "Accept"
    }
  ];
  return (
    <>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Token_ID</th>
            <th>Token_URI</th>
            <th>Praposal_Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dashboardData.map((data, i) => {
            return (
              <>
                <tr>
                  <td key={i}>{data.id}</td>
                  <td>{data.uri}</td>
                  <td>{data.status}</td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        fontSize: "10px"
                      }}
                    >
                      UpVote
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "0px",
                        margin: "0px 0px 0px 10px",
                        fontSize: "10px"
                      }}
                    >
                      DownVote
                    </Button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
