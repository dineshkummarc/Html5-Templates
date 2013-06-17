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

// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );

require_once(dirname(__FILE__).DS.'helper.php');
AdminPraiseHelper::checkLogin();

require_once('assets/variables'.DS.'variables.php');

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo  $this->language; ?>" lang="<?php echo  $this->language; ?>" dir="<?php echo  $this->direction; ?>" id="minwidth" >
<head>
<jdoc:include type="head" />
<link href="templates/<?php echo  $this->template ?>/css/template.css" rel="stylesheet" type="text/css" />
<!--[if IE]>
<link href="templates/<?php echo  $this->template ?>/css/min-ie.css" rel="stylesheet" type="text/css" />
<![endif]-->
<?php 
$componentCSS = "templates/" . $this->template . "/css/components/" . $option . ".css";
if (file_exists($componentCSS)) : ?>
	<link href="<?php echo $componentCSS;?>" rel="stylesheet" type="text/css" />
<?php endif; ?>

<?php
require_once('assets/styles'.DS.'styles.php');
?>

<script type="text/javascript">
function SetHeight(){
<?php if ($showSidebar){ ?>
    var theDiv = document.getElementById('ap-sidebar');
    theDiv.style.height = BrowserHeight()-135+"px";
<?php }?>
    var theDiv2 = document.getElementById('ap-content-body');
    theDiv2.style.height = BrowserHeight()-230+"px";
}
 
function BrowserHeight() {
    var theHeight;
    if (window.innerHeight) {
        theHeight = window.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
        theHeight = document.documentElement.clientHeight;
    }
    else if (document.body) {
        theHeight = document.body.clientHeight;
    }
    return theHeight;
}
</script>

