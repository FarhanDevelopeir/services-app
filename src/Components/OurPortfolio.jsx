import { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";
import projects from "../data/portfolio";

const ProjectNavItem = ({ project, isActive, onSelect, compact = false }) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    onClick={() => onSelect(project.id)}
    className={`group flex w-full items-center justify-between gap-3 rounded-lg px-4 py-3.5 text-left transition-all duration-300 min-h-[48px] ${
      isActive
        ? "bg-yellowTextColor/10 text-yellowTextColor border border-yellowTextColor/30"
        : "text-textColor/80 hover:bg-white/5 hover:text-white border border-transparent"
    } ${compact ? "shrink-0 w-auto whitespace-nowrap" : ""}`}
  >
    <span
      className={`font-medium leading-snug ${compact ? "text-sm" : "text-base lg:text-lg"} ${
        isActive ? "font-semibold" : ""
      }`}
    >
      {compact ? project.shortTitle : project.title}
    </span>
    <ChevronRight
      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
        isActive
          ? "text-yellowTextColor translate-x-0.5 opacity-100"
          : "text-textColor/40 opacity-0 group-hover:opacity-60 md:opacity-40"
      }`}
    />
  </button>
);

ProjectNavItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortTitle: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

const ProjectPanel = ({ project }) => (
  <motion.div
    key={project.id}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    className="h-full"
  >
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border_color/50 bg-[#141414] lg:flex-row">
      {/* Image */}
      <div className="relative w-full lg:w-[42%] xl:w-[38%]">
        <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141414]/80" />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col justify-center p-5 sm:p-6 md:p-8 lg:p-10">
        <span className="mb-3 inline-block w-fit rounded-full border border-yellowTextColor/30 bg-yellowTextColor/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-yellowTextColor">
          {project.category}
        </span>

        <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
          {project.title}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-textColor/80 sm:text-base lg:mt-4">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 lg:mt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border_color/60 bg-black/40 px-3 py-1 text-xs text-textColor/70"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm text-yellowTextColor/80 lg:hidden">
          <ArrowRight className="h-4 w-4" />
          <span>Tap another project to explore more work</span>
        </div>
      </div>
    </div>
  </motion.div>
);

ProjectPanel.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const OurPortfolio = () => {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

  return (
    <section id="Portfolio" className="w-[90%] mx-auto py-16 md:py-24 my-16 md:my-20">
      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="heading mb-3">Portfolio</h1>
        <p className="subHeading text-textColor/90">Our Recent Work</p>
        <div className="w-16 h-1 bg-yellowTextColor/60 rounded-full mx-auto mt-4" />
      </div>

      {/* Mobile & tablet: horizontal project selector */}
      <div
        className="mb-5 lg:hidden"
        role="tablist"
        aria-label="Portfolio projects"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-textColor/50">
          Select a project
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-thin">
          {projects.map((project) => (
            <div key={project.id} className="snap-start">
              <ProjectNavItem
                project={project}
                isActive={activeId === project.id}
                onSelect={setActiveId}
                compact
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 xl:gap-12">
        {/* Desktop sidebar */}
        <nav
          className="hidden lg:block lg:w-[34%] xl:w-[30%] shrink-0"
          role="tablist"
          aria-label="Portfolio projects"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-textColor/50">
            Projects
          </p>
          <div className="flex flex-col gap-1 rounded-2xl border border-border_color/40 bg-[#0f0f0f] p-2">
            {projects.map((project) => (
              <ProjectNavItem
                key={project.id}
                project={project}
                isActive={activeId === project.id}
                onSelect={setActiveId}
              />
            ))}
          </div>
        </nav>

        {/* Content panel */}
        <div
          className="flex-1 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px]"
          role="tabpanel"
          aria-label={activeProject.title}
        >
          <AnimatePresence mode="wait">
            <ProjectPanel project={activeProject} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
