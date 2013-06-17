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
defined('_JEXEC') or die('Restricted access');

require_once (dirname(__FILE__).DS.'helper.php');

$db = &JFactory::getDBO();
$sql = 
	"SELECT menutype, ".
	"	title ".
	"FROM #__menu_types ".
	"ORDER BY title";
$db->setQuery($sql);
$menuTypes = $db->loadAssocList();

$menu = array();
for($i = 0; $i < count($menuTypes); $i++)
{
	$menuType = $menuTypes[$i];

	$menu[] = 
		array(
			'id' => 'menus'.$i, 
			'name' => $menuType['title'],
			'link' => 'index.php?option=com_menus&view=items&menutype='.$menuType['menutype'],
			'type' => 'url', 
			'parent' => 0, 
			'params' => 'menu_image=-1', 
			'access' => 0,
			'children' => array()
		);
}

modAPMenuHelper::renderMenu($menu);

?>

