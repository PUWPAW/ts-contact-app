export type NationalityType = {
  AU: string;
  BR: string;
  CA: string;
  CH: string;
  DE: string;
  DK: string;
  ES: string;
  FI: string;
  FR: string;
  GB: string;
  IE: string;
  IR: string;
  NO: string;
  NL: string;
  NZ: string;
  TR: string;
  US: string;
};

const Nationality: NationalityType = {
  AU: "AU",
  BR: "BR",
  CA: "CA",
  CH: "CH",
  DE: "DE",
  DK: "DK",
  ES: "ES",
  FI: "FI",
  FR: "FR",
  GB: "GB",
  IE: "IE",
  IR: "IR",
  NO: "NO",
  NL: "NL",
  NZ: "NZ",
  TR: "TR",
  US: "US",
};

// enum Nationality {
//   AU = "AU",
//   BR = "BR",
//   CA = "CA",
//   CH = "CH",
//   DE = "DE",
//   DK = "DK",
//   ES = "ES",
//   FI = "FI",
//   FR = "FR",
//   GB = "GB",
//   IE = "IE",
//   IR = "IR",
//   NO = "NO",
//   NL = "NL",
//   NZ = "NZ",
//   TR = "TR",
//   US = "US",
// }

export const nat = {
  [Nationality.AU]: "Australian",
  [Nationality.BR]: "Brazilian",
  [Nationality.CA]: "Canadian",
  [Nationality.CH]: "Chinese",
  [Nationality.DE]: "German",
  [Nationality.DK]: "Danish",
  [Nationality.ES]: "Spanish",
  [Nationality.FI]: "Finnish",
  [Nationality.FR]: "French",
  [Nationality.GB]: "British",
  [Nationality.IE]: "Irish",
  [Nationality.IR]: "Iranian",
  [Nationality.NO]: "Dutch",
  [Nationality.NL]: "Norwegian",
  [Nationality.NZ]: "Zealand",
  [Nationality.TR]: "Turkish",
  [Nationality.US]: "American",
};
