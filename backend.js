// Declare Assets and Things

document.write(`<style>
* { padding: 0; margin: 0; box-sizing: border-box; }

body {
	font-family: Inter, system-ui, sans-serif;
	font-size: 16px;
	text-rendering: optimizespeed;
	background-color: #f3f6f7;
	min-height: 100vh;
}

img,
svg {
	vertical-align: middle;
	z-index: 1;
}

img {
	max-width: 100%;
	max-height: 100%;
	border-radius: 5px;
}

td img {
	max-width: 1.5em;
	max-height: 2em;
	object-fit: cover;
}

body,
a,
svg,
.layout.current,
.layout.current svg,
.go-up {
	color: #333;
	text-decoration: none;
}

#layout-list, #layout-grid {
	cursor: pointer;
}

.wrapper {
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
}

header,
.meta {
	padding-left: 5%;
	padding-right: 5%;
}

td a {
	color: #006ed3;
	text-decoration: none;
}

td a:hover {
	color: #0095e4;
}

td a:visited {
	color: #800080;
}

td a:visited:hover {
	color: #b900b9;
}

th:first-child,
td:first-child {
	width: 5%;
}

th:last-child,
td:last-child {
	width: 5%;
}

.size,
.timestamp {
	font-size: 14px;
}

.grid .size {
	font-size: 12px;
	margin-top: .5em;
	color: #496a84;
}

header {
	padding-top: 15px;
	padding-bottom: 15px;
	box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 10%);
}

.breadcrumbs {
	text-transform: uppercase;
	font-size: 10px;
	letter-spacing: 1px;
	color: #939393;
	margin-bottom: 5px;
	padding-left: 3px;
}

h1 {
	font-size: 20px;
	font-family: Poppins, system-ui, sans-serif;
	font-weight: normal;
	white-space: nowrap;
	overflow-x: hidden;
	text-overflow: ellipsis;
	color: #c5c5c5;
}

h1 a,
th a {
	color: #000;
}

h1 a {
	padding: 0 3px;
	margin: 0 1px;
}

h1 a:hover {
	background: #ffffc4;
}

h1 a:first-child {
	margin: 0;
}

header,
main {
	background-color: white;
}

main {
	margin: 3em auto 0;
	border-radius: 5px;
	box-shadow: 0 2px 5px 1px rgb(0 0 0 / 5%);
}

.meta {
	display: flex;
	gap: 1em;
	font-size: 14px;
	border-bottom: 1px solid #e5e9ea;
	padding-top: 1em;
	padding-bottom: 1em;
}

#summary {
	display: flex;
	gap: 1em;
	align-items: center;
	margin-right: auto;
}

.filter-container {
	position: relative;
	display: inline-block;
	margin-left: 1em;
}

#search-icon {
	color: #777;
	position: absolute;
	height: 1em;
	top: .6em;
	left: .5em;
}

#filter {
	padding: .5em 1em .5em 2.5em;
	border: none;
	border: 1px solid #CCC;
	border-radius: 5px;
	font-family: inherit;
	position: relative;
	z-index: 2;
	background: none;
}

.layout,
.layout svg {
	color: #9a9a9a;
}

table {
	width: 100%;
	border-collapse: collapse;
}

tbody tr,
tbody tr a,
.entry a {
	transition: all .15s;
}

tbody tr:hover,
.grid .entry a:hover {
	background-color: #f4f9fd;
}

th,
td {
	text-align: left;
}

th {
	position: sticky;
	top: 0;
	background: white;
	white-space: nowrap;
	z-index: 2;
	text-transform: uppercase;
	font-size: 14px;
	letter-spacing: 1px;
	padding: .75em 0;
}

td {
	white-space: nowrap;
}

td:nth-child(2) {
	width: 75%;
}

td:nth-child(2) a {
	padding: 1em 0;
	display: block;
}

td:nth-child(3),
th:nth-child(3) {
	padding: 0 20px 0 20px;
	min-width: 150px;
}

td .go-up {
	text-transform: uppercase;
	font-size: 12px;
	font-weight: bold;
}

.name,
.go-up {
	word-break: break-all;
	overflow-wrap: break-word;
	white-space: pre-wrap;
}

.listing .icon-tabler {
	color: #454545;
}

.listing .icon-tabler-folder-filled {
	color: #ffb900 !important;
}

.sizebar {
	position: relative;
	padding: 0.25rem 0.5rem;
	display: flex;
}

.sizebar-bar {
	background-color: #dbeeff;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 0;
	height: 100%;
	pointer-events: none;
}

.sizebar-text {
	position: relative;
	z-index: 1;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
	gap: 2px;
}

.grid .entry {
	position: relative;
	width: 100%;
}

.grid .entry a {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1.5em;
	height: 100%;
}

.grid .entry svg {
	width: 75px;
	height: 75px;
}

.grid .entry img {
	max-height: 200px;
	object-fit: cover;
}

.grid .entry .name {
	margin-top: 1em;
}

footer {
	padding: 40px 20px;
	font-size: 12px;
	text-align: center;
}

.caddy-logo {
	display: inline-block;
	height: 2.5em;
	margin: 0 auto;
}

@media (max-width: 600px) {
	.hideable {
		display: none;
	}

	td:nth-child(2) {
		width: auto;
	}

	th:nth-child(3),
	td:nth-child(3) {
		padding-right: 5%;
		text-align: right;
	}

	h1 {
		color: #000;
	}

	h1 a {
		margin: 0;
	}

	#filter {
		max-width: 100px;
	}

	.grid .entry {
		max-width: initial;
	}
}


@media (prefers-color-scheme: dark) {
	html {
		background: black; /* overscroll */
	}

	body {
		background: linear-gradient(180deg, rgb(34 50 66) 0%, rgb(26 31 38) 100%);
		background-attachment: fixed;
	}

	body,
	a,
	svg,
	.layout.current,
	.layout.current svg,
	.go-up {
		color: #ccc;
	}

	h1 a,
	th a {
		color: white;
	}

	h1 {
		color: white;
	}

	h1 a:hover {
		background: hsl(213deg 100% 73% / 20%);
	}

	header,
	main,
	.grid .entry {
		background-color: #101720;
	}

	tbody tr:hover,
	.grid .entry a:hover {
		background-color: #162030;
		color: #fff;
	}

	th {
		background-color: #18212c;
	}

	td a,
	.listing .icon-tabler {
		color: #abc8e3;
	}

	td a:hover,
	td a:hover .icon-tabler {
		color: white;
	}

	td a:visited {
		color: #cd53cd;
	}

	td a:visited:hover {
		color: #f676f6;
	}

	#search-icon {
		color: #7798c4;
	}

	#filter {
		color: #ffffff;
		border: 1px solid #29435c;
	}

	.meta {
		border-bottom: 1px solid #222e3b;
	}

	.sizebar-bar {
		background-color: #1f3549;
	}

	.grid .entry a {
		background-color: #080b0f;
	}

	#Wordmark path,
	#R path {
		fill: #ccc !important;
	}
	#R circle {
		stroke: #ccc !important;
	}
}

</style>`);

