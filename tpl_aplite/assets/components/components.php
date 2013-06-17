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

require_once(dirname(__FILE__).DS.'components.class.php');
require_once(dirname(__FILE__).DS.'components.controller.php');
require_once(dirname(__FILE__).DS.'components.html.php');

global $mainframe;

/*
switch (JRequest::getVar('ap_task'))
{
	case 'list_components':
		APcontroller::list_components();
		break;
		
	case 'gsearch':
		APcontroller::list_search();
		$mainframe->close();
		break;	
}
*/

APcontroller::list_components();

?>