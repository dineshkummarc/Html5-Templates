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

$mainframe = JFactory::getApplication();
$acl =& JFactory::getACL();
$user =&JFactory::getUser();
$doc = &JFactory::getDocument();
$url  = $mainframe->isAdmin() ? JFactory::getURI() : JURI::base();



// 1.6 Group IDs
$groups = implode(',', $user->authorisedLevels());

// set custom template theme for user
if( !is_null( JRequest::getCmd('templateTheme', NULL) ) ) {
$user->setParam($this->template.'_theme', JRequest::getCmd('templateTheme'));
$user->save(true);
}
if($user->getParam($this->template.'_theme')) {
$this->params->set('templateTheme', $user->getParam($this->template.'_theme'));
}
		
$logoFile = 'templates/'. $this->template .'/logo.png';

$profilelink = "<a href=\"index.php?option=com_users&task=user.edit&id=" . $user->get('id') . "\">". JText::_( 'TPL_PROFILE' ) ."</a>";

$ap_task_set = JRequest::getCmd('ap_task') != null;
$ap_task     = JRequest::getCmd('ap_task');
$option      = JRequest::getCmd('option');
$task        = JRequest::getCmd('task');
$client      = JRequest::getCmd('client');
$section     = JRequest::getCmd('section');
$scope       = JRequest::getCmd('scope');
$menutype    = JRequest::getCmd('menutype');

//Template Params
$templateTheme    = $this->params->get('templateTheme');
$mainColor    = $this->params->get('mainColor');
$secondColor    = $this->params->get('secondColor');
$backgroundColor    = $this->params->get('backgroundColor');
$linkColor    = $this->params->get('linkColor');

if($mainColor || $secondColor || $backgroundColor){
$customColors = 1;
} else {
$customColors = 0;
}

$adminTitle  = $this->params->get('adminTitle');
$showSidebar  = $this->params->get('showSidebar', 1);
$showQuickAdd  = $this->params->get('showQuickAdd', 1);
$showComponentList  = $this->params->get('showComponentList', 1);
$switchSidebar  = $this->params->get('switchSidebar', 0);
$bottomStatus = $this->params->get('bottomStatus', 0);
$showBreadCrumbs = $this->params->get('showBreadCrumbs', 0);
$showChildren  = $this->params->get('showChildren', 0);
$fontSize  = $this->params->get('fontSize');
$minWidth  = $this->params->get('minWidth');
$sidebarWidth  = $this->params->get('sidebarWidth');

$menusAcl = $this->params->get('menusAcl', 0);
$categoriesAcl = $this->params->get('categoriesAcl', 0);
$articlesAcl = $this->params->get('articlesAcl', 0);
$componentsAcl = $this->params->get('componentsAcl', 0);
$modulesAcl = $this->params->get('modulesAcl', 0);
$pluginsAcl = $this->params->get('pluginsAcl', 0);
$templatesAcl = $this->params->get('templatesAcl', 0);
$usersAcl = $this->params->get('usersAcl', 0);
$adminAcl = $this->params->get('adminAcl', 0);
$installAcl = $this->params->get('installAcl', 0);

$wideComponents = explode(',', $this->params->get('wideComponents'));
if (in_array($option, $wideComponents)) {
$showSidebar = 0;
} else if(($task =="edit") || ($task =="add")){
$showSidebar = 0;
}
?>
