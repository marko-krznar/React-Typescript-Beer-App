export interface Ibeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu?: number | null;
  target_fg: number;
  target_og: number;
  ebc?: number | null;
  srm?: number | null;
  ph?: number | null;
  attenuation_level: number;
  volume: TempOrAmountOrVolumeOrBoilVolume;
  boil_volume: TempOrAmountOrVolumeOrBoilVolume;
  method: Method;
  ingredients: Ingredients;
  food_pairing?: string[] | null;
  brewers_tips: string;
  contributed_by: string;
}
export interface TempOrAmountOrVolumeOrBoilVolume {
  value: number;
  unit: string;
}
export interface Method {
  mash_temp?: MashTempEntity[] | null;
  fermentation: Fermentation;
  twist?: string | null;
}
export interface MashTempEntity {
  temp: TempOrAmountOrVolumeOrBoilVolume;
  duration?: number | null;
}
export interface Fermentation {
  temp: TempOrAmountOrVolumeOrBoilVolume;
}
export interface Ingredients {
  malt?: MaltEntity[] | null;
  hops?: HopsEntity[] | null;
  yeast: string;
}
export interface MaltEntity {
  name: string;
  amount: TempOrAmountOrVolumeOrBoilVolume;
}
export interface HopsEntity {
  name: string;
  amount: TempOrAmountOrVolumeOrBoilVolume;
  add: string;
  attribute: string;
}
