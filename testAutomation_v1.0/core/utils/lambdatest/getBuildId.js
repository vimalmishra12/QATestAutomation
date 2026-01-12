"use strict";

const axios = require("axios");

async function getLatestBuildId() {
  const LT_USERNAME = process.env.LT_USERNAME;
  const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

  if (!LT_USERNAME || !LT_ACCESS_KEY) {
    console.warn("⚠️ [LT] Credentials missing");
    return null;
  }

  try {
    const response = await axios.get(
      "https://api.lambdatest.com/automation/api/v1/builds",
      {
        auth: {
          username: LT_USERNAME,
          password: LT_ACCESS_KEY,
        },
        params: {
          limit: 1,
        },
      }
    );

    return response?.data?.data?.[0]?.build_id || null;
  } catch (err) {
    console.error("❌ [LT] Unable to fetch buildId", err.message);
    return null;
  }
}

module.exports = { getLatestBuildId };
