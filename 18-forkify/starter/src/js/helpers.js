import {TIMEOUT_SECONDS} from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function(url){
  try {
    // Fetching data from our first API -- returns a Promise
    const fetchPromise = fetch(url);

    // Setting a race that will reject the Promise if it takes too long
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SECONDS)]);

    // Converting our fetch into JSON
    const data = await res.json();

    // Throw error if status failed -- Will send message to catch block
    if(!res.ok) throw new Error(`${data.message} (${data.status})`);

    return data;
  }catch (e){
    // Will allow us to throw the error here rather than helper file (will reject Promise)
    throw e;
  }
}

export const AJAX = async function(url, uploadData = undefined){
  try{
    // If uploadData exits, then do POST request
    const fetchPromise = uploadData ? fetch(url, {
      method: 'POST',
      headers: {
        // Sending data in JSON format
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData),
    }) : fetch(url);

    // Setting a race that will reject the Promise if it takes too long
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SECONDS)]);

    // Converting our fetch into JSON
    const data = await res.json();

    // Throw error if status failed -- Will send message to catch block
    if(!res.ok) throw new Error(`${data.message} (${data.status})`);

    return data;
  }catch (e){
    // Will allow us to throw the error here rather than helper file (will reject Promise)
    throw e;
  }
}

export const sendJSON = async function(url, uploadData){
  try {
    // Fetching data from our first API -- returns a Promise
    const fetchPromise = fetch(url, {
      method: 'POST',
      headers: {
        // Sending data in JSON format
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(uploadData),
    });

    // Setting a race that will reject the Promise if it takes too long
    const res = await Promise.race([fetchPromise, timeout(TIMEOUT_SECONDS)]);

    // Converting our fetch into JSON
    const data = await res.json();

    // Throw error if status failed -- Will send message to catch block
    if(!res.ok) throw new Error(`${data.message} (${data.status})`);

    return data;
  }catch (e){
    // Will allow us to throw the error here rather than helper file (will reject Promise)
    throw e;
  }
}