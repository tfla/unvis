browser.contextMenus.create({
  id: "unvis",
  type: "normal",
  title: browser.i18n.getMessage("openLinkWithUnvis"),
  contexts: ["link"]
} );

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "unvis":
      console.log("Opening link unv.is/" + info.linkUrl);
      browser.tabs.create({url:"https://unv.is/" + info.linkUrl})
      break;
  }
});
