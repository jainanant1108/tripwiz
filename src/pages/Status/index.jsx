import React, { useRef } from "react";
import { Header } from "../../components";
import Xarrow from "react-xarrows";

const Status = () => {
  const tripWizServerRef = useRef(null);
  const tripWizCronJobRef = useRef(null);
  const circleCronJobRef = useRef(null);

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
          gridTemplateColumns: window.innerWidth > 900 ? "1fr 1fr 1fr" : "1fr",
          gridGap: "20px",
        }}
      >

        {
            console.log("window.screen.availHeight", window.screen.availWidth)
        }
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
              backgroundColor: "#83ff6e",
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
              backgroundColor: "#83ff6e",
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
              backgroundColor: "#83ff6e",
              padding: "20px 50px",
              boxShadow: "1px 1px 10px 1px #d1d1d1",
              borderRadius: "10px",
            }}
          >
            Circle Cron Job
          </h5>
        </div>
      </div>
      <Xarrow
        end={tripWizServerRef}
        start={tripWizCronJobRef}
        color="#f7c5c1"
        strokeWidth={5}
        path="smooth"
      />

      <Xarrow
        start={tripWizCronJobRef}
        end={circleCronJobRef}
        color="#f7c5c1"
        strokeWidth={5}
        path="smooth"
      />

      <Xarrow
        start={circleCronJobRef}
        end={tripWizCronJobRef}
        color="#f7c5c1"
        strokeWidth={5}
        path="smooth"
      />
    </div>
  );
};

export default Status;
