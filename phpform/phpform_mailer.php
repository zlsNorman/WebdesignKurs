<?php
// Daten für die Konfiguration
// E-Mail von dir / vom Kunden /////////////////
$mailto      = 'euer@kunde.de';             //
//////////////////////////////////////////////
$mailFrom    = 'siehe_email_feld@mail.de';
$mailSubject = 'Feedback vom PHP-Formular';
$returnPage  = 'phpform_dank.html';
$returnError = 'phpform_error.html';
$mailContent = '';
// Formulardaten einlesen und Mail daraus erstellen
if ( isset( $_POST ) ) {
    foreach ( $_POST as $name => $value ) {
        $mailContent .= $name . " : " . $value . "\n";
    }
}
// E-Mail versenden
$mailSent = mail( $mailto, $mailSubject, $mailContent,
    "From: " . $mailFrom );
// E-Mail-Versand überprüfen und Bestätigungs-/ Fehlerseite aufrufen
if ( $mailSent == TRUE ) {
    header( "Location: " . $returnPage );
} else {
    header( "Location: " . $returnError );
}
exit();
?>
