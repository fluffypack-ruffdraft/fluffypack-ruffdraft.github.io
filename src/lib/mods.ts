import modData from "./data/mods";

export type ModTag =
	| "Magic"
	| "Utility"
	| "Storage"
	| "Tech"
	| "World Generation"
	| "Exploration"
	| "Addon"
	| "Compatibility"
	| "Cosmetics"
	| "Performance"
	| "Highlight";

export type Mod = {
	name: string;
	tags: ModTag[];
	description: string;
	link: string;
	clientside?: boolean;
	image: string;
};

const mods = modData as Mod[];
export { mods };
