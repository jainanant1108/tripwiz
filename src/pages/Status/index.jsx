import React, { useEffect, useRef, useState } from "react";
import { Header } from "../../components";
import Xarrow from "react-xarrows";
import {
  getCirceCronJobStatus,
  getTripWizCronJobStatus,
} from "../../services/get-server-status";
import { set } from "react-hook-form";
import { ping } from "../../services";

const Status = () => {
  const tripWizServerRef = useRef(null);
  const tripWizCronJobRef = useRef(null);
  const circleCronJobRef = useRef(null);
  const mediumRef = useRef(null);

  const [tripWizServerStatus, setTripWizServerStatus] = useState(false);
  const [tripWizCronJobStatus, setTripWizCronJobStatus] = useState(false);
  const [circleCronJobStatus, setCircleCronJobStatus] = useState(false);

  const printTripWizServerStatus = async () => {
    const status = await ping();
    if ((status.message = "server active..")) {
      setTripWizServerStatus(true);
    } else {
      setTripWizServerStatus(false);
    }
  };

  const printTripWizCronJobStatus = async () => {
    const status = await getTripWizCronJobStatus();
    setTripWizCronJobStatus(status);
    console.log("Trip Wiz Cron Job Status : ", status);
  };

  const printCirceCronJobStatus = async () => {
    const status = await getCirceCronJobStatus();
    setCircleCronJobStatus(status);
    console.log("Circle Cron Job Status : ", status);
  };

  useEffect(() => {
    printTripWizServerStatus();
    printTripWizCronJobStatus();
    printCirceCronJobStatus();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          height: window.screen.availHeight - 423,
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          gridTemplateColumns:
            window.innerWidth > 1200 ? "1fr 1fr 1fr 1fr 1fr" : "1fr",
          gridGap: "20px",
        }}
      >
        {console.log("window.screen.availHeight", window.screen.availWidth)}
        <div></div>
        <div
          style={{
            display: "flex",
            width: "auto",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <h5
            ref={tripWizServerRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: tripWizServerStatus ? "#83ff6e" : "#ff6e6e",
              padding: "20px 50px",
              boxShadow: "1px 1px 10px 1px #d1d1d1",
              borderRadius: "10px",
            }}
          >
            Trip Wiz Server
          </h5>
        </div>

        <div
          style={{
            display: "flex",
            width: "auto",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <h5
            ref={tripWizCronJobRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: tripWizCronJobStatus ? "#83ff6e" : "#ff6e6e",
              padding: "20px 50px",
              boxShadow: "1px 1px 10px 1px #d1d1d1",
              borderRadius: "10px",
            }}
          >
            Trip Wiz Cron Job
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            width: "auto",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <h5
            ref={circleCronJobRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: circleCronJobStatus ? "#83ff6e" : "#ff6e6e",
              padding: "20px 50px",
              boxShadow: "1px 1px 10px 1px #d1d1d1",
              borderRadius: "10px",
              width: "fit-content",
              height: "fit-content",
              marginTop: window.innerWidth < 1200 ? "200px" : "0px",
              marginRight: window.innerWidth < 1200 ? "40px" : "auto",
            }}
          >
            Circle Cron Job
          </h5>
          <h5
            ref={mediumRef}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#83ff6e",
              padding: "20px 50px",
              boxShadow: "1px 1px 10px 1px #d1d1d1",
              borderRadius: "10px",
              marginTop: "200px",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            medium
          </h5>
        </div>
      </div>
      <Xarrow
        name="Trip Wiz Server to Trip Wiz Cron Job"
        end={tripWizServerRef}
        start={tripWizCronJobRef}
        color={tripWizCronJobStatus ? "#3af26c" : "#f23a3a"}
        strokeWidth={3}
        path="smooth"
      />

      <Xarrow
        name="Trip Wiz Cron job to Medium"
        start={tripWizCronJobRef}
        end={mediumRef}
        color={tripWizCronJobStatus ? "#3af26c" : "#f23a3a"}
        strokeWidth={3}
        path="smooth"
      />

      <Xarrow
        name="Medium to Trip Wiz Cron Job"
        start={mediumRef}
        end={circleCronJobRef}
        color={tripWizCronJobStatus ? "#3af26c" : "#f23a3a"}
        strokeWidth={3}
        path="smooth"
      />

      <Xarrow
        name="Circle Cron Job to Trip Wiz Cron Job"
        start={circleCronJobRef}
        end={tripWizCronJobRef}
        color={circleCronJobStatus ? "#3af26c" : "#f23a3a"}
        strokeWidth={3}
        path="smooth"
      />
    </div>
  );
};

export default Status;
