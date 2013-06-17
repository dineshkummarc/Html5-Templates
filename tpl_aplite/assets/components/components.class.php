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

defined('_JEXEC') or die('Direct access is not allowed');

class APclass
{
	function load_components($authCheck = true)
	{
	// Initialise variables.
			$lang	= JFactory::getLanguage();
			$user	= JFactory::getUser();
			$db		= JFactory::getDbo();
			$query	= $db->getQuery(true);
			$result	= array();
			$langs	= array();
	
			// Prepare the query.
			$query->select('m.id, m.title, m.alias, m.link, m.parent_id, m.img, e.element');
			$query->from('#__menu AS m');
	
			// Filter on the enabled states.
			$query->leftJoin('#__extensions AS e ON m.component_id = e.extension_id');
			$query->where('m.client_id = 1');
			$query->where('e.enabled = 1');
			$query->where('m.id > 1');
	
			// Order by lft.
			$query->order('m.title');
	
			$db->setQuery($query);
			// component list
			$components	= $db->loadObjectList();
	
			// Parse the list of extensions.
			foreach ($components as &$component) {
				// Trim the menu link.
				$component->link = trim($component->link);
	
				if ($component->parent_id == 1) {
					// Only add this top level if it is authorised and enabled.
					if ($authCheck == false || ($authCheck && $user->authorise('core.manage', $component->element))) {
						// Root level.
						$result[$component->id] = $component;
						if (!isset($result[$component->id]->submenu)) {
							$result[$component->id]->submenu = array();
						}
	
						// If the root menu link is empty, add it in.
						if (empty($component->link)) {
							$component->link = 'index.php?option='.$component->element;
						}
	
						if (!empty($component->element)) {
							$langs[$component->element.'.sys'] = true;
						}
					}
				} else {
					// Sub-menu level.
					if (isset($result[$component->parent_id])) {
						// Add the submenu link if it is defined.
						if (isset($result[$component->parent_id]->submenu) && !empty($component->link)) {
							$result[$component->parent_id]->submenu[] = &$component;
						}
					}
				}
			}
	
			// Load additional language files.
			foreach (array_keys($langs) as $langName) {
				// Load the core file then
				// Load extension-local file.
					$lang->load($langName, JPATH_BASE, null, false, false)
				||	$lang->load($langName, JPATH_ADMINISTRATOR.'/components/'.str_replace('.sys', '', $langName), null, false, false)
				||	$lang->load($langName, JPATH_BASE, $lang->getDefault(), false, false)
				||	$lang->load($langName, JPATH_ADMINISTRATOR.'/components/'.str_replace('.sys', '', $langName), $lang->getDefault(), false, false);
			}
	
			return $result;    
	}
}
?>
