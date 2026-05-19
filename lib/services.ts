import fs from 'fs';
import path from 'path';
import type { Badge, Service, SubGroup, CategoryGroup } from './types';

export type { Badge, Service, SubGroup, CategoryGroup } from './types';
export { formatPrice } from './format';

function detectBadge(badgeRaw: string, descripcion: string): Badge {
  const b = badgeRaw.trim();
  if (b === 'Más pedido') return 'Más pedido';
  const desc = descripcion.toLowerCase();
  if (desc.includes('sin cargo')) return 'Sin cargo';
  if (desc.includes('pedir cotización') || desc.includes('pedir cotizacion'))
    return 'Pedir cotización';
  return null;
}

function parseRow(fields: string[]): Service | null {
  if (fields.length < 4) return null;

  const categoria = fields[0]?.trim() ?? '';
  const sub_categoria = fields[1]?.trim() ?? '';
  const nombre = fields[2]?.trim() ?? '';

  let descripcion = '';
  let precio = 0;
  let badgeRaw = '';

  if (fields.length >= 6) {
    descripcion = fields[3]?.trim() ?? '';
    precio = parseInt(fields[4]?.trim() ?? '0', 10) || 0;
    badgeRaw = fields[5]?.trim() ?? '';
  } else {
    precio = parseInt(fields[3]?.trim() ?? '0', 10) || 0;
    badgeRaw = fields[4]?.trim() ?? '';
  }

  return {
    categoria,
    sub_categoria,
    nombre,
    descripcion,
    precio,
    badge: detectBadge(badgeRaw, descripcion),
  };
}

export function getAllServices(): Service[] {
  const filePath = path.join(process.cwd(), 'docs', 'services-items.csv');
  const raw = fs.readFileSync(filePath, 'utf-8');

  return raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .slice(1)
    .map((line) => parseRow(line.split(',')))
    .filter((s): s is Service => s !== null && s.categoria !== '');
}

export function getServicesByCategory(): CategoryGroup[] {
  const services = getAllServices();
  const categoryMap = new Map<string, Map<string, Service[]>>();

  for (const service of services) {
    if (!categoryMap.has(service.categoria))
      categoryMap.set(service.categoria, new Map());
    const subMap = categoryMap.get(service.categoria)!;
    const key = service.sub_categoria || '__none__';
    if (!subMap.has(key)) subMap.set(key, []);
    subMap.get(key)!.push(service);
  }

  return Array.from(categoryMap.entries()).map(([categoria, subMap]) => ({
    categoria,
    subGroups: Array.from(subMap.entries()).map(([key, svcs]) => ({
      sub_categoria: key === '__none__' ? '' : key,
      services: svcs,
    })),
  }));
}

export function getFeaturedServices(): Service[] {
  return getAllServices().filter((s) => s.badge === 'Más pedido');
}
