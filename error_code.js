
    // convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();

    // *** BROWSER VERSION ***
    // Note: On IE5, these return 4, so use is.ie5up to detect IE5.
    var is_major = parseInt(navigator.appVersion);
    var is_minor = parseFloat(navigator.appVersion);

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1));
    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && (is_major >= 4));
    var is_navonly = (is_nav && ((agt.indexOf(";nav") != -1) || (agt.indexOf("; nav") != -1)) );
    var is_nav5 = (is_nav && (is_major == 5));
    var is_nav5up = (is_nav && (is_major >= 5));

    var is_ie   = (agt.indexOf("msie") != -1);
    var is_ie3  = (is_ie && (is_major < 4));
    var is_ie4  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")==-1) );
    var is_ie4up  = (is_ie  && (is_major >= 4));
    var is_ie5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    var is_ie5up  = (is_ie  && !is_ie3 && !is_ie4);

    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_webtv = (agt.indexOf("webtv") != -1);

    // *** JAVASCRIPT VERSION CHECK ***
    // Useful to workaround Nav3 bug in which Nav3
    // loads <SCRIPT LANGUAGE="JavaScript1.2">.
    var is_js;
    if (is_nav2 || is_ie3) is_js = 1.0
    else if (is_nav3 || is_opera) is_js = 1.1
    else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2
    else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3
    else if (is_nav5) is_js = 1.4
    // NOTE: In the future, update this code when newer versions of JS
    // are released. For now, we try to provide some upward compatibility
    // so that future versions of Nav and IE will show they are at
    // *least* JS 1.x capable. Always check for JS version compatibility
    // with > or >=.
    else if (is_nav && (is_major > 5)) is_js = 1.4
    else if (is_ie && (is_major > 5)) is_js = 1.3
    // HACK: no idea for other browsers; always check for JS version with > or >=
    else is_js = 0.0;

    // *** PLATFORM ***
    var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
    // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
    //        Win32, so you can't distinguish between Win95 and WinNT.
    var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

    // is this a 16 bit compiled version?
    var is_win16 = ((agt.indexOf("win16")!=-1) || 
               (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || 
               (agt.indexOf("windows 16-bit")!=-1) );  

    var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
                    (agt.indexOf("windows 16-bit")!=-1));

    // NOTE: Reliable detection of Win98 may not be possible. It appears that:
    //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
    //       - On Mercury client, the 32-bit version will return "Win98", but
    //         the 16-bit version running on Win98 will still return "Win95".
    var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
    var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
    var is_win32 = (is_win95 || is_winnt || is_win98 || 
                    ((is_major >= 4) && (navigator.platform == "Win32")) ||
                    (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

    var is_os2   = ((agt.indexOf("os/2")!=-1) || 
                    (navigator.appVersion.indexOf("OS/2")!=-1) ||   
                    (agt.indexOf("ibm-webexplorer")!=-1));

    var is_mac    = (agt.indexOf("mac")!=-1);
    var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || 
                               (agt.indexOf("68000")!=-1)));
    var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || 
                                (agt.indexOf("powerpc")!=-1)));

    var is_sun   = (agt.indexOf("sunos")!=-1);
    var is_sun4  = (agt.indexOf("sunos 4")!=-1);
    var is_sun5  = (agt.indexOf("sunos 5")!=-1);
    var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
    var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
    var is_irix5 = (agt.indexOf("irix 5") !=-1);
    var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
    var is_hpux  = (agt.indexOf("hp-ux")!=-1);
    var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
    var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
    var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
    var is_aix1  = (agt.indexOf("aix 1") !=-1);    
    var is_aix2  = (agt.indexOf("aix 2") !=-1);    
    var is_aix3  = (agt.indexOf("aix 3") !=-1);    
    var is_aix4  = (agt.indexOf("aix 4") !=-1);    
    var is_linux = (agt.indexOf("inux")!=-1);
    var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
    var is_unixware = (agt.indexOf("unix_system_v")!=-1); 
    var is_mpras    = (agt.indexOf("ncr")!=-1); 
    var is_reliant  = (agt.indexOf("reliantunix")!=-1);
    var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) || 
           (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) || 
           (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1)); 
    var is_sinix = (agt.indexOf("sinix")!=-1);
    var is_freebsd = (agt.indexOf("freebsd")!=-1);
    var is_bsd = (agt.indexOf("bsd")!=-1);
    var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux || 
                 is_sco ||is_unixware || is_mpras || is_reliant || 
                 is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

    var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));

