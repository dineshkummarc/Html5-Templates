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

jimport('joomla.html.parameter');

class modAPMenuHelper
{
	function getMenu($menuType)
	{
		$db = &JFactory::getDBO();

		$sql = 
			"SELECT m.id, ".
			"	m.name, ".
			"	m.link, ".
			"	m.type, ".
			"	m.parent, ".
			"	m.params, ".
			"	m.access ".
			"FROM #__menu AS m ".
			"WHERE m.menutype = ".$db->quote($menuType)." ".
			"	AND m.published = 1 ".
			"ORDER BY m.parent, ".
			"	m.ordering";
		$db->setQuery($sql);

		$menuRows = $db->loadAssocList();

		$menu = modAPMenuHelper::_buildMenu($menuRows);

		/*
		$menu = array(
			array('id' => 1, 'name' => 'Site', 'url' => 'index.php', 'children' => array()),
			array('id' => 1, 'name' => 'Site', 'url' => 'index.php', 'children' => array()),
			array('id' => 1, 'name' => 'Site', 'url' => 'index.php', 'children' => array()),
		);
		*/

		return $menu;
	}

	function &_buildMenu($menuRows)
	{
		$menuItems = array();
		$menu = array();

		foreach($menuRows as $menuRow)
		{
			// This makes a copy
			$menuItem = $menuRow;
			$menuItem['children'] = array();

			$parentId = $menuItem['parent'];
			if($parentId == 0)
			{
				$menu[] = &$menuItem;
			}
			else if(array_key_exists($parentId, $menuItems))
			{
				$menuItems[$parentId]['children'][] = &$menuItem;
			}

			$menuItems[$menuItem['id']] = &$menuItem;
			unset($menuItem);
		}

		return $menu;
	}

	function renderMenu($menu, $top = true)
	{
	    $currentMenu = JRequest::getVar('menutype');
	
//		if($currentMenu) {
//			print "<form method=\"get\" action=\"index.php?option=com_menus\" name=\"menutype\" id=\"menutype_form\"><select id=\"filter_menutype\" name=\"menutype\" onchange=\"location 
//= document.menutype.menutype.options [document.menutype.menutype.selectedIndex].value;\"><option> - " . JText::_( 'SELECT MENU' ) . " - </option>\n";
//		} else {
			print "<ul class=\"submenu\">\n";		
//		}

		$childCount = count($menu);
		for($i = 0; $i < $childCount; $i++)
		{
			modAPMenuHelper::renderMenuItem($menu[$i], $currentMenu);
		}

//		if($currentMenu)
//		{
//			print "</select></form>\n";
//		} else {
			print "</ul>\n";
//		}
	}

	function renderMenuItem($menuItem, $currentMenu)
	{
	    $menuSelected = null;
		static $user = null;
		if($user == null) $user = &JFactory::getUser();

		// access: 0 - Public, 1 - Registered, 2 - Special
		// gid: 23 - Manager, 24 - Administrator, 25 - Super Administrator
		if($menuItem['access'] == 1 && $user->gid < 24 || $menuItem['access'] == 2 && $user->gid < 25)
		{
			return;
		}
		
		if($menuItem['type'] == 'separator')
		{
			print "<li class=\"separator\"><span></span></li>\n";
		}
		else if(strpos($menuItem['link'], 'modules/mod_apmenu/dynamic/') === 0)
		{
			require_once($menuItem['link']);
		}
		else
		{
			$menuItemParams = new JParameter($menuItem['params']);
			$menuImage = $menuItemParams->get('menu_image');
			$anchorExtra = "";

			// Use onclick for any javascript
			if(strpos($menuItem['link'], "javascript:") === 0) {
				$href = "#";
				$anchorExtra = "onclick=\"".$menuItem['link']."\"";
			}
			else {
				$href = $menuItem['link'];
			}
            if(strpos($menuItem['link'],$currentMenu)){
	            $menuSelected = 'selected="selected"';
            } else {
	            $menuSelected = "";
            }

//			if($currentMenu) {
//			    print "<option value=\"".$href."\" " . $menuSelected . ">";
//			} else {
			    print "<li class=\"node\">\n";
			    print "<a id=\"".str_replace(' ','',$menuItem['name'])."\" ".$anchorExtra." href=\"".$href."\">";
//			}
			if($menuImage == -1) {
				print $menuItem['name'];
			}
			else {
				print "<img src=\"".$menuImage."\" />";
			}
//			if($currentMenu) {
//			    print "</option>";
//			} else {
			    print "</a>\n";
//			}

			$childCount = count($menuItem['children']);
			if($childCount > 0)
			{
				print "<ul>\n";
				for($i = 0; $i < $childCount; $i++)
				{
					modAPMenuHelper::renderMenuItem($menuItem['children'][$i]);
				}
				print "</ul>\n";
			}
//			if(!$currentMenu)
//			{
			print "</li>\n";
//			}
		}
	}
}

