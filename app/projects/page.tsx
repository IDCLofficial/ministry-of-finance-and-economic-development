import StatisticsSection from "../../components/StatisticsSection";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { PROJECTS_STATISTICS } from "../../utils/constants/statistics";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";
import Image from "next/image";

// Special Projects
const SPECIAL_PROJECTS = [
    {
        number: 1,
        title: "Affordable Housing Initiative",
        description: "We are expanding access to safe, affordable homes through strategic public-private partnerships. These projects reduce housing deficits while creating construction jobs across local communities.",
        location: "Statewide",
        category: "Infrastructure Development",
        status: "Ongoing",
        partners: "Public-Private Partnerships",
        imageSrc: "/photos/affordable_housing - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpeg",
    },
    {
        number: 2,
        title: "Economic Diversification & Infrastructure Development",
        description: "This project supports investments in agriculture, energy, ICT, and logistics infrastructure across Imo. Our goal is to lay the foundation for sustainable development and generate new streams of revenue.",
        location: "Statewide",
        category: "Economic Development",
        status: "Ongoing",
        partners: "Development Partners, Private Sector",
        imageSrc: "/photos/economic_diversification - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
    },
    {
        number: 3,
        title: "MSMEs Growth & Empowerment Program",
        description: "We provide funding, mentorship, and digital tools to empower micro, small, and medium-scale enterprises. This initiative supports job creation, innovation, and financial inclusion across all LGAs in Imo State.",
        location: "Statewide",
        category: "Enterprise Development",
        status: "Active",
        partners: "Financial Institutions, Development Agencies",
        imageSrc: "/photos/msmes_growth - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.PROJECTS} />

            {/* Statistics Section */}
            <StatisticsSection statistics={PROJECTS_STATISTICS} className="bg-white" />
            
            {/* Projects Description */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Initiatives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Welcome to our Projects Hub, where you can explore key government initiatives aimed at driving economic prosperity, 
                            enhancing infrastructure, and improving livelihoods across Imo State. Each project reflects our commitment to transparency, 
                            impact, and inclusive growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SPECIAL_PROJECTS.map((project, index) => {
                            // const IconComponent = PROJECT_ICONS[project.number as keyof typeof PROJECT_ICONS];
                            return (
                                <AnimatedEntrance 
                                    key={project.number} 
                                    {...ANIMATION_PRESETS.CARD_FADE_UP} 
                                    delay={STAGGER_DELAYS.MEDIUM[index % STAGGER_DELAYS.MEDIUM.length]}
                                >
                                    <div className="bg-white border border-gray-200 h-full rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                                        <div className="h-48 bg-green-50 flex items-center justify-center overflow-hidden">
                                            <Image
                                                src={project.imageSrc || '/assets/no-image-lg.jpg'}
                                                alt={project.title}
                                                width={400}
                                                height={200}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                {project.title}
                                            </h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Category</span>
                                                    <span className="text-gray-900 text-right">{project.category}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Status</span>
                                                    <span className={`font-medium text-right ${
                                                        project.status === "Active" ? "text-blue-600" :
                                                        project.status === "In Progress" ? "text-yellow-600" :
                                                        project.status === "Completed" ? "text-green-600" :
                                                        project.status === "Ongoing" ? "text-orange-600" : ""
                                                    }`}>{project.status}</span>
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                    <span className="text-gray-600">Partners</span>
                                                    <span className="text-gray-900 text-right">{project.partners}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex items-center mt-4 text-green-600 text-sm">
                                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                {project.location}
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
