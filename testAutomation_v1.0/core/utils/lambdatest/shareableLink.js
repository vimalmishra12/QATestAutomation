"use strict";

const axios = require("axios");

async function generateShareableLink({ entityId, expiresAt = 30 }) {
  if (!entityId) {
    console.warn("⚠️ [LT] entityId not provided, skipping shareable link generation");
    return null;
  }

  const cap = global.capabilities?.[0] || {};
const ltOptions = cap["LT:Options"] || {};

    // ✅ App automation ONLY if app capability exists
    const isAppRun = !!cap.app || !!ltOptions.app;

    const entityType = isAppRun
      ? "App Automation Build"
      : "Automation Build";


  // const isAppRun = !!global.capabilities?.[0]?.platformName;
  // const entityType = isAppRun
  //   ? "App Automation Build"
  //   : "Automation Build";

  const LT_USERNAME = process.env.LT_USERNAME;
  const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

  if (!LT_USERNAME || !LT_ACCESS_KEY) {
    console.warn("⚠️ [LT] Credentials missing, cannot generate shareable link");
    return null;
  }

  const url =
    "https://api.lambdatest.com/lshs/api/v1.0/share-item/generate-sharable-link";

  try {
    const response = await axios.post(
      url,
      {
        entityIds: [entityId],
        entityType,
        expiresAt
      },
      {
        auth: {
          username: LT_USERNAME,
          password: LT_ACCESS_KEY
        },
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // ✅ LambdaTest returns ready-to-use URL
    const shareUrl =
      response?.data?.shareIdUrl ||
      (response?.data?.shareId
        ? `https://automation.lambdatest.com/share?shareId=${response.data.shareId}&isThemeEnabled=true&themeVersion=v2`
        : null);

    if (shareUrl) {
      // console.log("🔗 [LT] Shareable Build Link:");
      // console.log(shareUrl);
      // ✅ MAKE IT AVAILABLE FOR MAILER
      process.env.LT_SHARE_URL = shareUrl;

    } else {
      console.warn("⚠️ [LT] Share link generated but URL missing");
    }

    return shareUrl;
  } catch (err) {
    console.error(
      "❌ [LT] Failed to generate shareable link:",
      err.response?.data || err.message
    );
    return null;
  }
}

// 👇 Allow this file to run directly from CLI (Semaphore, local debug)
if (require.main === module) {
  (async () => {
    try {
      const { getLatestBuildId } = require("./getBuildId");

      const buildId = await getLatestBuildId();
      if (!buildId) process.exit(0);

      const shareUrl = await generateShareableLink({ entityId: buildId });

      // ✅ ONLY print URL for CI
      if (shareUrl) {
        process.stdout.write(shareUrl);
      }
    } catch (err) {
      process.exit(0);
    }
  })();
}




module.exports = { generateShareableLink };




