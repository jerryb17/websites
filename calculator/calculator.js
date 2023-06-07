/*
	Gewichtsrechner

*/

function intval( mixed_var, base ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: stensi
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    var tmp;
    if( typeof( mixed_var ) == 'string' ){
        tmp = parseInt(mixed_var*1);
        if(isNaN(tmp) || !isFinite(tmp)){
            return 0;
        } else{
            return tmp.toString(base || 10);
        }
    } else if( typeof( mixed_var ) == 'number' && isFinite(mixed_var) ){
        return Math.floor(mixed_var);
    } else{
        return 0;
    }
}

function floatval(mixed_var) {
    // +   original by: Michael White (http://crestidg.com)
    // %        note 1: The native parseFloat() method of JavaScript returns NaN when it encounters a string before an int or float value.
    return (parseFloat(mixed_var) || 0);
}

var gwr_akttyp = 'rundstahl';
var gesperrt = false;

function gwr_changeType() {
	if (!gesperrt) {
		gesperrt = true;
		$('gwr_' + $('gwr_typ').value).show();
		$('gwr_' + gwr_akttyp).hide();
		gwr_akttyp = $('gwr_typ').value;
		gesperrt = false;
	}
}

function gwr_convert_comma(value) {
	return value.replace(/\,/g, ".");
}

function gwr_convert_point(value) {
	return (value.toString()).replace(/\./g, ",");
}

function gwr_rundstahl_aktualisiere() {
	var d = floatval(gwr_convert_comma($('gwr_rundstahl_d').value));
	var l = gwr_convert_comma($('gwr_rundstahl_l').value);
	var n = gwr_convert_comma($('gwr_rundstahl_n').value);
	var kgm = (d*d)*(0.785*0.785)/100;
	var ergebnis = kgm*l*n;

	$('gwr_rundstahl_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_rundstahl_ergebnis').value = gwr_convert_point(round_1000(ergebnis));
}

function round_1000(val) {
	return Math.round(val * 1000) / 1000;
}

function gwr_vierkant_aktualisiere() {
	var a = floatval(gwr_convert_comma($('gwr_vierkant_a').value));
	var l = gwr_convert_comma($('gwr_vierkant_l').value);
	var n = gwr_convert_comma($('gwr_vierkant_n').value);
	var kgm = a*a*7.85/1000;
	var ergebnis = kgm*l*n;

	$('gwr_vierkant_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_vierkant_ergebnis').value = gwr_convert_point(round_1000(ergebnis));
}

function gwr_rohre_aktualisiere() {
	var D = gwr_convert_comma($('gwr_rohre_d').value);
	var s = gwr_convert_comma($('gwr_rohre_s').value);
	var l = gwr_convert_comma($('gwr_rohre_l').value);
	var n = gwr_convert_comma($('gwr_rohre_n').value);
	var d = D - (2*s);

	var kgm = ((D*D)*(0.785*0.785)/100) - ((d*d)*(0.785*0.785)/100);
	var ergebnis = kgm*l*n;

	$('gwr_rohre_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_rohre_ergebnis').value = gwr_convert_point(round_1000(ergebnis));
}

function gwr_sechskant_aktualisiere() {
	var s = gwr_convert_comma($('gwr_sechskant_s').value);
	var l = gwr_convert_comma($('gwr_sechskant_l').value);
	var n = gwr_convert_comma($('gwr_sechskant_n').value);

//	var kgm = ( (3/2)*(s*s)*Math.sqrt(3) )*7.85/1000;
	var kgm = s*s*0.68/100;
	
	var ergebnis = kgm*l*n;

	$('gwr_sechskant_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_sechskant_ergebnis').value = gwr_convert_point(round_1000(ergebnis));
}

function gwr_bleche_aktualisiere() {
	var s = gwr_convert_comma($('gwr_bleche_s').value);
	var n = gwr_convert_comma($('gwr_bleche_n').value);

	var kgm = s*7.85;

	var ergebnis_1000 = kgm*n;
	var ergebnis_2000 = kgm*2*n;
	var ergebnis_2500 = kgm*1.25*2.5*n;
	var ergebnis_3000 = kgm*1.5*3*n;

	$('gwr_bleche_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_bleche_ergebnis_1000').value = gwr_convert_point(round_1000(ergebnis_1000));
	$('gwr_bleche_ergebnis_2000').value = gwr_convert_point(round_1000(ergebnis_2000));
	$('gwr_bleche_ergebnis_2500').value = gwr_convert_point(round_1000(ergebnis_2500));
	$('gwr_bleche_ergebnis_3000').value = gwr_convert_point(round_1000(ergebnis_3000));
}

function gwr_flach_aktualisiere() {
	var s = floatval(gwr_convert_comma($('gwr_flach_s').value));
	var b = floatval(gwr_convert_comma($('gwr_flach_b').value));
	var l = gwr_convert_comma($('gwr_flach_l').value);
	var n = gwr_convert_comma($('gwr_flach_n').value);

	var kgm = b*l*s*7.85/1000;

	var ergebnis = kgm*n;

	$('gwr_flach_kgm').value = gwr_convert_point(round_1000(kgm));
	$('gwr_flach_ergebnis').value = gwr_convert_point(round_1000(ergebnis));
}