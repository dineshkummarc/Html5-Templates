<?php
/**
* @version   1.x
* @package   AdminPraise Lite
* @copyright (C) 2008 - 2011 Pixel Praise LLC
* @license   GNU/GPL http://www.gnu.org/copyleft/gpl.html
*/

/**
*    This file is part of AdminPraise Lite.
*    
*    AdminPraise Lite is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU General Public License for more details.
*
*    You should have received a copy of the GNU General Public License
*    along with AdminPraise Lite.  If not, see <http://www.gnu.org/licenses/>.
*
**/

?>

<style type="text/css">
<?php if($linkColor) {?>a,a:hover{color:<?php echo $linkColor;?>;}<?php } ?>
<?php if($customColors && $templateTheme == "theme1") {?>.theme1 #ap-title,.theme1 .panel h3,.theme1 .tool-title,#login.theme1 h3{background-color:<?php echo $mainColor;?>;border-color:<?php echo $mainColor;?>;color:#FFF;}
.theme1 .toolbar a{color:#FFF;}
body#login.theme1,.theme1 #ap-header{background-color:<?php echo $mainColor;?>;}
#ap-mainmenu li a,#ap-sidemenu li a,#ap-quicklink h3 a,#ap-quickadd,#ap-crumbs{background-color:<?php echo $secondColor;?>;}
#ap-quicklink h3 a,#ap-quickadd,#ap-crumbs{border-color:<?php echo $secondColor;?>;}
body,#ap-mainmenu li.active a,#ap-mainmenu li a:hover,#ap-sidemenu li a:hover,#ap-sidemenu li.active a,.button2-left a,.login{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme2") {?>body#login.theme2,.theme2 #ap-header,.theme2 #ap-title,.theme2 .panel h3,.theme2 .tool-title,#login.theme2 h3{background-color:<?php echo $mainColor;?>;}
.theme2 #ap-title,.theme2 .panel h3,.theme2 .tool-title,#login.theme2 h3,.theme2 .tool-tip{border-color:<?php echo $mainColor;?>;}
.theme2 #ap-mainmenu li a,.theme2 #ap-sidemenu li a,.theme2 #ap-quickadd,.theme2 #ap-crumbs{background-color:<?php echo $secondColor;?>;}
body.theme2,.theme2 #ap-mainmenu li.active a,.theme2 #ap-mainmenu li a:hover,.theme2 #ap-sidemenu li a:hover,.theme2 #ap-sidemenu li.active a,.theme2 .button2-left a,.theme2 .login,.theme2 .tool-tip{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme3") {?>.theme3 #ap-title,.theme3 .panel h3,.theme3 .tool-title,#login.theme3 h3,.theme3 #ap-quicklink h3 a,.theme3 #ap-quickadd,.theme3 #ap-crumbs,.theme3 #ap-submenu,.theme3 #ap-mainmenu li.active a,.theme3 #ap-sidemenu li.active a,.theme3 #ap-mainmenu li a:hover,.theme3 #ap-sidemenu li a:hover,.theme3 #ap-quicklink h3 a:hover,.theme3 #ap-quickadd:hover{background-color:<?php echo $mainColor;?>;}
.theme3 #ap-mainmenu li a,.theme3 #ap-sidemenu li a{background-color:<?php echo $secondColor;?>;}
body#login.theme3,.theme3 #ap-header,.theme3 #ap-sidebar{background-color:<?php echo $backgroundColor;?>;}
.theme3 a{color:<?php echo $linkColor;?>;}
<?php } else if($customColors && $templateTheme == "theme4") {?>.theme4 #ap-submenu,.theme4 #ap-mainmenu li.active a,.theme4 #ap-sidemenu li.active a,.theme4 #ap-mainmenu li a:hover,.theme4 #ap-sidemenu li a:hover{background-color:<?php echo $mainColor;?>;}
.theme4 #ap-title,.theme4 .panel h3,.theme4 .tool-title,#login.theme4 h3,.theme4 #ap-quicklink h3 a,.theme4 #ap-quickadd,.theme4 #ap-crumbs{background-color:<?php echo $secondColor;?>;border-color:<?php echo $secondColor;?>;}
body#login.theme4,body.theme4,.theme4 #ap-header{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme5") {?>
.theme5 #ap-submenu,.theme5 #ap-mainmenu li.active a,.theme5 #ap-sidemenu li.active a,.theme5 #ap-mainmenu li a:hover,.theme5 #ap-sidemenu li a:hover,.theme5 .tool-title,.theme5 #ap-quickadd,.theme5 #ap-crumbs{background-color:<?php echo $mainColor;?>;}
.theme5 .login,.theme5 #ap-title,.theme5 .panel h3,#login.theme5 h3{background-color:<?php echo $secondColor;?>;}
body.theme5,body#login.theme5{background-color:<?php echo $backgroundColor;?>;}
<?php } ?>

<?php if($fontSize) {?>.adminlist,.admintable,#component-list{font-size:<?php echo $fontSize;?>;}<?php } ?>
<?php if($minWidth) {?>#minwidth-body{min-width: <?php echo $minWidth;?>;}<?php } ?>
<?php if($sidebarWidth) {?>#ap-sidebar{width: <?php echo $sidebarWidth -2;?>em;}#ap-mainbody .mr20, #ap-footer .mr20{margin-right: <?php echo $sidebarWidth;?>em;}<?php } ?>
</style>
