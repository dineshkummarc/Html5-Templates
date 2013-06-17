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

defined('_JEXEC') or die('Restricted access');

class modQuickAddLiteHelper {

	function getContentLists() {
		$mainframe = &JFactory::getApplication();

		// Initialize variables
		$db				= & JFactory::getDBO();
		$user			= & JFactory::getUser();
		
		$sectionid		= 0;
		$catid			= 0;
		
		$where = ' WHERE section NOT LIKE "%com_%"';

		$query = 'SELECT s.id, s.title' .
				' FROM #__sections AS s' .
				' ORDER BY s.ordering';
		$db->setQuery($query);

		$sections[] = JHTML::_('select.option', '-1', '- '.JText::_('Select Section').' -', 'id', 'title');
		$sections[] = JHTML::_('select.option', '0', JText::_('Uncategorized'), 'id', 'title');
		$sections = array_merge($sections, $db->loadObjectList());
		$lists['sectionid'] = JHTML::_('select.genericlist',  $sections, 'sectionid', 'class="inputbox" size="1" ', 'id', 'title', intval($sectionid));

		foreach ($sections as $section)
		{
			$section_list[] = (int) $section->id;
			// get the type name - which is a special category
			
			if ($section->id == $sectionid) {
				$contentSection = $section->title;
			}
			
		}

		$sectioncategories = array ();
		$sectioncategories[-1] = array ();
		$sectioncategories[-1][] = JHTML::_('select.option', '-1', JText::_( 'Select Category' ), 'id', 'title');
		$section_list = implode('\', \'', $section_list);

		$query = 'SELECT id, title, section' .
				' FROM #__categories' .
				' WHERE section IN ( \''.$section_list.'\' )' .
				' ORDER BY ordering';
		$db->setQuery($query);
		$cat_list = $db->loadObjectList();

		// Uncategorized category mapped to uncategorized section
		$uncat = new stdClass();
		$uncat->id = 0;
		$uncat->title = JText::_('Uncategorized');
		$uncat->section = 0;
		$cat_list[] = $uncat;
		foreach ($sections as $section)
		{
			$sectioncategories[$section->id] = array ();
			$rows2 = array ();
			foreach ($cat_list as $cat)
			{
				if ($cat->section == $section->id) {
					$rows2[] = $cat;
				}
			}
			foreach ($rows2 as $row2) {
				$sectioncategories[$section->id][] = JHTML::_('select.option', $row2->id, $row2->title, 'id', 'title');
			}
		}
		$sectioncategories['-1'][] = JHTML::_('select.option', '-1', JText::_( 'Select Category' ), 'id', 'title');
		$categories = array();
		foreach ($cat_list as $cat) {
			if($cat->section == $sectionid)
				$categories[] = $cat;
		}

		$categories[] = JHTML::_('select.option', '-1', JText::_( 'Select Category' ), 'id', 'title');
		$lists['catid'] = JHTML::_('select.genericlist',  $categories, 'catid', 'class="inputbox" size="1"', 'id', 'title', intval($catid));

		// build the html radio buttons for frontpage
		$lists['frontpage'] = JHTML::_('select.booleanlist', 'frontpage', '', 0);

		// build the html radio buttons for published
		$lists['state'] = JHTML::_('select.booleanlist', 'state', '', 0);
		
		$js = "window.addEvent('domready', function() {
			$('quickAddContentForm').addEvent('submit', function(e) {
				if (this.task.getProperty('value') != '') {
					var msg = '';
					if (this.title.getProperty('value') == '') {
						msg += \"Please enter a title.\\n\";
					}
					
					if (this.text.getProperty('value') == '') {
						msg += \"Please enter some text.\\n\";
					}
					
					if (msg != '') {
						new Event(e).stop();
						alert(msg);
						return false;
					} else {
						return true;
					}
				}
			});
			
			$('sectionid').addEvent('change', function() {
				changeDynaList( 'catid', sectioncategories, document.adminForm.sectionid.options[document.adminForm.sectionid.selectedIndex].value, 0, 0);
			});
			
			$('quickadd_save').addEvent('click', function(e) {
				$('quickadd_task').setProperty('value', 'save');
			});
			$('quickadd_apply').addEvent('click', function(e) {
				$('quickadd_task').setProperty('value', 'apply');
			});
			$('quickadd_reset').addEvent('click', function(e) {
				new Event(e).stop();
				$('quickadd_task').setProperty('value', '');
				$$('#quickAddContentForm input[type=text],#quickAddContentForm textarea').each(function(el) {
					el.setProperty('value', '');
				});
				$('sectionid').selectedIndex = 0;
				$('sectionid').fireEvent('change');
				
				var radios = $$('#quickAddContentForm input[type=radio]');
				for (var i=0; i<radios.length; i++) {
					var el = radios[i];
					var prev = i-1;
					if (i==0 || el.getProperty('name') != radios[prev].getProperty('name')) {
						el.setProperty('checked', true);
					} else {
						el.setProperty('checked', false);
					}
				}
			});
		});";
		
		$js .= "var sectioncategories = new Array;";
		
		$i = 0;
		foreach ($sectioncategories as $k=>$items) {
			foreach ($items as $v) {
				$js .= "sectioncategories[".$i++."] = new Array( '$k','".addslashes( $v->id )."','".addslashes( $v->title )."' );\n\t\t";
			}
		}
		
		$document = &JFactory::getDocument();
		$document->addScriptDeclaration($js);
		
		return $lists;
	}

}
