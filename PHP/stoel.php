<?php

  class Stoel {

    // Fields (eigenschappen)
    private int $zithoogte;
    private string $kleur;

    // Constructor (start van blauwdruk)
    public function __construct($ingevoerdeKleur, $ingevoerdeZithoogte)
    {
      $this->kleur = $ingevoerdeKleur;
      $this->zithoogte = $ingevoerdeZithoogte;
    }

    // Functions (handelingen)
    public function echoKleur(){
      return "De stoel is: ".$this->kleur;
    }

    public function echoZithoogte() {
      return "Zithoogte" . " " .$this->kleur . "stoel: " .$this->zithoogte;
      
    }

    public function verstelZithoogte($verstellen) {
      $this->zithoogte =  $verstellen;
      return "Zitgoogte na verstelling: " . $this->zithoogte;

    }

  }