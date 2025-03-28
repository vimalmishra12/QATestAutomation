"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);
var res;

module.exports = {

	headerbandDiv: selectorFile.css.ComproC1.appShell.headerbandDiv,
	toggleSidebarBtn: selectorFile.css.ComproC1.appShell.toggleSidebarBtn,
	//Left Pane
	custLogo: selectorFile.css.ComproC1.appShell.custLogo,
	dashboardBtn: selectorFile.css.ComproC1.appShell.dashboardBtn,
	libraryBtn: selectorFile.css.ComproC1.appShell.libraryBtn,
	browseBtn: selectorFile.css.ComproC1.appShell.browseBtn,
	classesBtn: selectorFile.css.ComproC1.appShell.classesBtn,
	helpBtn: selectorFile.css.ComproC1.appShell.helpBtn,
	settingsBtn: selectorFile.css.ComproC1.appShell.settingsBtn,
	sidebarImg: selectorFile.css.ComproC1.appShell.sidebarImg,
	poweredbyTxt: selectorFile.css.ComproC1.appShell.poweredbyTxt,
	comproLogo: selectorFile.css.ComproC1.appShell.comproLogo,
	versionTxt: selectorFile.css.ComproC1.appShell.versionTxt,
	indexbtn: selectorFile.css.ComproC1.indexMenu.indexbtn,

	//Header
	notificationBtn: selectorFile.css.ComproC1.appShell.notificationBtn,
	notificationCloseBtn: selectorFile.css.ComproC1.appShell.notificationCloseBtn,
	notificationTxt: selectorFile.css.ComproC1.appShell.notificationTxt,
	noNotificationImg: selectorFile.css.ComproC1.appShell.noNotificationImg,
	grayBackdrop: selectorFile.css.ComproC1.appShell.grayBackdrop,
	languageSwitcherBtn: selectorFile.css.ComproC1.appShell.languageSwitcherBtn,
	languageList: selectorFile.css.ComproC1.appShell.languageList,
	selectedLanguage: selectorFile.css.ComproC1.appShell.selectedLanguage,
	userProfileBtn: selectorFile.css.ComproC1.appShell.userProfileBtn,
	userName: selectorFile.css.ComproC1.appShell.userName,
	emailID: selectorFile.css.ComproC1.appShell.emailID,
	userProfileHelpBtn: selectorFile.css.ComproC1.appShell.userProfileHelpBtn,
	userProfileSettingsBtn: selectorFile.css.ComproC1.appShell.userProfileSettingsBtn,
	userProfileLogoutBtn: selectorFile.css.ComproC1.appShell.userProfileLogoutBtn,
	classPlusIcon: selectorFile.css.ComproC1.appShell.classPlusIcon,
	breadcrumbbackbtn: selectorFile.css.ComproC1.appShell.breadcrumbbackbtn,
	indexBtn: selectorFile.css.ComproC1.appShell.indexBtn,
	chapterTitle: selectorFile.css.ComproC1.appShell.chapterTitle,
	indexCloseBtn: selectorFile.css.ComproC1.appShell.indexCloseBtn,
	indexTOCPanel: selectorFile.css.ComproC1.appShell.indexTOCPanel,
	inviteBtnTxt: selectorFile.css.ComproC1.appShell.inviteBtnTxt,
	inviteStudentText: selectorFile.css.ComproC1.appShell.inviteStudentText,
	addToPlaylistBtn: selectorFile.css.ComproC1.appShell.addToPlaylistBtn,
	newPlaylistOption: selectorFile.css.ComproC1.appShell.newPlaylistOption,
	tabList: selectorFile.css.ComproC1.appShell.component,
	assignBtn: selectorFile.css.ComproC1.appShell.assignBtn,
	shareBtn: selectorFile.css.ComproC1.appShell.shareBtn,
	tocPanelHeader: selectorFile.css.ComproC1.indexMenu.tocPanelHeader,
	closetocbtn: selectorFile.css.ComproC1.indexMenu.closetocbtn,
	producHeadertbtn: selectorFile.css.ComproC1.indexMenu.producHeadertbtn,
	sectiongroup: selectorFile.css.ComproC1.indexMenu.sectiongroup,
	resoursebtn: selectorFile.css.ComproC1.indexMenu.resoursebtn,
	materialbtn: selectorFile.css.ComproC1.indexMenu.materialbtn,
	indexproductbtn: selectorFile.css.ComproC1.indexMenu.indexproductbtn,
	currentlbl: selectorFile.css.ComproC1.indexMenu.currentlbl,
	infoBtn: selectorFile.css.ComproC1.tocMenu.infoBtn,
	infoTocHeading: selectorFile.css.ComproC1.tocMenu.infoTocHeading,
	closeInfoBtn: selectorFile.css.ComproC1.tocMenu.closeInfoBtn,
	chapterTitle: selectorFile.css.ComproC1.tocMenu.chapterTitle,
	productbtn: selectorFile.css.ComproC1.tocMenu.productbtn,
	bookName: selectorFile.css.ComproC1.tocMenu.bookName,
	bookIcon: selectorFile.css.ComproC1.tocMenu.bookIcon,
	resourseData: selectorFile.css.ComproC1.tocMenu.resourseData,
	libraryDropdownBtn: selectorFile.css.ComproC1.appShell.libraryDropdownBtn,
	myMaterialBtn: selectorFile.css.ComproC1.appShell.myMaterialBtn,


	isInitialized: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDocumentLoad();
		res = {
			leftPane: ((await action.getElementCount(this.custLogo + "," + this.toggleSidebarBtn)) > 0) ? true : false,
			header: ((await action.getElementCount(this.headerbandDiv)) > 0) ? true : false
		}
		return res;
	},

	getAppShellLeftPaneData: async function () {
		var obj = {
			custLogo_exists: ((await action.getElementCount(this.custLogo)) > 0) ? await action.waitForDisplayed(this.custLogo) : false,
			dashboardBtn: ((await action.getElementCount(this.dashboardBtn)) > 0) ? await action.getText(this.dashboardBtn) : null,
			browseBtn: ((await action.getElementCount(this.browseBtn)) > 0) ? await action.getText(this.browseBtn) : null,
			classesBtn: ((await action.getElementCount(this.classesBtn)) > 0) ? await action.getText(this.classesBtn) : null,
			helpBtn: ((await action.getElementCount(this.helpBtn)) > 0) ? await action.getText(this.helpBtn) : null,
			settingsBtn: ((await action.getElementCount(this.settingsBtn)) > 0) ? await action.getText(this.settingsBtn) : null,
			sidebarImg_exists: ((await action.getElementCount(this.sidebarImg)) > 0) ? await action.waitForDisplayed(this.sidebarImg) : false,
			poweredbyTxt: ((await action.getElementCount(this.poweredbyTxt)) > 0) ? await action.getText(this.poweredbyTxt) : null,
			comproLogo_exists: ((await action.getElementCount(this.comproLogo)) > 0) ? await action.waitForDisplayed(this.comproLogo) : false,
			versionTxt: ((await action.getElementCount(this.versionTxt)) > 0) ? await action.getText(this.versionTxt) : null
		};
		return obj;
	},

	getAppShellHeaderData: async function () {
		var obj = {
			notificationBtn_exists: ((await action.getElementCount(this.notificationBtn)) > 0) ? await action.waitForDisplayed(this.notificationBtn) : false,
			selectedLanguage: ((await action.getElementCount(this.selectedLanguage)) > 0) ? await action.getText(this.selectedLanguage) : null,
			userProfileBtn_exists: ((await action.getElementCount(this.userProfileBtn)) > 0) ? await action.waitForDisplayed(this.userProfileBtn) : false,
			indexBtn: ((await action.getElementCount(this.indexBtn)) > 0) ? await action.getText(this.indexBtn) : null,
			inviteBtnTxt: ((await action.getElementCount(this.inviteBtnTxt)) > 0) ? await action.getText(this.inviteBtnTxt) : null,
			addToPlaylistBtn: ((await action.getElementCount(this.addToPlaylistBtn)) > 0) ? await action.getText(this.addToPlaylistBtn) : null,
			assignBtn: ((await action.getElementCount(this.assignBtn)) > 0) ? await action.getText(this.assignBtn) : null,
			shareBtn: ((await action.getElementCount(this.shareBtn)) > 0) ? await action.getText(this.shareBtn) : null
		};
		return obj;
	},

	clickDashboardButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.dashboardBtn);
		if (true == res) {
			let dashboardPage = await require('./dashboard.page.js');
			res = await dashboardPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Dashboard Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},
	clickLibraryButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.libraryBtn);
		if (true == res) {
			let libraryPage = await require('./library.page.js');
			res = await libraryPage.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Dashboard Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickMyMaterialsButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.libraryDropdownBtn);
		if (true == res) {
			res = await action.click(this.myMaterialBtn);
			if (true == res) {
				let myMaterialsPage = await require('./myMaterials.page.js');
				res = await myMaterialsPage.isInitialized();
			}
		}
		else {
			res = res + " -- Error in clicking MyMaterial Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBrowseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.browseBtn);
		if (true == res) {
			let browse = await require('./browse.page.js');
			res = await browse.isInitialized();
		}
		else {
			res = res + " -- Error in clicking Browse Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickClassesButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.classesBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res);
		}
		else {
			res = res + " -- Error in clicking Class Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	click_PlusIconClassesTab: async function () {
		res = await action.click(this.classPlusIcon)
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + "Class plus button is clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), res + ":Add A New Book Button is NOT Clicked", "error");
		return res;
	},

	clickNotificationButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.notificationBtn);
		if (true == res) {
			await action.waitForDisplayed(this.noNotificationImg);
			res = {
				notificationTxt: ((await action.getElementCount(this.notificationTxt)) > 0) ? await action.getText(this.notificationTxt) : null,
				notificationCloseBtn_exists: ((await action.getElementCount(this.notificationCloseBtn)) > 0) ? await action.waitForDisplayed(this.notificationCloseBtn) : false,
				noNotificationImg_exists: ((await action.getElementCount(this.noNotificationImg)) > 0) ? await action.waitForDisplayed(this.noNotificationImg) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Notification Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickNotificationCloseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.notificationCloseBtn);
		if (true == res) {
			res = await action.waitForDisplayed(this.grayBackdrop, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Notification Close Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	/*getLanguageListFromDropdown: async function () {
		logger.logInto(stackTrace.get());
		res = action.click(this.languageSwitcherBtn);
		if (res == true) {
			var languageData = [];
			var languageSelector, languageCount, i;
			languageCount = action.getElementCount(this.languageList);
			for (i = 0; i < languageCount; i++) {
				languageSelector = this.languageList + i + "]";
				languageData[i] = action.getText(languageSelector);
			}
		}
		else {
			res = res + " -- Error in clicking language Selector Arrow";
			logger.logInto(stackTrace.get(), res, 'error');
		}
		return languageData;
	},

	selectLanguage: async function (lang) {
		logger.logInto(stackTrace.get());
		let languageSelector;
		languageSelector = this.languageList + "0]";
		res = action.click(languageSelector);
		return res;
	},*/

	selectLanguagefromLanguageSelector: async function (languageToSelect) {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.languageSwitcherBtn);
		await action.waitForDisplayed(this.languageList);
		if (res == true) {
			let list, i, languageListText;
			list = await action.findElements(this.languageList);
			for (i = 0; i < list.length; i++) {
				languageListText = await action.getText(list[i]);
				if (languageListText.includes(languageToSelect)) {
					res = await action.click(list[i]);
					if (res == true) {
						res = await action.getText(this.selectedLanguage);
						break;
					}
				}
			}
		}
		else {
			res = res + " -- Error in clicking languageSwitcherBtn";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickProfileButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.waitForDisplayed(this.userProfileBtn);
		res = await action.click(this.userProfileBtn);

		if (true == res) {
			await action.waitForDisplayed(this.userName);
			res = await this.getProfileData();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	getProfileData: async function () {
		await logger.logInto(await stackTrace.get());
		var obj = {
			userName: ((await action.getElementCount(this.userName)) > 0) ? await action.getText(this.userName) : null,
			emailID: ((await action.getElementCount(this.emailID)) > 0) ? await action.getText(this.emailID) : null,
			userProfileHelpBtn: ((await action.getElementCount(this.userProfileHelpBtn)) > 0) ? await action.getText(this.userProfileHelpBtn) : null,
			userProfileSettingsBtn: ((await action.getElementCount(this.userProfileSettingsBtn)) > 0) ? await action.getText(this.userProfileSettingsBtn) : null,
			userProfileLogoutBtn: ((await action.getElementCount(this.userProfileLogoutBtn)) > 0) ? await action.getText(this.userProfileLogoutBtn) : null,
			notificationTxt: ((await action.getElementCount(this.notificationTxt)) > 0) ? await action.getText(this.notificationTxt) : null,
			notificationBtn_exists: ((await action.getElementCount(this.notificationBtn)) > 0) ? await action.waitForDisplayed(this.notificationBtn) : false,
			selectedLanguage: ((await action.getElementCount(this.selectedLanguage) > 0)) ? await action.getText(this.selectedLanguage) : null,
		}
		return obj;
	},

	clickLogoutButton: async function () {
		await logger.logInto(await stackTrace.get());
		await action.waitForDisplayed(this.userProfileLogoutBtn);
		res = await action.click(this.userProfileLogoutBtn);
		if (true == res) {
			res = await require('./landing.page.js').isInitialized();
		}
		else {
			res = res + " -- Error in clicking Profile Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickBackButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.breadcrumbbackbtn);
		if (res == true) {
			await logger.logInto(await stackTrace.get(), res + "back button is clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), res + ":back button is NOT Clicked", "error");
		return res;
	},

	clickIndexButton: async function () { //to be reviewed - akhil
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.indexBtn);
		if (true == res) {
			await action.waitForDisplayed(this.chapterTitle);
			res = {
				chapterTitleTxt: ((await action.getElementCount(this.chapterTitle)) > 0) ? await action.getText(this.chapterTitle) : null,
			};
		}
		else {
			res = res + " -- Error in clicking index Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickIndexCloseButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.indexCloseBtn);
		if (true == res) {
			res = await action.waitForDisplayed(this.indexTOCPanel, undefined, true);
		}
		else {
			res = res + " -- Error in clicking Index Close Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickInviteButton: async function () { //to be reviewed - akhil
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.inviteBtnTxt);
		if (true == res) {
			res = {
				inviteBtnTxt: ((await action.getElementCount(this.inviteBtnTxt)) > 0) ? await action.getText(this.inviteBtnTxt) : null,
			};
		}
		else {
			res = res + " -- Error in clicking Invite Button Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickAddToPlaylistButton: async function () { //to be reviewed - akhil
		//page not working currently, getting crash
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.addToPlaylistBtn);
		if (true == res) {
			await action.waitForDisplayed(this.newPlaylistOption);
			res = {
				newPlaylistOption: ((await action.getElementCount(this.newPlaylistOption)) > 0) ? await action.getText(this.newPlaylistOption) : null
			};
		}
		else {
			res = res + " -- Error in clicking Add To Playlist Button";
			await logger.logInto(await stackTrace.get(), res, 'error');
		}
		return res;
	},

	clickAssignButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.assignBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res + "Assign Button clicked");
			res = await require('./createAssignment.page.js').isInitialized();
		} else
			await logger.logInto(await stackTrace.get(), res + " -- Error in clicking Assign Button", 'error');
		return res;
	},

	selectTab: async function (str) {
		await logger.logInto(await stackTrace.get());
		let i, list;
		list = await action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			if ((await action.getText(list[i])) == str) {
				res = await action.click(list[i]);
				if (res == true) {
					await logger.logInto(await stackTrace.get(), " --Component clicked");
				} else
					await logger.logInto(await stackTrace.get(), " --Component NOT clicked", "error");
				break;
			}
			res = false;
		}
		return res;
	},

	getTabsListData: async function () {
		await logger.logInto(await stackTrace.get());
		let i, list;
		let obj = {
			list: null,
			selected: null
		};
		let componentArr = [];

		list = await action.findElements(this.tabList);
		for (i = 0; i < list.length; i++) {
			componentArr[i] = await action.getText(list[i])
			if ((await action.getAttribute(list[i], "aria-selected")) == "true")
				obj.selected = componentArr[i];
		}
		obj.list = componentArr;
		await logger.logInto(await stackTrace.get(), await JSON.stringify(obj));
		return obj;
	},

	clickSettingsButton: async function () {
		await logger.logInto(await stackTrace.get());
		res = await action.click(this.settingsBtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), res + "Settings Button clicked");
			res = await require('./settings.page.js').isInitialized()
		} else
			await logger.logInto(await stackTrace.get(), res + " -- Error in clicking Settings Button", 'error');
		return res;
	},

	getData_tocPanel: async function () {
		await logger.logInto(await stackTrace.get());
		var obj;
		obj = {
			tocPanelHeader: ((await action.getElementCount(this.tocPanelHeader)) > 0) ? await action.getText(this.tocPanelHeader) : null,
			closetocbtn: ((await action.getElementCount(this.closetocbtn)) > 0) ? await action.waitForDisplayed(this.closetocbtn) : null,
			//producHeadertbtn: ((await action.getElementCount(this.producHeadertbtn)) > 0) ? await action.getText(this.producHeadertbtn) : null,
			producHeadertbtn: ((await action.getElementCount(this.producHeadertbtn)) > 0) ? await action.waitForDisplayed(this.producHeadertbtn) : null,
			materialbtn: ((await action.getElementCount(this.materialbtn)) > 0) ? await action.getText(this.materialbtn) : null,
		}
		return obj;
	},

	getData_sectionPanel: async function (sectiongroupName) {
		await logger.logInto(await stackTrace.get());
		var obj = [];
		await action.waitForDisplayed(this.sectiongroup);
		var list = await action.findElements(this.sectiongroup);
		if (sectiongroupName) {
			for (var i = 0; i < list.length; i++) {
				if ((await action.getText(this.sectiongroup + i)) == sectiongroupName) {
					obj[0] = {
						sectiongroup: ((await action.getElementCount(this.sectiongroup + i + "]")) > 0) ? await action.getText(this.sectiongroup + i + "]") : null,
					}
					break;
				}
			}
		} else {
			for (var i = 0; i < list.length; i++) {
				obj[i] = {
					sectiongroup: ((await action.getElementCount(this.sectiongroup + i + "]")) > 0) ? await action.getText(this.sectiongroup + i + "]") : null,
				}
			}
		}
		return obj;
	},

	getData_sectionValue: async function (resoursebtnName, sectiongroupName) {
		await logger.logInto(await stackTrace.get());
		var obj = [];
		await action.waitForDisplayed(this.sectiongroup);
		var list = await action.findElements(this.sectiongroup);
		await action.waitForDisplayed(this.resoursebtn);

		if (resoursebtnName) {
			for (var i = 0; i < list.length; i++) {
				if ((await action.getText(this.sectiongroup + i)) == sectiongroupName) {
					var list1 = await action.findElements(this.resoursebtn + i);
					for (var j = 0; j < list1.length; j++) {
						if ((await action.getText(this.resoursebtn + i)) == resoursebtnName) {
							obj[0] = {

								resoursebtn: ((await action.getElementCount(this.resoursebtn + i + "-" + j + "]")) > 0) ? await action.getText(this.resoursebtn + i + "-" + j + "]") : null,
							}
							break;
						}
					}
				}
			}
		} else {
			for (var i = 0; i < list.length; i++) {
				if ((await action.getText(this.sectiongroup + i)) == sectiongroupName) {
					var list1 = await action.findElements(this.resoursebtn + i);
					for (var j = 0; j < list1.length; j++) {
						obj[j] = {

							resoursebtn: ((await action.getElementCount(this.resoursebtn + i + "-" + j + "]")) > 0) ? await action.getText(this.resoursebtn + i + "-" + j + "]") : null,
						}
					}
				}
			}
		}
		return obj;
	},

	getData_productValue: async function (productbtnName) {
		await logger.logInto(await stackTrace.get());
		var obj = [];
		await action.waitForDisplayed(this.indexproductbtn);
		var list = await action.findElements(this.indexproductbtn);
		if (productbtnName) {
			for (var i = 0; i < list.length; i++) {
				if ((await action.getText(this.indexproductbtn + i)) == productbtnName) {
					obj[0] = {
						indexproductbtn: ((await action.getElementCount(this.indexproductbtn + i + "] p")) > 0) ? await action.getText(this.indexproductbtn + i + "] p") : null,
						currentlbl: ((await action.getElementCount(this.indexproductbtn + i + "] " + this.currentlbl)) > 0) ? await action.getText(this.indexproductbtn + i + "] " + this.currentlbl) : null,
					}
					break;
				}
			}
		} else {
			for (var i = 0; i < list.length; i++) {
				console.log(this.indexproductbtn + i + "]" + this.currentlbl);
				obj[i] = {

					indexproductbtn: ((await action.getElementCount(this.indexproductbtn + i + "] p")) > 0) ? await action.getText(this.indexproductbtn + i + "] p") : null,
					currentlbl: ((await action.getElementCount(this.indexproductbtn + i + "] " + this.currentlbl)) > 0) ? await action.getText(this.indexproductbtn + i + "] " + this.currentlbl) : null,
				}
			}
		}
		return obj;
	},


	click_indexbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.indexbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " indexbtn is clicked");
			res = this.getData_tocPanel();
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "indexbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_closetocbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.closetocbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " closetocbtn is clicked");
			let activityPlayerPage = require('./activityPlayer.page');
			res = activityPlayerPage.isInitialized();
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "closetocbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_producHeadertbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.producHeadertbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " producHeadertbtn is clicked");
			res = this.getData_sectionPanel();
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "producHeadertbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_sectiongroup: async function (sectiongroupName) {
		await logger.logInto(await stackTrace.get());
		var i, list, res;
		list = await action.findElements(this.sectiongroup);
		for (i = 0; i < list.length; i++) {
			if (((await action.getText(this.sectiongroup + i + "]"))) == sectiongroupName) {
				res = await action.click(list[i]);
				break;
			}
		}
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " --sectiongroup clicked");
			res = await this.getData_sectionValue("", sectiongroupName);
		}
		else
			await logger.logInto(await stackTrace.get(), " --sectiongroup NOT clicked", "error")
		return res;
	},

	click_resoursebtn: async function (sectiongroupName, resoursebtnName) {
		await logger.logInto(await stackTrace.get());
		var i, list, res, list1, j;
		list = await action.findElements(this.sectiongroup);
		for (i = 0; i < list.length; i++) {
			if ((await action.getText(this.sectiongroup + i + "]")) == sectiongroupName) {
				list1 = await action.findElements(this.resoursebtn);
				for (j = 0; j < list1.length; j++) {
					if (((await action.getText(this.resoursebtn + i + "-" + j + "]"))) == resoursebtnName) {
						res = await action.click(this.resoursebtn + i + "-" + j + "]");
						break;
					}
				}
			}
		}
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " --resoursebtn clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), " --resoursebtn NOT clicked", "error")
		return res;
	},

	click_materialbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.materialbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " materialbtn is clicked");
			res = await this.getData_productValue();
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "materialbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_indexproductbtn: async function (productbtnName) {
		await logger.logInto(await stackTrace.get());
		var i, list, res;
		list = await action.findElements(this.indexproductbtn);
		for (i = 0; i < list.length; i++) {
			if (((await action.getText(this.indexproductbtn + i + "] p"))) == productbtnName) {
				res = await action.click(list[i]);
				break;
			}
		}
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " --indexproductbtn clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), " --indexproductbtn NOT clicked", "error")
		return res;
	},

	getData_infoData: async function () {
		await logger.logInto(await stackTrace.get());
		var obj;
		obj = {
			infoTocHeading: ((await action.getElementCount(this.infoTocHeading)) > 0) ? await action.getText(this.infoTocHeading) : null,
			closeInfoBtn: ((await action.getElementCount(this.closeInfoBtn)) > 0) ? await action.waitForDisplayed(this.closeInfoBtn) : null,
			chapterTitle: ((await action.getElementCount(this.chapterTitle)) > 0) ? await action.getText(this.chapterTitle) : null,
			productbtn: ((await action.getElementCount(this.productbtn)) > 0) ? await action.getText(this.productbtn) : null,
			bookName: ((await action.getElementCount(this.bookName)) > 0) ? await action.getText(this.bookName) : null,
			bookIcon: ((await action.getElementCount(this.bookIcon)) > 0) ? await action.waitForDisplayed(this.bookIcon) : false,
		}
		return obj;
	},

	getData_resourseData: async function (resourseDataName) {
		await logger.logInto(await stackTrace.get());
		var obj = [];
		await action.waitForDisplayed(this.resourseData);
		var list = await action.findElements(this.resourseData);
		if (resourseDataName) {
			for (var i = 0; i < list.length; i++) {
				if ((await action.getText(this.resourseData + i)) == resourseDataName) {
					obj[0] = {
						resourseData: ((await action.getElementCount(this.resourseData + i + "]")) > 0) ? await action.getText(this.resourseData + i + "]") : null,
					}
					break;
				}
			}
		} else {
			for (var i = 0; i < list.length; i++) {
				obj[i] = {
					resourseData: ((await action.getElementCount(this.resourseData + i + "]")) > 0) ? await action.getText(this.resourseData + i + "]") : null,
				}
			}
		}
		return obj;
	},


	click_infoBtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.infoBtn);
		if (true == res) {
			res = this.getData_infoData()
			await logger.logInto(await stackTrace.get(), " infoBtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "infoBtn is NOT clicked", 'error');
		}
		return res;
	},

	click_closeInfoBtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.closeInfoBtn);
		if (true == res) {
			res = await action.waitForDisplayed(this.closeInfoBtn, undefined, true);
			await logger.logInto(await stackTrace.get(), " closeInfoBtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "closeInfoBtn is NOT clicked", 'error');
		}
		return res;
	},

	click_productbtn: async function () {
		await logger.logInto(await stackTrace.get());
		var res;
		res = await action.click(this.productbtn);
		if (true == res) {
			await logger.logInto(await stackTrace.get(), " productbtn is clicked");
		}
		else {
			await logger.logInto(await stackTrace.get(), res + "productbtn is NOT clicked", 'error');
		}
		return res;
	},

	click_resourseData: async function (resourseDataName) {
		await logger.logInto(await stackTrace.get());
		var i, list, res;
		list = await action.findElements(this.resourseData);
		for (i = 0; i < list.length; i++) {
			if (((await action.getText(this.resourseData + i + "]"))) == resourseDataName) {
				res = await action.click(list[i]);
				break;
			}
		}
		if (res == true) {
			await logger.logInto(await stackTrace.get(), " --resourseData clicked");
		}
		else
			await logger.logInto(await stackTrace.get(), " --resourseData NOT clicked", "error")
		return res;
	},


};