export const config = {
	runtime: "edge",
};

export default async (request: Request) => {
	const name = new URL(request.url).searchParams.get("name");

	if (name) {
		return new Response(`hello ${name}`);
	} else {
		return new Response("hello world");
	}
};
