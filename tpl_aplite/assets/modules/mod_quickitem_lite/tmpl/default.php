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
?>
<form action="index.php" method="post" name="adminForm" id="quickAddContentForm">

		<table class="quickAddTable admintable">
		<tr class="quickadd_title">
			<td class="key">
				<label for="title">
					<?php echo JText::_( 'Title' ); ?>
				</label>
			</td>
			<td>
				<input class="inputbox" type="text" name="title" id="title" size="20" maxlength="255" />
			</td>
		</tr>
		<tr class="quickadd_alias">
			<td class="key">
				<label for="alias">
					<?php echo JText::_( 'Alias' ); ?>
				</label>
			</td>
			<td>
				<input class="inputbox" type="text" name="alias" id="alias" size="20" maxlength="255" title="<?php echo JText::_( 'ALIASTIP' ); ?>" />
			</td>
		</tr>
		<tr class="quickadd_section">
			<td class="key">
				<label for="sectionid">
					<?php echo JText::_( 'Section' ); ?>
				</label>
			</td>
			<td>
				<?php echo $lists['sectionid']; ?>
			</td>
		</tr>
		<tr class="quickadd_category">
			<td class="key">
				<label for="catid">
					<?php echo JText::_( 'Category' ); ?>
				</label>
			</td>
			<td>
				<?php echo $lists['catid']; ?>
			</td>
		</tr>
		<tr class="quickadd_state">
			<td class="key">
				<label>
					<?php echo JText::_( 'Published' ); ?>
				</label>
			</td>
			<td>
				<?php echo $lists['state']; ?>
			</td>
		</tr>
		<tr class="quickadd_frontpage">
			<td class="key">
				<label>
				<?php echo JText::_( 'Frontpage' ); ?>
				</label>
			</td>
			<td>
				<?php echo $lists['frontpage']; ?>
			</td>
		</tr>
		
		<tr class="quickadd_textarea">
			<td colspan="2">
				<textarea name="text" class='inputbox'></textarea>
			</td>
		</tr>
		<tr class="quickadd_buttons">
			<td colspan="2">
				<input type="submit" name="save" id="quickadd_save" value="<?php echo JText::_('SAVE'); ?>" class="button" />
				<input type="submit" name="apply" id="quickadd_apply" value="<?php echo JText::_('SAVE_EDIT');?>" class="button" />
				<input type="submit" name="reset" id="quickadd_reset" value="<?php echo JText::_('RESET');?>" class="button"/>
			</td>
		</tr>
		</table>


<input type="hidden" name="id" value="" />
<input type="hidden" name="cid[]" value="" />
<input type="hidden" name="version" value="" />
<input type="hidden" name="mask" value="0" />
<input type="hidden" name="option" value="com_content" />
<input type="hidden" name="task" id="quickadd_task" value="" />
<?php echo JHTML::_( 'form.token' ); ?>
</form>
