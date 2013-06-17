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

$mainframe	= &JFactory::getApplication();
$document 	= &JFactory::getDocument();

include_once(dirname(__FILE__).'/helper.php');

$lists = modQuickAddLiteHelper::getContentLists();

$document->addStyleSheet(JURI::root().'administrator/modules/mod_quickitem_lite/tmpl/css/style.css');

require(JModuleHelper::getLayoutPath('mod_quickitem_lite','default'));
