export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

export const absoluteUrl = (baseUrl: string, path = "/") => {
  const cleanBase = baseUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export const titleCase = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
