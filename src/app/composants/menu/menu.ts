

export interface Menu {
  id?: string;
  titre?: string;
  icon?: string;
  url?: string;
  active?: boolean; //une variable boolean qui est active pour dire est le menu active ou non 
  sousMenu?: Array<Menu>;
}
