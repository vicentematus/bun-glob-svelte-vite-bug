import { Glob } from 'bun';
export async function load() {
	// This works
	const bunGlob = new Bun.Glob('**/*.md');

	// This throws runtime error: undefined is not a constructor
	const glob = new Glob('**/*.md');

	return {};
}
