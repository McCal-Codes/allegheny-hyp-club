export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export async function getPageData<T>(localData: T): Promise<T> {
  // Future: swap this for a CMS fetch
  // const res = await fetch(`/api/${endpoint}`);
  // return res.json();
  return localData;
}
