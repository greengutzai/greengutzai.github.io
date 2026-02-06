"use client";

import { Download } from "lucide-react";
import { Link } from "react-scroll";

export default function Hero() {
	return (
		<section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
			
			<div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/20 rounded-full blur-[80px]" />

			<div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
				<div>
					<div className="inline-block px-3 py-1 mb-4 border border-violet-500/30 rounded-full bg-violet-500/10 text-violet-300 text-sm font-medium">
                        Available for opportunities
                    </div>
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <br />
                        <span className="text-gradient">Axel Mah</span>
                    </h1>
					<p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                        Software Engineer specializing in building mobile applications with the <span className="text-violet-400 font-semibold">KOTLIN</span> & <span className="text-pink-400 font-semibold">FLUTTER</span>.
                    </p>
					<div className="flex flex-wrap gap-4 mb-10">
                        <Link to="projects" smooth={true} offset={-100} className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-violet-600/20 cursor-pointer">
                            View Work
                        </Link>
                        {/* <a href="/Shashidhar_Naik_2025.pdf" download className="px-8 py-3 border border-slate-700 hover:border-violet-500 hover:text-violet-400 text-slate-300 rounded-lg font-medium transition-all flex items-center gap-2 group">
                            <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            Download CV
                        </a> */}
                    </div>
				</div>
				<div>
					<div className="min-h-[500px] border border-slate-800 bg-slate-900/50 rounded-2xl">
						<div className="border-b border-slate-800 p-4 flex gap-2 items-center">
							<div className="w-3 h-3 bg-red-500/80 rounded-full"/>
							<div className="w-3 h-3 bg-yellow-500/80 rounded-full"/>
							<div className="w-3 h-3 bg-green-500/80 rounded-full"/>
							<span className="ml-4 text-xs text-slate-500 font-mono">Developer.tsx</span>
						</div>
						<div className="p-8 text-slate-400 text-s font-mono space-y-4">
							<div>
								<span className="text-violet-400">const</span>&nbsp;
								<span className="text-blue-400">developer</span>
								&nbsp;=&nbsp;
								<span className="text-yellow-400">{"{"}</span>
							</div>
							<div className="ml-6">
								name:&nbsp;
								<span className="text-green-400">{"'Axel Mah'"}</span>,
							</div>
							<div className="ml-6">
								role:&nbsp;
								<span className="text-green-400">{"'Mobile Developer'"}</span>,
							</div>
							<div className="ml-6">
								experience:&nbsp;
								<span className="text-green-400">{"'10+'"}</span>,
							</div>
							<div className="ml-6">
								skill:&nbsp;
								<span className="text-yellow-400">{"['Android Native Kotlin']"}</span>,
							</div>
							<div>
								<span className="text-yellow-400">{"}"}</span>;
							</div>
							<div className="animate-pulse">
								<span className="text-violet-400">developer</span>.
								<span className="text-blue-400">buildAwesomeThings</span>()
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}