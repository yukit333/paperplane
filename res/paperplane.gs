/**
  See the original builder https://api.slack.com/tools/block-kit-builder
*/

function PaperPlane(name, icon) {
  this.name = name || "PaperPlane"
  this.icon = icon || ":airplane:"
  
  PaperPlane.prototype.send = function() {
    var jsonData = {
      "username" : this.name,
      "icon_emoji": this.icon,
      "blocks": this.blocks || [ ]
    }
  
    var options = {
      "method" : "post",
      "contentType" : "application/json",
      "payload" : JSON.stringify(jsonData)
    }
  
    var postUrl = PropertiesService.getScriptProperties().getProperty("WEBHOOK_URL")
    
    UrlFetchApp.fetch(postUrl, options)
  }
}

var PlaneFolder = {
  section: function(elem) {
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