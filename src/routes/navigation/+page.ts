interface ILinkList extends Record<string, unknown> {
	[key: string]: {
		link: string;
		group: string;
		icon: string;
		title: string;
	};
}

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch('/api/list');
	const data = (await res.json()) as ILinkList;
	return { linkList: data };
}