</head>
<body id="minwidth-body" class="<?php echo $templateTheme. " " .$option;if ($showSidebar){echo " minwidth";}?>" onload="SetHeight()" onresize="SetHeight()">
<?php require_once('assets'.DS.'modules'.DS.'mod_sessionbar'.DS.'mod_sessionbar.php');?>
<?php if($this->countModules('status') != 0) { ?>
<div id="module-status" class="ap-status <?php if ($bottomStatus){echo "status-bottom";}?>"><jdoc:include type="modules" name="status" /></div>
<?php } ?>
<div class="ap-main">
	<div id="ap-header">
		<div id="ap-topright">
			<!--begin-->
			<ul>
				<li class="profile-link"><?php echo $profilelink; ?>
				</li>
				<?php $logoutLink = JRoute::_('index.php?option=com_login&task=logout&'. JUtility::getToken() .'=1'); ?>
				<li class="last logout-link"><a href="<?php print $logoutLink;?>"><?php echo JText::_( 'TPL_LOGOUT' );?> <?php echo $user->username; ?></a></li>
			</ul>
			<!--end-->
		</div>		
		<div id="ap-logo">
			<!--begin-->
			<?php
				if(file_exists($logoFile)) { ?>
					<a href="<?php echo JURI::root();?>administrator"><img src="<?php echo $logoFile;?>" /></a>
				<?php } else { ?>
					<a href="<?php echo JURI::root();?>administrator">
					<?php if($adminTitle){
						echo $adminTitle;
					} else {
						echo $mainframe->getCfg( 'sitename' ). " " .JText::_('TPL_ADMIN');
					} ?>
					</a>
				<?php }?>
			<!--end-->
			<span class="logo-preview"><a href="<?php echo JURI::root(); ?>" target="_blank"><?php echo JText::_( 'TPL_PREVIEW_SITE' ); ?></a></span>
		</div>
		<div class="clear"></div>
		<div id="ap-menus">
		<div id="ap-mainmenu" class="mr20 fluid">
			<!--begin-->
			<ul>
				<li <?php if ($option == "com_cpanel" && $ap_task_set != "list_components") { echo "class=\"active\"";}?>><a href="<?php echo JURI::root();?>administrator"><span><?php echo JText::_( 'TPL_DASHBOARD' ); ?></span></a></li>
				<?php if (($user->authorise('core.manage', 'com_menus')) && $menusAcl != 0) { ?>
				<li <?php if ($option =="com_menus") { echo "class=\"active\""; } ?>><a href="index.php?option=com_menus"><span><?php echo JText::_( 'TPL_MENUS' ); ?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_categories')) && $categoriesAcl != 0) { ?>
				<li <?php if ($option == "com_categories" && $scope="content") { echo "class=\"active\""; } ?>><a href="index.php?option=com_categories&scope=content"><span><?php echo JText::_( 'TPL_CATEGORIES' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_content')) && $articlesAcl != 0) { ?>
				<li <?php if ($option =="com_content" || $option =="com_categories" && $categoriesAcl == 0 || $option =="com_content" && $view="featured") { echo "class=\"active\""; } ?>><a href="index.php?option=com_content"><span><?php echo JText::_( 'TPL_ARTICLES' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_installer')) && $componentsAcl != 0) { ?>
				<li <?php if ($ap_task =="list_components") { echo "class=\"active\""; } ?>><a href="index.php?ap_task=list_components"><span><?php echo JText::_( 'TPL_COMPONENTS' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_modules')) && $modulesAcl != 0) { ?>
				<li <?php if ($option =="com_modules"){ echo "class=\"active\"";}?>><a href="index.php?option=com_modules"><span><?php echo JText::_( 'TPL_MODULES' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_plugins')) && $pluginsAcl != 0) { ?>
				<li <?php if ($option =="com_plugins"){ echo "class=\"active\"";}?>><a href="index.php?option=com_plugins"><span><?php echo JText::_( 'TPL_PLUGINS' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_installer')) && $installAcl != 0) { ?>
				<li <?php if ($option =="com_installer"){ echo "class=\"active\"";}?>><a href="index.php?option=com_installer"><span><?php echo JText::_( 'TPL_INSTALLER' );?></span></a></li><?php } ?>
				<?php
				for($x = 0; $x < 6; $x++)
				{
				    $custom_main_acl  = $this->params->get('custom'.$x.'Acl', 0);
				    $custom_main_name = $this->params->get('custom'.$x.'Name');
				    $custom_main_link = $this->params->get('custom'.$x.'Link');
				    if(strpos($custom_main_link,'http') === false) {
				            $custom_uri = new JURI($custom_main_link);
				            $custom_option = $custom_uri->getVar('option');
				            if (($user->authorise('core.manage',$custom_option)) && $custom_main_acl != 0) {
				                echo '<li class="custom-item"><a href="'.$custom_main_link.'">'.htmlspecialchars($custom_main_name).'</a></li>';
				            }
				        } else {
				            if (($user->authorise('core.manage', 'com_content')) && $custom_main_acl != 0) {
				                echo '<li class="custom-item external-link"><a href="'.$custom_main_link.'">'.htmlspecialchars($custom_main_name).'</a></li>';
				            }
				     
				        }
				}

                ?>
                <?php
                // Get the current component
                $current_menu = substr($option, 4);
                if ($option != "com_cpanel" && $option != "com_menus" && $option != "com_categories" && $option != "com_content" && $option != "com_modules" && $option != "com_plugins" && $option != "com_templates" && $option != "com_users"){
                ?>
                <li class="active current-menu"><a href="<?php echo JURI::getInstance();?>"><span><?php echo $current_menu;?></span></a></li>
                <?php } ?>
			</ul>
			<!--end-->
		</div>
		<div id="ap-sidemenu" class="dr20">
			<!--begin-->
			<ul>
				<?php if (($user->authorise('core.manage', 'com_installer')) && $adminAcl != 0) { ?>
				<li <?php if ($ap_task =="admin") { echo "class=\"active\"";}?>><a href="index.php?ap_task=admin"><span><?php echo JText::_( 'TPL_ADMIN' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_users')) && $usersAcl != 0) {?>
				<li <?php if ($option =="com_users") { echo "class=\"active\""; } ?>><a href="index.php?option=com_users"><span><?php echo JText::_( 'TPL_USERS' );?></span></a></li><?php } ?>
				<?php if (($user->authorise('core.manage', 'com_templates')) && $templatesAcl != 0) {?>
				<li <?php if ($option =="com_templates") { echo "class=\"active\""; } ?>><a href="index.php?option=com_templates&filter_client_id=0"><span><?php echo JText::_( 'TPL_TEMPLATES' );?></span></a></li><?php } ?>
			</ul>
			<!--end-->
		</div>
		</div>
		<div class="clear"></div>
	</div>
	<div id="ap-submenu">
		
		<?php if (!JRequest::getInt('hidemainmenu')) { ?>		
		<jdoc:include type="modules" name="submenu" id="submenu-box" />
		<?php } ?>
		<?php if ($option =="com_menus") { ?>
			<?php require_once('assets/menus'.DS.'menus.php');?>
		<?php } else if ($option =="com_templates") { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_templates&filter_client_id=1"><?php echo JText::_( 'TPL_ADMIN_TEMPLATES' );?></a></li>
			<li><a href="index.php?option=com_installer&view=manage&filters[type]=template"><?php echo JText::_( 'TPL_MANAGE_TEMPLATES' );?></a></li>
			<li><a href="index.php?option=com_installer"><?php echo JText::_( 'TPL_INSTALL_TEMPLATES' );?></a></li>
		</ul>	
		<?php } else if ($option =="com_modules") { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_modules&filter_client_id=0"><?php echo JText::_( 'TPL_SITE_MODULES' );?></a></li>
			<li><a href="index.php?option=com_modules&filter_client_id=1"><?php echo JText::_( 'TPL_ADMIN_MODULES' );?></a></li>
			<li><a href="index.php?option=com_installer&view=manage&filters[type]=module"><?php echo JText::_( 'TPL_MANAGE_MODULES' );?></a></li>
			<li><a href="index.php?option=com_installer"><?php echo JText::_( 'TPL_INSTALL_MODULES' );?></a></li>
		</ul>	
		<?php } else if ($option =="com_plugins") { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_installer&view=manage&filters[type]=plugin"><?php echo JText::_( 'TPL_MANAGE_PLUGINS' );?></a></li>
			<li><a href="index.php?option=com_installer"><?php echo JText::_( 'TPL_INSTALL_PLUGINS' );?></a></li>
		</ul>	
		<?php } else if ($ap_task == "list_components") { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_installer&view=manage&filters[type]=component"><?php echo JText::_( 'TPL_MANAGE_COMPONENTS' );?></a></li>
			<li><a href="index.php?option=com_installer"><?php echo JText::_( 'TPL_INSTALL_COMPONENTS' );?></a></li>
		</ul>			
		<?php } else if ($option =="com_users") { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_users&filter_logged=1"><?php echo JText::_( 'TPL_LOGGED_IN_USERS' );?></a></li>
		</ul>	
		<?php } else if (($ap_task == "admin") && ($user->authorise('core.manage', 'com_installer')) || ($option =="com_cpanel") && ($ap_task_set !="list_components") && ($user->authorise('core.manage', 'com_installer'))) { ?>
		<ul class="submenu">
			<li><a href="index.php?option=com_config"><?php echo JText::_( 'TPL_GLOBALS' );?></a></li>
			<li><a href="index.php?option=com_admin&view=sysinfo"><?php echo JText::_( 'TPL_SYSTEM_INFO' );?></a></li>
			<li><a href="index.php?option=com_templates&filter_client_id=1"><?php echo JText::_( 'TPL_ADMIN_TEMPLATES' );?></a></li>
			<li><a href="index.php?option=com_modules&filter_client_id=1"><?php echo JText::_( 'TPL_ADMIN_MODULES' );?></a></li>
			<li><a href="index.php?option=com_checkin"><?php echo JText::_( 'TPL_CHECKIN' );?></a></li>
			<li><a href="index.php?option=com_cache"><?php echo JText::_( 'TPL_CACHE' );?></a></li>
			<li><a href="index.php?option=com_plugins"><?php echo JText::_( 'TPL_PLUGINS' );?></a></li>
			<li><a href="index.php?option=com_installer"><?php echo JText::_( 'TPL_INSTALLER' );?></a></li>
		</ul>
		<?php } ?>	
		<ul class="submenu myeditor">
			<li><jdoc:include type="module" name="mod_myeditor" /></li>
		</ul>

		<div class="clear"></div>
	</div>
	<div class="clear"></div>
	<div id="ap-mainbody">
		
		<?php if(($task !="edit") && ($task !="add") && ($showSidebar)){ ?>
		<div id="ap-sidebar" class="<?php if($switchSidebar){?>dl20<?php } else { ?>dr20<?php } ?>">
			<!--begin-->
			<?php if(!$showBreadCrumbs) { ?>
			<div id="ap-crumbs">
			<!--Begin Crumbs-->
			<?php
				require_once('html'.DS.'mod_breadcrumbs'.DS.'mod_breadcrumbs.php');
				breadcrumbs(); 
			?>
			<!--End Crumbs-->
			</div>
			<?php } ?>
			<?php if($showComponentList) { ?>
			<div class="panel">
			<?php if($componentsAcl != 0) {?>
			<?php require('assets/sidebar'.DS.'sidebar.php');?>
			<?php } ?>
				<jdoc:include type="modules" name="apside" style="title" />		
				<jdoc:include type="modules" name="apside-<?php echo $option;?>" style="title" />
			</div>
			<?php } ?>
			<!--end-->		
		</div>
		<?php } ?>	
		<div id="ap-content" class="<?php if(($switchSidebar) && ($showSidebar)){?>ml20<?php } else if($showSidebar) { ?>mr20<?php } ?> <?php if($showSidebar){?>fluid<?php } ?>">	
			<div id="ap-content-inner">	
			
			<div id="ap-title">
				<jdoc:include type="modules" name="toolbar" />
				<?php
				// Get the component title div
				$title = JFactory::getApplication()->get('JComponentTitle');
				// Create component title
				if ($ap_task == "list_components") {
					$title = JText::_('COMPONENTS');
				} else if ($ap_task == "admin") {
					$title = JText::_('ADMINISTRATION');
				} else if ($title == "") {
					$title = substr($option, 4);
				}
				// Take out any special characters and clean up page name
				$title = strip_tags($title);
				$title = str_replace("!", "", $title);
				$title = str_replace("|", ":", $title);
				$title = trim($title);
				// Add h2
				$title = "<div class=\"page-title\"><h2>".$title."</h2></div>";
				// Echo title if it exists
				if ($title) {
					echo $title;
				}
				?>
				<div class="clear"></div>
				
			</div>
			<div id="toolbar-box"></div>
			<jdoc:include type="message" />
			<div id="ap-content-body">
				<jdoc:include type="modules" name="aptop" />
				<?php if ($option =="com_cpanel" && !$ap_task_set){?>
				<jdoc:include type="modules" name="icon" /><jdoc:include type="modules" name="cpanel" style="xhtml" />
				<?php } else if ($option =="com_cpanel" && !$ap_task_set && $user->get('gid') > 24){?>
				<jdoc:include type="modules" name="apsuperadmin" />
				<?php } else if($ap_task == "list_components" && $componentsAcl != 0) {?>
				<?php require('assets/components'.DS.'components.php');?>
				<?php } else if($ap_task == "admin") {?>
				<jdoc:include type="modules" name="apadmin" /><jdoc:include type="module" name="mod_menu" />
				<?php } else if ($option !="com_cpanel" && !$ap_task_set){?><jdoc:include type="component" /><?php } ?>
				<jdoc:include type="modules" name="apbottom" />
			</div>
			<div class="clear"></div>
		</div>
		<div class="clear"></div>
		</div>
	</div>

</div>
<script type="text/javascript" src="templates/<?php echo  $this->template ?>/js/aplite.js"></script>
</body>
</html>