/**
  See the original builder https://api.slack.com/tools/block-kit-builder
*/

var PlaneFolder = {
  section: (elem) => {
    return {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": elem
      }
    }
  },
  devider: { "type": "divider" }
}