// additional checks, abk
	var is_anchors = (document.anchors) ? "true":"false";
	var is_regexp = (window.RegExp) ? "true":"false";
	var is_option = (window.Option) ? "true":"false";
	var is_all = (document.all) ? "true":"false";
// cookies - 990624 - abk
	
	var is_cookie = (document.cookie) ? "true" : "false";
	var is_images = (document.images) ? "true":"false";
	var is_layers = (document.layers) ? "true":"false"; // gecko m7 bug?
	var is_plugins = (document.plugins) ? "true":"false";
// new doc obj tests 990624-abk
	var is_forms = (document.forms) ? "true" : "false";
	var is_links = (document.links) ? "true" : "false";
	var is_frames = (window.frames) ? "true" : "false";
	var is_screen = (window.screen) ? "true" : "false";

// java
	var is_java = (navigator.javaEnabled());

// the following are variables created for the forms  below

	var is_w3c = (document.getElementById)? true:false
		
	
	var	state=""
	var	jstate=""	
	var	pstate=""	
	var yourBrowser=""
	var scriptLevel=""
	var platform=""
	var yourName="Your name here"
	var yourEmail="Your email address here"
	
	
			state = is_nav2
			if (state == true){
			yourBrowser = "Netscape Navigator 2" 
			}
			
			state = is_nav3
			if (state == true){
			yourBrowser = "Netscape Navigator 3" 
			}
			
			state = is_nav4
			if (state == true){
			yourBrowser = "Netscape Navigator 4" 
			}
			
			state = is_nav5
			if (state == true){
			yourBrowser = "Netscape Navigator 5" 
			}
			
			state = is_ie3
			if (state == true){
			yourBrowser = "MSIE 3" 
			}
			
			state = is_ie4
			if (state == true){
			yourBrowser = "MSIE 4" 
			}
			
			state = is_ie5
			if (state == true){
			yourBrowser = "MSIE 5" 
			}
			
			state = is_aol
			if (state == true){
			yourBrowser = "America Online" 
			}
			
			state = is_opera
			if (state == true){
			yourBrowser = "Opera"  
			}
			
			state = is_webtv
			if (state == true){
			yourBrowser = "WebTv" 
			}
			
			jstate = is_js
			if (jstate == 1.0){
			scriptLevel = "1.0" 
			}
			
			jstate = is_js
			if (jstate == 1.1){
			scriptLevel = "1.1" 
			}
			
			jstate = is_js
			if (jstate == 1.2){
			scriptLevel = "1.2" 
			}
			
			jstate = is_js
			if (jstate == 1.3){
			scriptLevel = "1.3" 
			}
			
			jstate = is_js
			if (jstate == 1.4){
			scriptLevel = "1.4" 
			}

			pstate = is_win31
			if (pstate == true){
			platform = "Windows 31" 
			}
			
			pstate = is_win95
			if (pstate == true){
			platform = "Windows 95" 
			}
			
			pstate = is_win98
			if (pstate == true){
			platform = "Windows 98" 
			}
			
			pstate = is_winnt
			if (pstate == true){
			platform = "Windows NT" 
			}
			
			pstate = is_os2
			if (pstate == true){
			platform = "OS 2" 
			}
			
			pstate = is_mac68k
			if (pstate == true){
			platform = "Macintosh 68k" 
			}
			
			pstate = is_macppc
			if (pstate == true){
			platform = "Macintosh Power PC" 
			}
			
			
			
		var error_count = 0;
			
		function reportError(msg, url, line)	{
		  
		
		   var w = window.open("",                    
		                       "error"+error_count++, 
		                       "resizable,status,scrollbars=yes,width=500,height=700"); 
			w.document.write('<style type="TEXT/CSS">#red {font-family: "verdana";color: red;font-size:10px;}');
			w.document.write('#purple {font-family: "verdana";color: purple; font-size:10px;}');
			w.document.write('#black {font-family: "verdana"; color: black;font-size:10px;}');
			w.document.write('#header {font-family: "verdana";color: black;font-size:14px; font-weight: bold;}//--></Style>');
			w.document.write('<P ID = "header">JavaScript error reporting page</P>');
			w.document.write('<P ID = "black">This is an error reporting page that has opened automatically because there has been a javascript error on the page you are viewing. The page has been extensively tested on the Mac, Win98 and WinNT platforms in both the Navigator and IE browsers. But because of the large number of platforms and browsers and their configurations it is not feasible to test all pages for all possible errors.  <BR><BR>');
			w.document.write('Please help by sending the following form, so that the error you have experienced can be brought to my attention and corrected.<BR><BR>');
			w.document.write('The information is automatically entered in the form just hit the email button to send it. You can add comments in the comments box below.</P>');
			w.document.write('<FORM METHOD="POST" ACTION="http://www.philipriley.com/cgi-sys/FormMail.cgi"> ');
			w.document.write('<INPUT TYPE="HIDDEN" NAME="SUBJECT" VALUE="User submitted javascript error report on philipriley.com"> ');
			w.document.write('<INPUT TYPE="HIDDEN" NAME="RECIPIENT" VALUE="&#109;&#101;&#64;&#112;&#104;&#105;&#108;&#105;&#112;&#114;&#105;&#108;&#101;&#121;&#46;&#99;&#111;&#109;"> ');
			w.document.write('<INPUT TYPE="HIDDEN" NAME="REDIRECT" VALUE="http://www.philipriley.com/thankyou.html"> ');
			w.document.write('<INPUT TYPE="HIDDEN" NAME="00_THIS_IS_A_USER_SUMBMITTED_ERROR_REPORT_FOR_THE_SITE_PHILIPRILEY.COM">');
			w.document.write('<P ID = "black">First Name (optional):<BR><INPUT TYPE="TEXT" NAME="01_FIRSTNAME"></P>');
			w.document.write('<P ID = "black">Last Name (optional):<BR><INPUT TYPE="TEXT" NAME="02_LASTNAME"></P> ');
			w.document.write('<P ID = "black">Email Address (optional):<BR><INPUT TYPE="TEXT" NAME="03_EMAIL"></P>');
			w.document.write('<P ID ="black">Comment (optional):<BR><TEXTAREA NAME="04_COMMENTS" ROWS="5" COLS="50"></TEXTAREA></P>');
			w.document.write('<INPUT TYPE="SUBMIT" VALUE="EMAIL"> <BR><BR>');
			w.document.write('<P ID = "black">Thanks in advance for your help.    <BR><BR>      <B>Philip Riley </B> <BR>  (contact:&#109;&#101;&#64;&#112;&#104;&#105;&#108;&#105;&#112;&#114;&#105;&#108;&#101;&#121;&#46;&#99;&#111;&#109;)</P>');

			w.document.write('<P ID = "black">The following helps me to understand what went wrong: </P><BR>');
			w.document.write('<P id ="black">The details of your browser and platform have been automatically detected. ');
			w.document.write('If the information presented here is wrong please write the correct information in the comment box ');
			w.document.write('and report the error as a fault;<BR>');
				
			w.document.write('<P id ="black">In the event of a javascript error the following lines describe precisely what triggered it;</P>');
			w.document.write('<P id ="red">');
			w.document.write("the error is:     " +  msg + "<BR>");
		  	w.document.write("the line number is:     " +  line +"<BR>");
		  	w.document.write("the URL is:     " + url +"</P>");
			
			w.document.write('<P id ="black">The following tests assist in determining the possible cause of the fault that has been found;</P>');
			
			w.document.write('<P id ="purple">');
			w.document.write('Your browser is: ' + yourBrowser + '<BR>')
			w.document.write('and the minor version is: ' + is_minor + ' (N.B. Not always accurate) <BR>')
			w.document.write('try the minor version again: ' + navigator.userAgent + '<BR>');
			w.document.write('your javascript version is: ' + scriptLevel + '<BR>')
			w.document.write('your platform is: ' + platform + '</P>')
		
			w.document.write('<P id ="purple">');
			w.document.write('document.anchors: ' + is_anchors + "<BR>");
			w.document.write('document.cookie: ' + is_cookie + "<BR>");
			w.document.write('document.forms: ' + is_forms + "<BR>");
			w.document.write('window.frames: ' + is_frames + "<BR>");
			w.document.write('window.plugins: ' + is_plugins + "<BR>");
			w.document.write('is it java enabled?: ' + is_java + "<BR>");
		if (window.screen) {
			w.document.write('screen.height: ' + screen.height + "<BR>");
			w.document.write('screen.width: ' + screen.width + "<BR>");
			w.document.write('screen.availHeight: ' + screen.availHeight + "<BR>");
			w.document.write('screen.availWidth: ' + screen.availWidth + "<BR>");
		if (is_ie)	{
			w.document.write('screen.colorDepth: ' + screen.colorDepth + "<BR>");
			}
		else {
			w.document.write('screen.pixelDepth: ' + screen.pixelDepth + '</P>');
			}
		}	
			w.document.	write('<DIV align=left>');
			
			w.document.write('<INPUT NAME="05_BROWSER_AND_PLATFORM_INFORMATION" " TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="06_BROWSER" VALUE="'+ yourBrowser + '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="07_is_minor" VALUE="'+ is_minor+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="09_userAgent" VALUE="'+ navigator.userAgent+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="10_scriptLevel" VALUE="'+ scriptLevel+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="11_platform" VALUE="'+ platform+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="12_THIS_IS_THE_CAUSE_OR_LOCATION_OR_LINENUMBER_OF_THE_ERROR" " TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="13_msg" VALUE="'+ msg+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="14_line" VALUE="'+ line+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="15_url" VALUE="'+ url+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="16_ANYTHING_REMOTELY_RELEVANT" " TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="17_is_anchors" VALUE="'+ is_anchors+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="18_is_cookie" VALUE="'+ is_cookie+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="19_is_forms" VALUE="'+ is_forms+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="20_is_frames" VALUE="'+ is_frames+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="21_is_plugins" VALUE="'+ is_plugins+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="22_is_java" VALUE="'+ is_java+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="23_screen.height" VALUE="'+ screen.height+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="24_screen.width" VALUE="'+ screen.width+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="25_screen.availHeight" VALUE="'+ screen.availHeight+ '" TYPE="HIDDEN">');
			w.document.write('<INPUT NAME="26_screen.availWidth" VALUE="'+ screen.availWidth+ '" TYPE="HIDDEN">');
			if (is_ie)	{
			w.document.write('<INPUT NAME="27_screen.colorDepth" VALUE="'+ screen.colorDepth+ '" TYPE="HIDDEN">');
			}
			else {
			w.document.write('<INPUT NAME="28_screen.pixelDepth" VALUE="'+ screen.pixelDepth +'" TYPE="HIDDEN">');
			}
			w.document.write('</DIV>');
			w.document.write('<INPUT type="hidden" name="env_report" value="REMOTE_HOST,REMOTE_USER,HTTP_USER_AGENT,HTTP_UA_OS,HTTP_UA_PIXELS,REMOTE_ADDR,DATE_LOCAL,DATE_GMT,DOCUMENT_ROOT,DOCUMENT_URL,FORWARDED,HTTP_COOKIE">');
  		 	w.document.write('</FORM>');
			
		 	w.document.close();
		  	return true;
		}
			 
		self.onerror = reportError;



  		