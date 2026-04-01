export type TagEntries = [string, string[]][];

let Tags: typeof import("./tags.json");

export const getTags = async () => {
  Tags = Tags || await import("./tags.json");
  const entries = Object.entries(Tags);
  const names = entries.map(([name]) => name);
  return {
    entries,
    names,
  }
};
