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
$myEditor = JFactory::getEditor();
$user = JFactory::getUser();
?>

<script type="text/javascript">
	function updateEditor()
	{
		var editor=document.getElementById('myeditor_selection');
		var myXHR=new XHR({method:'post', onSuccess:showUpdateSuccess}).send('index.php', 'option=com_users&task=save&id=<?php echo $user->get('id'); ?>&sendEmail=0&<?php echo JUtility::getToken(); ?>=1&username=<?php echo $user->get('username');?>&params[editor]='+editor.value+'&tmpl=COMPONENT');
		colorSelectBox(true);
	}

	function showUpdateSuccess(req)
	{
		setTimeout('colorSelectBox(false)', 1000);
	}

	function colorSelectBox(set)
	{
		var editor=document.getElementById('myeditor_selection');
		if (set)
			editor.setAttribute("style", "border: 3px solid #3AC521");
		else
			editor.removeAttribute("style");
	}
</script>

<select id="myeditor_selection" onChange="javascript:updateEditor()">
<?php foreach ($editors as $editor)
	if ($myEditor->_name == $editor->element)
		echo '<option value="'.$editor->element.'" SELECTED="SELECTED">'.$editor->element.'</option>';
	else
		echo '<option value="'.$editor->element.'">'.$editor->element.'</option>';
?>
</select>