// Init
function init() {
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
    <header class="mdui-appbar mdui-appbar-fixed mdui-color-theme"> 
      <div id="nav" class="mdui-toolbar mdui-container"> 
      </div> 
    </header>
  
    <div id="breadcrumb-section" class="mdui-container">
      <div id="breadcrumb">
      </div>
    </div>
  
    <div id="content" class="mdui-container"> 
    </div>
    `;
    $('body').html(html);
  }

// Render
function render(path) {
    if (path.indexOf("?") > 0) {
      path = path.substr(0, path.indexOf("?"));
    }
    title(path);
    nav(path);
    breadcrumb(path); // Call the breadcrumb function here!
    if (path.substr(-1) == '/') {
      list(path);
    } else {
      file(path);
    }
}

// Render title
function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName+' - '+path);
}

// Navigation Bar
function nav(path) {
    var html = "";
    html += `<a href="/" class="mdui-typo-headline folder">${document.siteName}</a>`;
    // ... (rest of the nav function remains the same)
    $('#nav').html(html);
}

// Breadcrumb
function breadcrumb(path) {
 var html = "<ul class='mdui-toolbar mdui-container'>"; // Use mdui-row for horizontal layout
  var arr = path.trim('/').split('/');
  var p = '/';

  // Add "Root" as the first item
  html += `<a class="folder" href="${p}">Root</a>`;

  if (arr.length > 0) {
    for (i in arr) {
      var n = arr[i];
      n = decodeURI(n);
      p += n + '/';
      if (n == '') {
        break;
      }

      // Add subsequent folder names with ">" separator
      html += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="${p}">${n}</a>`;
    }
  }

  html += "</ul>"; // Close the unordered list
  $('#breadcrumb').html(html);
}

