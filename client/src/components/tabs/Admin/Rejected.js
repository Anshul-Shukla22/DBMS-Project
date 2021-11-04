import { useEffect, useContext } from "react";
import AdminContext from "../../../context/admin/adminContext";
import M from "materialize-css/dist/js/materialize.min.js";
import RejectedCard from "../../layout/Admin/Counsellors/RejectedCard";
import AlertContext from "../../../context/alert/alertContext";
import Preloader from "../../layout/Preloader/Preloader";
import { Row, Col } from "react-materialize";

const Rejected = ({ tabKey, tabKeyCoun }) => {
  const adminContext = useContext(AdminContext);
  const alertContext = useContext(AlertContext);

  const { rejected, loadRejected } = adminContext;
  const { setAlert } = alertContext;

  // Load the user when dashboard is rendered
  useEffect(() => {
    M.AutoInit();
    M.updateTextFields();
    // eslint-disable-next-line
  }, []);

  if (tabKey === "counsellors") {
    if (tabKeyCoun === "rejected") {
      loadRejected();
    }
  }

  if (!rejected) {
    return (
      <div
        style={{
          marginTop: "3.52em",
        }}
      >
        <Row>
          <Col style={{ marginTop: "3em" }}>
            <Preloader />
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        marginTop: "3.52em",
      }}
    >
      <div
        style={{
          marginTop: "3.5em",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {rejected.map((item) => {
          return (
            <RejectedCard key={item.coun_id} user={item} setAlert={setAlert} />
          );
        })}
      </div>
    </div>
  );
};

export default Rejected;
