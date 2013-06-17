<?php
/**
 * @version		$Id: modules.php 14569 2010-02-04 07:04:58Z eddieajau $
 * @package		Joomla.Administrator
 * @subpackage	templates.aplite
 * @copyright	Copyright (C) 2005 - 2010 Open Source Matters, Inc. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 */

// no direct access
defined('_JEXEC') or die;

/**
 * This is a file to add template specific chrome to module rendering.  To use it you would
 * set the style attribute for the given module(s) include in your template to use the style
 * for each given modChrome function.
 *
 * eg.  To render a module mod_test in the submenu style, you would use the following include:
 * <jdoc:include type="module" name="test" style="submenu" />
 *
 * This gives template designers ultimate control over how modules are rendered.
 *
 * NOTICE: All chrome wrapping methods should be named: modChrome_{STYLE} and take the same
 * two arguments.
 */

/*
 * Module chrome for rendering the module in a submenu
 */
function modChrome_title($module, &$params, &$attribs)
{
	if ($module->content)
	{
		?>
		<div id="<?php echo $attribs['id'] ?>" class="module">
			<div class="module-title">
				<h3><span><?php echo $module->title; ?></span></h3>
			</div>
			<div class="module-inner">
				
			</div>
			<div class="module-content">
				<?php echo $module->content; ?>
				<div class="clr"></div>
			</div>
			<div class="module-footer">
				
			</div>
		</div>
		<?php
	}
}
?>