// File List
function list(path){
	var content = `
	<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>

	 <div class="mdui-row"> 
	  <ul class="mdui-list"> 
	   <li class="mdui-list-item th"> 
	    <div class="mdui-col-xs-12 mdui-col-sm-7">
	     Name
	    </div> 
	    <div class="mdui-col-sm-3 mdui-text-right">
	     Date Modified
	    </div> 
	    <div class="mdui-col-sm-2 mdui-text-right">
	     Size
	    </div> 
	    </li> 
	  </ul> 
	 </div> 
	 <div class="mdui-row"> 
	  <ul id="list" class="mdui-list"> 
	  </ul> 
	 </div>
	 <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>
	`;
	$('#content').html(content);
	
    var password = localStorage.getItem('password'+path);
    $('#list').html(`<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>`);
    $('#readme_md').hide().html('');
    $('#head_md').hide().html('');
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("Please enter the password to access this folder.","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                history.go(-1);
            }
        }else if(typeof obj != 'null'){
            list_files(path,obj.files);
        }
    });
}

function list_files(path,files){
    html = "";
    for(i in files){
        var item = files[i];
        var p = path+item.name+'/';
        if(item['size']==undefined){
            item['size'] = "";
        }

        item['modifiedTime'] = utc2localtime(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
            html +=`<li class="mdui-list-item mdui-ripple"><a href="${p}" class="folder">
	            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	            <i class="mdui-icon material-icons">folder_open</i>
	              ${item.name}
	            </div>
	            <div class="mdui-col-sm-3 mdui-text-right">${item['modifiedTime']}</div>
	            <div class="mdui-col-sm-2 mdui-text-right">${item['size']}</div>
	            </a>
	        </li>`;
        }else{
            var p = path+item.name;
            var c = "file";
            if(item.name == "README.md"){
                 get_file(p, item, function(data){
                    markdown("#readme_md",data);
                });
            } else {
                // No README.md, insert the spacer
                $('#readme_md').before('<div class="spacerx"></div>');
            }
            if(item.name == "HEAD.md"){
	            get_file(p, item, function(data){
                    markdown("#head_md",data);
                });
            } else {
                // No README.md, insert the spacer
                $('#readme_md').before('<div class="spacerx"></div>');
            }

            var ext = p.split('.').pop();
            html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${item.mimeType}" href="${p}" class="${c}">
	          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate">
	          <i class="mdui-icon material-icons">insert_drive_file</i>
	            ${item.name}
	          </div>
	          <div class="mdui-col-sm-3 mdui-text-right">${item['modifiedTime']}</div>
	          <div class="mdui-col-sm-2 mdui-text-right">${item['size']}</div>
	          </a>
	      </li>`;
        }
    }
    $('#list').html(html);
}


function get_file(path, file, callback){
	var key = "file_path_"+path+file['modifiedTime'];
	var data = localStorage.getItem(key);
	if(data != undefined){
		return callback(data);
	}else{
		$.get(path, function(d){
			localStorage.setItem(key, d);
            callback(d);
        });
	}
}



// Preview ?a=view
function file(path){
	var name = path.split('/').pop();
	var ext = name.split('.').pop().toLowerCase().replace(`?a=view`,"");

	if("|mp4|webm|avi|".indexOf(`|${ext}|`) >= 0){
		return file_video(path);
	}

	if("|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${ext}|`) >= 0){
		return file_video(path);
	}
	
	if("|mp3|wav|ogg|m4a|".indexOf(`|${ext}|`) >= 0){
		return file_audio(path);
	}

	if("|bmp|jpg|jpeg|png|gif|".indexOf(`|${ext}|`) >= 0){
		return file_image(path);
	}
}

