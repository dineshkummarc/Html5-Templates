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
defined( '_JEXEC' ) or die( 'Restricted access' );

require_once('assets/variables'.DS.'variables.php');

//Template Params
$templateTheme    = $this->params->get('templateTheme');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" dir="<?php echo $this->direction; ?>" >
<head>
<jdoc:include type="head" />

<link href="templates/<?php echo  $this->template ?>/css/template.css" rel="stylesheet" type="text/css" />
 <!--[if IE]>
 <link href="templates/<?php echo  $this->template ?>/css/min-ie.css" rel="stylesheet" type="text/css" />
<![endif]-->
<script type="text/javascript" src="templates/<?php echo $this->template ?>/js/aplite.js"></script>
<script type="text/javascript">
	window.addEvent('domready', function () {
		document.getElementById('form-login').username.select();
		document.getElementById('form-login').username.focus();
	});
</script>

<?php
require_once('assets/variables'.DS.'login.php');
require_once('assets/styles'.DS.'login.php');
?>
</head>
<body id="login" onload="javascript:setFocus()" class="<?php echo $templateTheme;?>">
<div id="ap-login">
	<div id="content-box">
		<div class="padding">
			<div id="element-box" class="login">
				<h3>
				<?php echo JText::_('ADMIN') ?>
				</h3>
				<div>
					<jdoc:include type="message" />
					<jdoc:include type="component" />
					<div id="lock"></div>
					<div class="clear"></div>
				</div>
			</div>
			<noscript>
				<?php echo JText::_('WARNJAVASCRIPT') ?>
			</noscript>
			<div class="clr"></div>
		</div>
	</div>
</div>
	<div id="ap-footer" class="ap-padding">
		<!--begin-->
		<p class="copyright">
		<?php /* You are free to edit or remove the footer links */ ?>
		<a target="_blank" href="http://www.adminpraise.com/joomla/admin-templates.php" title="<?php echo JText::_( 'TPL_ADMINPRAISE_TEMPLATES' );?>"><?php echo JText::_( 'TPL_ADMINPRAISE_TEMPLATES' );?></a>
		&amp; <a target="_blank" href="http://www.adminpraise.com/joomla/admin-extensions.php" title="<?php echo JText::_( 'TPL_ADMINPRAISE_EXTENSIONS' );?>"><?php echo JText::_( 'TPL_ADMINPRAISE_EXTENSIONS' );?></a>
		<?php echo JText::_( 'TPL_BY' );?> <a target="_blank" href="http://www.adminpraise.com/" title="<?php echo JText::_( 'TPL_ADMINPRAISE_DESC' );?>"><?php echo JText::_( 'TPL_ADMINPRAISE' );?></a>.
		 <?php echo JText::_( 'TPL_POWERED_BY' );?>
		<a target="_blank" href="http://www.joomla.org/"><?php echo JText::_( 'TPL_JOOMLA' );?></a> 
		</p>
		<!--end-->
		<div class="clear">&nbsp;</div>
	</div>
</body>
</html>
