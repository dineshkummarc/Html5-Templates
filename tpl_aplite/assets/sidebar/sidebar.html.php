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


class APsidebarhtml
{
	function list_sidebar(&$components)
	{
	$ap_task = (JRequest::getVar('ap_task'));
	$showChildren  = $this->params->get('showChildren', 0);
	echo JHtml::_('sliders.start','sidebar-sliders',array('useCookie'=>'1'));
		?>
			   <?php
			      $k = 0;
			      foreach ($components AS $i => $component)
			      {
			      echo JHtml::_('sliders.panel', JText::_($component->title), 'cpanel-panel-'.$component->title);
			      	  ?>

			      	        <?php

	                                echo "<ul class=\"child-list\" id=\"child-list-".JText::_($component->title)."\">";
	                                
	                                if(count($component->submenu)) {
	                                	foreach ($component->submenu AS $i2 => $child)
    					      	        	{
    	
    		                                    if(JURI::getInstance() == JURI::base().$child->link){
    		                                    	$active = "active";
    		                                    } else {
    		                                    	$active = "";
    		                                    }
    		                                    
    		                                    if(file_exists($child->img)) {
    		                                    	$childimage = "style=\"background-image:url(".$child->img.");\"";
    		                                    } else {
    		                                    	$childimage = "class=\"".substr($child->img, 6)."\"";
    		                                    }
    		                                    
    		                                    echo "<li class=\"child ".substr($child->img, 6)."\">";
    		
    					      	        		echo "<a href='$child->link' class='child-link $active'><span $childimage>".JText::_($child->title)."</span></a></li>";
    					      	        		$k = 1 - $k;
    					      	        	}
	                                } else {
	                                	if(JURI::getInstance() == JURI::base().$component->link){
	                                		$active = "active";
	                                	} else {
	                                		$active = "";
	                                	}
	                                	if(file_exists($component->img)) {
	                                		$componentimage = "style=\"background-image:url(".$component->img.");\"";
	                                	} else {
	                                		$componentimage = "class=\"".substr($component->img, 6)."\"";
	                                	}
	                                	echo "<li class=\"child\"><a href=\"".$component->link."\" class=\"child-link ".$active."\"><span $componentimage>".JText::_($component->title)."</span></a></li>";
	                                }
	                                
	                                	
				      	        	
	                                echo "</ul>";

			      	     ?>
			      	  <?php
			      	  $k = 1 - $k;
			      }			      
			      $mainframe = JFactory::getApplication();
			      $acl =& JFactory::getACL();
			      $user =&JFactory::getUser();
			      $option      = JRequest::getCmd('option');
			      
			      
			      if ($user->authorise('com_config.manage')) {
			      echo JHtml::_('sliders.panel', JText::_('TPL_SYSTEM_SETTINGS'), 'cpanel-panel-system');
			   ?>
			   		<ul class="child-list" id="child-list-settings">
			   			<li class="child config">
			   				<a href="index.php?option=com_config" class="child-link <?php if ($option =="com_config") { echo "active"; } ?>">
			   					<span class="config">Global Configuration</span>
			   				</a>
			   			</li>
			   			<li class="child system">
			   				<a href="index.php?option=com_admin&view=sysinfo" class="child-link <?php if ($option =="com_admin") { echo "active"; } ?>">
			   					<span class="system">System Information</span>
			   				</a>
			   			</li>
			   			<li class="child cache">
			   				<a href="index.php?option=com_cache" class="child-link <?php if ($option =="com_cache") { echo "active"; } ?>">
			   					<span class="cache">Clear Cache</span>
			   				</a>
			   			</li>
			   			<li class="child checkin">
			   				<a href="index.php?option=com_checkin" class="child-link <?php if ($option =="com_checkin") { echo "active"; } ?>">
			   					<span class="checkin">Global Check-In</span>
			   				</a>
			   			</li>
			   			<li class="child install">
			   				<a href="index.php?option=com_installer" class="child-link <?php if ($option =="com_installer") { echo "active"; } ?>">
			   					<span class="install">Install Extensions</span>
			   				</a>
			   			</li>
			   		</ul>
			   		<?php } ?>
			
		<?php
		echo JHtml::_('sliders.end');
	}
	
}
?>
