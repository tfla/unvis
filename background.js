browser.contextMenus.create({
  id: "unvis",
  type: "normal",
  title: browser.i18n.getMessage("openLinkWithUnvis"),
  contexts: ["link"]
} );

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "unvis":
      var gettingActive = browser.tabs.query({
	      currentWindow: true, active: true
      });
      console.log("Opening link unv.is/" + info.linkUrl);
      gettingActive.then(tab => {
	      console.log(tab);
	      browser.tabs.create({
		      url:"https://unv.is/" + info.linkUrl,
		      index:tab[0].index+1
	      })
      });
      break;
  }
});
