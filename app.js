// Get The URL
const site = window.location.hostname

//alert("Injectror - The JS has been injected into: " + site + "")

// Add Custom CSS - Fuction
const Add_Custom_Style = css => document.head.appenChild(document.createElement("style)).innerHTML = css

//Create Custom  Element - Function
function Create_Custom_Element(tage, attr_tag, attr_name, value) {
	custom_element.setAttribute(attr_tag, attr_name)
	custom_element.innerHTML = value
	document.body.append(custom_element)
}

// JS for youtube
if (site.includes("youtube.com")) {
	Add_Custom_Style('
		@import url("https://fonts.googleapis.com/css?family=Raleway");
		
		*{
			font-family: "Raleway" !important;
			color: #00ff40 !important;
		 }

		ytd-channel_about-metadata-renderer {
			zoom: 1.6;
		}

		#meta.ytd-c4-tabbed-header-renderer {
			zoom: 1.3;
		}
		
		#js-custom-element {
			font-size: 60px;
			padding: 150px 0;
			color: #ff0037 !important;
			background-color: #ffffffff2;
			position: fixed;
			top: 0;
			text-align: center;
			width: 100%;
			z-index: 999999;
		}
		
		.js-custom-element {
			font-size: 60px;
			padding: 150px 0;
			color: #008dff !important;
			background-color: #ffffffff2;
			position: fixed;
			top: 0;
			text-align: center;
			width: 100%;
			z-index: 999999;
		}
		
	')
	
	// Create_Custom_Element(
	//	"div",
	//	"id",
	//	"js-custom-element",
	//	"Custom JS Element 1"
	// )
	// Create_Custom_Element(
	//	"div",
	//	"class",
	//	"js-custom-element",
	//	"Custom JS Element 2"
	// )
}

// JS for youtube
if (site.includes("google.com")) {
		Add_Custom_Style('
		@import url("https://fonts.googleapis.com/css?family=Raleway");
		
		*{
			font-family: "Raleway" !important;
			color: #00ff40 !important;
		 }

		ytd-channel_about-metadata-renderer {
			zoom: 1.6;
		}

		#meta.ytd-c4-tabbed-header-renderer {
			zoom: 1.3;
		}
		
		#js-custom-element {
			font-size: 60px;
			padding: 150px 0;
			color: #ff0037 !important;
			background-color: #ffffffff2;
			position: fixed;
			top: 0;
			text-align: center;
			width: 100%;
			z-index: 999999;
		}
		
		.js-custom-element {
			font-size: 60px;
			padding: 150px 0;
			color: #008dff !important;
			background-color: #ffffffff2;
			position: fixed;
			top: 0;
			text-align: center;
			width: 100%;
			z-index: 999999;
		}
		
	')
	
	// Create_Custom_Element(
	//	"div",
	//	"id",
	//	"js-custom-element",
	//	"Custom JS Element 1"
	// )
	// Create_Custom_Element(
	//	"div",
	//	"class",
	//	"js-custom-element",
	//	"Custom JS Element 2"
	// )
}

if (site.includes("facebook.com")) {
	Add_Custom_Style('
	* {
		filter: invert(1) !important;
	}		
	')
	// Create_Custom_Element(
	//	"div",
	//	"id",
	//	"js-custom-element",
	//	"Custom JS Element 1"
	// )
	// Create_Custom_Element(
	//	"div",
	//	"class",
	//	"js-custom-element",
	//	"Custom JS Element 2"
	// )
}