// Preview |mp4|webm|avi|
function file_video(path){
	var url = window.location.origin + path;
	if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { // Mobile User
	    playBtn = `	<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="intent:${url}#Intent;package=com.mxtech.videoplayer.ad;S.title=${path};end"><i class="mdui-icon material-icons">&#xe039;</i>在mxplayer中播放</a>`;
	}
	var content = `
<div class="mdui-container-fluid">
	<br>
	<video class="mdui-video-fluid mdui-center" preload controls>
	<source src="${url}" type="video/mp4">
	</video>
	<div class="mdui-textfield">
	<label class="mdui-textfield-label">Direct Download Link</label>
	<input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
	$('#content').html(content);
}

// Preview |mp3|m4a|wav|ogg|
function file_audio(path){
	var url = window.location.origin + path;
	var content = `
<div class="mdui-container-fluid">
	<br>
	<audio class="mdui-center" preload controls>
	<source src="${url}"">
	</audio>
	<br>
	<div class="mdui-textfield">
	<label class="mdui-textfield-label">Direct Download Link</label>
	<input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
	$('#content').html(content);
}


// Photo Gallery
function file_image(path){
	var url = window.location.origin + path;
	var content = `
<div class="mdui-container-fluid">
	<br>
	<img class="mdui-img-fluid" src="${url}"/>
	<br>
	<div class="mdui-textfield">
	<label class="mdui-textfield-label">Direct Download Link</label>
	<input class="mdui-textfield-input" type="text" value="${url}"/>
	</div>
    <br>
</div>
<a href="${url}" class="mdui-fab mdui-fab-fixed mdui-ripple mdui-color-theme-accent"><i class="mdui-icon material-icons">file_download</i></a>
	`;
	$('#content').html(content);
}

// Time Conversion
function utc2localtime(utc_datetime) {
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0, T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos + 1, Z_pos - T_pos - 1);
    var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06

    // Timestamp Processing
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp / 1000;

    // Offset Timezone (SG/MY/HK/ID/PH)
    var unixtimestamp = timestamp + 8 * 60 * 60;

    // Convert timestamp to Date object
    var unixtimestamp = new Date(unixtimestamp * 1000);

    // Timestamp to 12Hr with AM/PM
    var hours = unixtimestamp.getHours();
    var minutes = "0" + unixtimestamp.getMinutes();
    var seconds = "0" + unixtimestamp.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Formatted Date
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();

    return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length)
        + " " + hours + ":"
        + minutes.substring(minutes.length - 2, minutes.length) + ":"
        + seconds.substring(seconds.length - 2, seconds.length) + " " + ampm;
}

// Size Conversion
function formatFileSize(bytes) {
    if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
    else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
    else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
    else if (bytes>1)           {bytes=bytes+' Bytes';}
    else if (bytes==1)          {bytes=bytes+' Byte';}
    else                        {bytes='---';}
    return bytes;
}

String.prototype.trim = function (char) {
    if (char) {
        return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '');
    }
    return this.replace(/^\s+|\s+$/g, '');
};


// README.md and HEAD.md Renderer
function markdown(el, data){
    if(window.md == undefined){
        //$.getScript('https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js',function(){
        window.md = window.markdownit();
        markdown(el, data);
        //});
    }else{
        var html = md.render(data);
        $(el).show().html(html);
    }
}

// Fallback Event Listener
window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}


$(function(){
    init();
    var path = window.location.pathname;
    $("body").on("click",'.folder',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    $("body").on("click",'.view',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });
    
    render(path);
});
