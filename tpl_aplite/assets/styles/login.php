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
<?php if($customColors && $templateTheme == "theme1") {?>
#login.theme1 h3{background-color:<?php echo $mainColor;?>;border-color:<?php echo $mainColor;?>;color:#FFF;}
body#login.theme1{background-color:<?php echo $backgroundColor;?>;}
.login{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme2") {?>
#login.theme2 h3{background-color:<?php echo $mainColor;?>;}
body#login.theme2{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme3") {?>
#login.theme3 h3{background-color:<?php echo $mainColor;?>;}
body#login.theme3{background-color:<?php echo $backgroundColor;?>;}
.theme3 a{color:<?php echo $linkColor;?>;}
<?php } else if($customColors && $templateTheme == "theme4") {?>
#login.theme4 h3{background-color:<?php echo $mainColor;?>;}
body#login.theme5{background-color:<?php echo $backgroundColor;?>;}
<?php } else if($customColors && $templateTheme == "theme5") {?>
.theme5 #ap-submenu,.theme5 #ap-mainmenu li.active a,.theme5 #ap-sidemenu li.active a,.theme5 #ap-mainmenu li a:hover,.theme5 #ap-sidemenu li a:hover,.theme5 .tool-title{background-color:<?php echo $mainColor;?>;}
.theme5 .panel h3,#login.theme5 h3{background-color:<?php echo $secondColor;?>;}
body#login.theme5{background-color:<?php echo $backgroundColor;?>;}
<?php } ?>
</style>