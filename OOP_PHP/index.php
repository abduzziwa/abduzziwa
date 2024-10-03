<?php

require_once 'Stoel.php';

$stoelrood = new Stoel("rood", 60);
echo $stoelrood->echoKleur() . "<br>";
echo $stoelrood->echoZithoogte() . "<br>";
echo $stoelrood->verstelZithoogte(70) . "<br>";