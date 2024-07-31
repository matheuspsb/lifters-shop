export type ColorProps = {
  nome: string;
  codigo: string;
}

export type PictureProps = {
  url: string;
  capa: boolean;
}

export type ProductProps = {
  titulo: string;
  valor: string;
  descricao: string;
  categoria: string;
  cores: ColorProps[];
  tamanhos: string[];
  fotos: PictureProps[];
}

export interface CartVisibility {
  isCartVisible: boolean;
  showCart: () => void;
  hideCart: () => void;
}