import { atomWithStorage } from "jotai/utils";

export const viewModeAtom = atomWithStorage<"grid" | "list">("viewMode", "grid");