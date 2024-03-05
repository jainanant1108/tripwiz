const getTripWizCronJobStatus = async () => {
  let isServerAlive = false;
  try{
    await fetch("https://tripwiz-cronjob.onrender.com/ping").then((response) => {
    if (response.ok) {
      isServerAlive = true;
    } else {
      isServerAlive = false;
    }
  //  console.log("get-server-status.js : getTripWizCronJobStatus : ", response);
  });
  }
  catch(err){
    isServerAlive = false;
    console.log("get-server-status.js : getTripWizCronJobStatus : ", err);
  }
  
  return isServerAlive;
};

const getCirceCronJobStatus = async () => {
  let isServerAlive = false;
  try{
    await fetch("https://circle-cronjob.onrender.com/ping").then((response) => {
      if (response.ok) {
        isServerAlive = true;
      } else {
        isServerAlive = false;
      }
    //  console.log("get-server-status.js : getCircleCronJob : ", response);
    });
  }
  catch(err){
    isServerAlive = false;
    console.log("get-server-status.js : getCirceCronJobStatus : ", err);
  }
  
  return isServerAlive;
};

export { getTripWizCronJobStatus, getCirceCronJobStatus };
