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

class APcontroller
{
	function list_components()
	{
		$components = &APclass::load_components();
		
		APhtml::list_components($components);
	}
	
	function list_search()
	{
		$keyword = urldecode(JRequest::getVar('gsearch'));
		
		$components = &APclass::loadSearchResults($keyword);
	}
}
?>