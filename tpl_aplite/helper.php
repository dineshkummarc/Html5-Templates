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

class AdminPraiseHelper
{
	function checkLogin()
	{
		global $mainframe;
		DEFINE('GOTOSTARTPAGE_COOKIE', 'ap_gotostartpage');
		DEFINE('LOGINPAGELOCATION_COOKIE', 'ap_loginpagelocation');
		DEFINE('STARTPAGE_COOKIE', 'ap_startpage');

		$gotostartpage = @$_COOKIE[GOTOSTARTPAGE_COOKIE];

		if($gotostartpage)
		{
			setcookie(GOTOSTARTPAGE_COOKIE, 0);

			$uri = JFactory::getURI();
			$url = $uri->toString();
			$loginpagelocation = @$_COOKIE[LOGINPAGELOCATION_COOKIE];
			$loginpagelocationuri = new JURI($loginpagelocation);
			$query = $loginpagelocationuri->getQuery();
			if($query && strpos($query, 'com_login') === FALSE)
			{
				if($loginpagelocation && $url != $loginpagelocation)
				{
					$mainframe->redirect($loginpagelocation);
				}
			}
			else
			{
				$startpage = @$_COOKIE[STARTPAGE_COOKIE];
				if($startpage && $url != $startpage)
				{
					$mainframe->redirect($startpage);
				}
			}
		}
	}

	function getFileBrowserLink()
	{
		$db = &JFactory::getDBO();
		$options = array('com_joomlaxplorer', 'com_extplorer', 'com_quixplorer', 'com_ninjaxplorer');
		
		foreach ($options AS $option)
		{
			// check for file browser
			$query = "SELECT admin_menu_link FROM #__components WHERE `option` = '$option' AND parent = '0'";
			$db->setQuery($query);
			$r = $db->loadResult();

			if($r) { return 'index.php?'.$r; }       
		}

		return null;       
	}

	function getAdminParamsLink()
	{
		$tpiComponentName = 'com_tpi';
		$tpiComponent = JComponentHelper::getComponent($tpiComponentName, true);
		if($tpiComponent && $tpiComponent->enabled)
		{
			return 'index.php?option='.$tpiComponentName;
		}
		else
		{
			return 'index.php?option=com_templates&task=edit&cid[]=adminpraise2&client=1';
		}
	}

	function getUserLink($task = null, $filterType = null, $filterLogged = null)
	{
		$db = &JFactory::getDBO();
		
		$query = "SELECT admin_menu_link FROM #__components WHERE `option` = 'com_comprofiler' AND name = 'User Management'";
		$db->setQuery($query);
		$r = $db->loadResult();

		if($r)
		{
			$link = 'index.php?option=com_comprofiler';

			if(!$task)
			{
				$task = 'showusers';
			}
			else if($task == 'add')
			{
				$task = 'new';
			}
		}
		else
		{
			$link = 'index.php?option=com_users';
		}

		if($task)
		{
			$link .= '&task='.$task;
		}
		if($filterType)
		{
			$link .= '&filter_type='.$filterType;
		}
		if($filterLogged)
		{
			$link .= '&filter_logged='.$filterLogged;
		}

		return $link;
	}
}

?>
