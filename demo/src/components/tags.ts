import Tags from "./tags.json";

export type TagsType = [string, string[]][];

export const TagsEntries = Object.entries(Tags);
export const TagNames = TagsEntries.map(([name]) => name);
