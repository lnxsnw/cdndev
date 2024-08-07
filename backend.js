// Declare Assets and Things

document.write('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/mdui@0.4.3/dist/css/mdui.min.css">');
document.write('<script src="//cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js"></script>');
document.write(`<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}
.mdui-toolbar>*{padding:0 6px;margin:0 2px}
.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}
.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}
.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>
.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}
.mdui-list-item{margin:2px 0;padding:0}
.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}
.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,
.mdui-toolbar>i:first-child{display:block}}</style>`);

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
