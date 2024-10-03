export default class Stoel {
  constructor(kleur, zithoogte) {
    this.kleur = kleur;
    this.zithoogte = zithoogte;
  }

  echoKleur() {
    return `De stole is ${this.kleur}`;
  }

  echoZithoogte() {
    return `Zithoogte ${this.kleur} stoel: ${this.zithoogte}`;
  }

  verstelZithoote(zithoogte) {
    this.zithoote = zithoogte;
    return `Zithoote na verstelling: ${this.zithoote}`;
  }
}
