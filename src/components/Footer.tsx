import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Phone, Mail, Link as LinkIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Accueil', href: '#home' },
			{ title: 'Soins', href: '#services' },
			{ title: 'Avant/Après', href: '#results' },
			{ title: 'Avis', href: '#reviews' },
		],
	},
	{
		label: 'Contact',
		links: [
			{ title: 'Chéraga – Petit Staoueli', href: '#', icon: MapPin },
			{ title: '0770 03 03 43', href: 'tel:0770030343', icon: Phone },
			{ title: 'contact@dentismart.dz', href: 'mailto:contact@dentismart.dz', icon: Mail },
		],
	},
	{
		label: 'Horaires',
		links: [
			{ title: 'Dim - Jeu : 08:00 - 18:00', href: '#' },
			{ title: 'Samedi : 09:00 - 14:00', href: '#' },
			{ title: 'Vendredi : Fermé', href: '#' },
		],
	},
	{
		label: 'Réseaux Sociaux',
		links: [
			{ title: 'Facebook', href: '#', icon: LinkIcon },
			{ title: 'Instagram', href: '#', icon: LinkIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-[3rem] relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center rounded-t-[2rem] border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#071326] bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.sky.500/5%),transparent)] dark:bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] px-6 py-12 lg:py-24 mt-20 text-slate-600 dark:text-gray-400 transition-colors duration-1000">
			<div className="bg-slate-200 dark:bg-white/10 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm transition-colors duration-1000" />

			<div className="grid w-full gap-12 xl:grid-cols-4 xl:gap-8">
				<AnimatedContainer className="space-y-6 xl:col-span-1">
          <div className="flex items-center">
            <span className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-sky-500 dark:from-white dark:via-[#d8ecf8] dark:to-[#98c0ef] transition-colors duration-1000">
              Denti<span className="text-sky-500">Smart</span>
            </span>
          </div>
          <p className="text-slate-600 dark:text-gray-500 text-sm transition-colors duration-1000">
            L'excellence de la dentisterie moderne à Alger. Soins esthétiques, orthodontie invisible, et implantologie de pointe.
          </p>
					<p className="text-slate-500 dark:text-gray-600 text-sm mt-8 transition-colors duration-1000">
						© {new Date().getFullYear()} DentiSmart. Tous droits réservés.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-3">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-sm font-semibold text-slate-800 dark:text-white tracking-wider uppercase mb-6 transition-colors duration-1000">{section.label}</h3>
								<ul className="space-y-4 text-sm text-slate-600 dark:text-gray-400 transition-colors duration-1000">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-sky-500 dark:hover:text-white inline-flex items-center transition-all duration-300 group"
											>
												{link.icon && <link.icon className="mr-3 w-4 h-4 text-sky-500 dark:text-[#98c0ef] group-hover:text-sky-600 dark:group-hover:text-white transition-colors" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
