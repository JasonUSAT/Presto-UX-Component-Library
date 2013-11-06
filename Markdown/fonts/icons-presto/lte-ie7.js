/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icons-presto\'">' + entity + '</span>' + html;
	}
	var icons = {
			'p-icon-quote-left' : '&#x25;',
			'p-icon-quote' : '&#x26;',
			'p-icon-rss' : '&#x27;',
			'p-icon-eraser' : '&#x28;',
			'p-icon-pagebreak' : '&#x29;',
			'p-icon-underline' : '&#x2a;',
			'p-icon-numbered-list' : '&#x2b;',
			'p-icon-blog' : '&#x2c;',
			'p-icon-binoculars' : '&#x2d;',
			'p-icon-redo' : '&#x2e;',
			'p-icon-undo' : '&#x2f;',
			'p-icon-omega' : '&#x30;',
			'p-icon-notes' : '&#x31;',
			'p-icon-selectionadd' : '&#x32;',
			'p-icon-file-xml' : '&#x33;',
			'p-icon-images' : '&#x34;',
			'p-icon-map' : '&#x35;',
			'p-icon-video2' : '&#x36;',
			'p-icon-link' : '&#x37;',
			'p-icon-nail' : '&#xf428;',
			'p-icon-pen' : '&#xe000;',
			'p-icon-movie5' : '&#xf193;',
			'p-icon-newspaper' : '&#xe001;',
			'p-icon-keyboard' : '&#xe002;',
			'p-icon-list' : '&#xe003;',
			'p-icon-crop' : '&#xe004;',
			'p-icon-CQ' : '&#xe006;',
			'p-icon-spinner' : '&#xe005;',
			'p-icon-aspect-16-9' : '&#xe007;',
			'p-icon-aspect-9-16' : '&#xe008;',
			'p-icon-aspect-4-3' : '&#xe009;',
			'p-icon-aspect-3-4' : '&#xe00a;',
			'p-icon-aspect-1-1' : '&#xe00b;',
			'p-icon-notes-not-published' : '&#xe00c;',
			'p-icon-no-syndication' : '&#xe00d;',
			'p-icon-link-break' : '&#xe00e;',
			'p-icon-html' : '&#xf068;',
			'p-icon-text' : '&#xe00f;',
			'p-icon-popup' : '&#xe010;',
			'p-icon-export' : '&#xe011;',
			'p-icon-export-2' : '&#xe012;',
			'p-icon-opennewwindow' : '&#xf332;',
			'p-icon-tablet' : '&#xe013;',
			'p-icon-mobile' : '&#xe014;',
			'p-icon-google-plus' : '&#xe015;',
			'p-icon-twitter' : '&#xe016;',
			'p-icon-facebook' : '&#xe017;',
			'p-icon-radio-unchecked' : '&#xe018;',
			'p-icon-dot' : '&#xf096;',
			'p-icon-check-empty' : '&#x2713;',
			'p-icon-checkmark' : '&#xe019;',
			'p-icon-mark-presto' : '&#xe01a;',
			'p-icon-video-playlist' : '&#xe01b;',
			'p-icon-link-related' : '&#xe01c;',
			'p-icon-fastforward' : '&#xf182;',
			'p-icon-rewind' : '&#xf183;',
			'p-icon-play' : '&#xf184;',
			'p-icon-stop' : '&#xf185;',
			'p-icon-pause' : '&#xf186;',
			'p-icon-repeat' : '&#xf187;',
			'p-icon-shuffle' : '&#xf188;',
			'p-icon-record' : '&#xf189;',
			'p-icon-next' : '&#xf18a;',
			'p-icon-previous' : '&#xf18b;',
			'p-icon-sharethree' : '&#xf414;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/p-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};