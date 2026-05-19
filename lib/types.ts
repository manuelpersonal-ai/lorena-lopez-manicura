export type Badge = 'Más pedido' | 'Sin cargo' | 'Pedir cotización' | null;

export interface Service {
  categoria: string;
  sub_categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
  badge: Badge;
}

export interface SubGroup {
  sub_categoria: string;
  services: Service[];
}

export interface CategoryGroup {
  categoria: string;
  subGroups: SubGroup[];
}

export interface GalleryImage {
  filename: string;
  src: string;
  alt: string;
}
