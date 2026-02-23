
import React from 'react';
import { theme } from '../theme';
import { CAREER_TIMELINE, EDUCATION, SKILLS, DEV_PROJECTS } from '../data';

/* ─── Company accent colours ──────────────────────────── */
const companyColors: Record<string, { bg: string; text: string; border: string; dot: string; badge: string }> = {
    Google: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', dot: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
    Amazon: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', dot: 'bg-amber-500', badge: 'bg-amber-100 text-amber-700' },
    default: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700' },
};

const getColors = (company: string) => companyColors[company] ?? companyColors.default;

/* ─── Skill category icons ────────────────────────────── */
const categoryIcons: Record<string, string> = {
    'Cloud & Infrastructure': '☁️',
    'Languages & Frameworks': '💻',
    'AI & Data': '🤖',
    'Soft Skills': '🤝',
};

const Career: React.FC = () => {
    return (
        <div className={theme.styles.container + ' py-12 pb-24'}>
            {/* ──── Page Header ──── */}
            <header className="mb-16">
                <h1 className={theme.styles.heading}>Career</h1>
                <p className="mt-2 text-gray-500">
                    My professional journey through the world of software engineering.
                </p>
            </header>

            {/* ══════════════════════════════════════════════════
          SECTION 1 — Career Timeline
         ══════════════════════════════════════════════════ */}
            <section className="mb-20">
                <h2 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">💼</span>
                    Experience
                </h2>

                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-amber-300 to-emerald-300 rounded-full" />

                    <div className="space-y-0">
                        {CAREER_TIMELINE.map((entry, index) => {
                            const colors = getColors(entry.company);
                            const isLast = index === CAREER_TIMELINE.length - 1;
                            return (
                                <div key={entry.id} className="relative pl-12 md:pl-16 group">
                                    {/* Timeline dot */}
                                    <div className={`absolute left-2.5 md:left-4 top-6 w-3.5 h-3.5 rounded-full ${colors.dot} ring-4 ring-white shadow-md z-10 group-hover:scale-125 transition-transform duration-300`} />

                                    {/* Card */}
                                    <div className={`${theme.styles.card} p-6 md:p-8 ${!isLast ? 'mb-8' : ''} hover:shadow-lg transition-all duration-300`}>
                                        {/* Header row */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{entry.role}</h3>
                                                <p className={`text-sm font-semibold ${colors.text}`}>
                                                    {entry.company}
                                                    {entry.team && <span className="text-gray-400 font-normal"> · {entry.team}</span>}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                                                    {entry.startDate} — {entry.endDate}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {entry.location}
                                        </p>

                                        {/* Description */}
                                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{entry.description}</p>

                                        {/* Highlights */}
                                        {entry.highlights.length > 0 && (
                                            <ul className="space-y-2">
                                                {entry.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
          SECTION 2 — Education
         ══════════════════════════════════════════════════ */}
            <section className="mb-20">
                <h2 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center text-sm">🎓</span>
                    Education
                </h2>

                <div className="space-y-6">
                    {EDUCATION.map((edu) => (
                        <div key={edu.id} className={`${theme.styles.card} p-6 md:p-8`}>
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900">{edu.degree}</h3>
                                    <p className="text-sm text-violet-600 font-semibold">{edu.institution}</p>
                                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {edu.location}
                                    </p>
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-100 text-violet-700 shrink-0">
                                    {edu.startYear} — {edu.endYear}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
          SECTION 3 — Skills
         ══════════════════════════════════════════════════ */}
            <section className="mb-20">
                <h2 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center text-sm">⚡</span>
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILLS.map((cat) => (
                        <div key={cat.category} className={`${theme.styles.card} p-6`}>
                            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span>{categoryIcons[cat.category] ?? '🔹'}</span>
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-gray-50 border border-gray-100 text-gray-700 text-xs font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════════════════════════════════════════
          SECTION 4 — Development Projects
         ══════════════════════════════════════════════════ */}
            <section>
                <h2 className="text-2xl font-serif font-bold mb-10 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-sm">🚀</span>
                    Development Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DEV_PROJECTS.map((project) => (
                        <div key={project.id} className={`${theme.styles.card} p-6 group`}>
                            {/* Icon header */}
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Career;
