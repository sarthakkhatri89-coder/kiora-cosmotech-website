declare module "next" {
  export interface Metadata {
    [key: string]: unknown;
  }

  export interface Viewport {
    [key: string]: unknown;
  }

  export namespace MetadataRoute {
    type Sitemap = Array<Record<string, unknown>>;
    type Robots = Record<string, unknown>;
  }
}

declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next/types.js" {
  export type ResolvingMetadata = unknown;
  export type ResolvingViewport = unknown;
}

declare module "next/navigation" {
  export function notFound(): never;
}

declare module "next/font/google" {
  export const Inter: any;
  export const Playfair_Display: any;
}

declare module "next/*" {
  const nextModule: any;
  export = nextModule;
}
