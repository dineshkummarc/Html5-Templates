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

class APhtml
{
	function list_sidebar(&$components)
	{
	$ap_task = (JRequest::getVar('ap_task'));
	$showChildren  = $this->params->get('showChildren', 0);
		?>
			<ul id="component-list">
			   <?php
			      $k = 0;
			      foreach ($components AS $i => $component)
			      {
			      	  ?>
			      	  <li class="component<?php echo $k;?> parent <?php echo substr($component->img, 6);?>">
			      	     <?php if ($component->link) { $ignore_first = false; ?>
			      	        <a onclick="toggle_visibility('child-list-<?php echo JText::_($component->title);?>');" class="parent-link"><?php echo JText::_($component->title);?></a>
			      	     <?php } else { $ignore_first = true; ?>
                            <a href="<?php echo $component->option;?>" class="parent-link"><?php echo JText::_($component->title);?></a>
			      	     <?php } ?>
			      	        <?php
			      	        if(($showChildren) || ($ap_task == "list_components")) {
				      	        if(count($component->submenu)) {
	                                echo "<ul class=\"child-list\" id=\"child-list-".JText::_($component->title)."\">";
				      	        	foreach ($component->submenu AS $i2 => $child)
				      	        	{
	                                    if($i2 == 0 && $ignore_first) {
	                                        continue;
	                                    }
	                                    if(JURI::getInstance() == JURI::base().$child->link){
	                                    	$active = "active";
	                                    } else {
	                                    	$active = "";
	                                    }
	                                    echo "<li class=\"child ".substr($child->img, 6)."\">";
	
				      	        		echo "<a href='$child->link' class='child-link $active'>".JText::_($child->title)."</a></li>";
				      	        		$k = 1 - $k;
				      	        	}
	                                echo "</ul>";
				      	        }
			      	        }
			      	     ?>
			      	  </li>
			      	  <?php
			      	  $k = 1 - $k;
			      }
			   ?>
			</ul>
		<?php
	}
	
}
?>
