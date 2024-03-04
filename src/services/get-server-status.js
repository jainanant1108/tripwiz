const getTripWizCronJobStatus = async () => {
  let isServerAlive = false;
  await fetch("https://tripwiz-cronjob.onrender.com/ping").then((response) => {
    if (response.ok) {
      isServerAlive = true;
    } else {
      isServerAlive = false;
    }
  //  console.log("get-server-status.js : getTripWizCronJobStatus : ", response);
  });
  return isServerAlive;
};

const getCirceCronJobStatus = async () => {
  let isServerAlive = false;
  await fetch("https://circle-cronjob.onrender.com/ping").then((response) => {
    if (response.ok) {
      isServerAlive = true;
    } else {
      isServerAlive = false;
    }
  //  console.log("get-server-status.js : getCircleCronJob : ", response);
  });
  return isServerAlive;
};

export { getTripWizCronJobStatus, getCirceCronJobStatus };
