import Header from '@/components/header';
import Hero from '@/components/hero';

export default function Page() {
	return (
		<div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-violet-500/30">
			<Header />
			<main>
				<Hero />
			</main>
		</div>
	)
}