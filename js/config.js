/*
	Minimaxing 3.1 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window._skel_config = {
	preset: 'standard',
	prefix: 'css/style',
	resetCSS: true,
	breakpoints: {
		'1000px': {
			grid: {
				gutters: 25
			}
		}
	}
};

window._skel_panels_config = {
	preset: 'standard'
};

var $count = 0;

var $eb = $('.edit-button');
var $ei = $('.editable-input');
var $ec = $('.editable-cell');

//Editable input fields
$eb.on('click', function() {
  $count++
  if ($count < 2) {
    $ei.prop('readonly', false).focus();
    $ei.prop('placeholder','');
    $ei.val('');
    $(this).addClass('hide');
    $ec.addClass('editing');
  } else {
    $ei.prop('readonly', false).focus();
    $eb.addClass('hide');
    $ec.addClass('editing');
  }
});


$ei.on('blur', function() {
  $eb.removeClass('hide');
  $ei.prop('readonly', true);
  $ec.removeClass('editing');
});
