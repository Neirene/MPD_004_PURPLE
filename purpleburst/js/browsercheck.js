// JavaScript Document

	if(navigator.appName == 'Microsoft Internet Explorer')
	{
		var ver = navigator.appVersion;
		var vinfo = ver.substr(0,3);
		var versionset = vinfo;
		if(versionset == 4.0)
		{
			alert("this is internet explorer 8 or lower " + versionset);
			
			document.write('<link href="stylelegacy.css" rel="stylesheet" type="text/css" />');
			document.write('<link href="css/introlegacy.css" rel="stylesheet" type="text/css" />');
			

		}
		else if(versionset == 5.0)
		{
			alert("This is internet explorer 9 or higher " + versionset + " or another browser");
			
			
			document.write('<link href="styleweb.css" rel="stylesheet" type="text/css" />');
			document.write('<link href="css/intro.css" rel="stylesheet" type="text/css" />');

		}

	}
	
	if(navigator.appName != 'Microsoft Internet Explorer')
	{

			alert(navigator.appName);
			
			

			
			document.write('<link href="styleweb.css" rel="stylesheet" type="text/css" />');
			document.write('<link href="css/intro.css" rel="stylesheet" type="text/css" />');

	}
