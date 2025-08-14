import { HERO_CONFIGS } from "@/utils/constants/heroSections";
import TabContentSystem from "../components/TabContentSystem";
import HeroSection from "@/components/HeroSection";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.DEPARTMENT} />

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "department-of-expenditure",
                        label: "Department of Expenditure",
                        content: {
                            title: "Department of Expenditure",
                            imageSrc: "/photos/Expenditure - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.png",
                            imageAlt: "Department of Expenditure",
                            description: "The Department of Expenditure oversees and controls public spending in accordance with the approved budget. We ensure timely and efficient release of funds to ministries, departments, and agencies (MDAs), while monitoring financial commitments and expenditure trends to maintain fiscal discipline. Our department plays a critical role in maintaining transparency and accountability in the use of state resources, ensuring that all expenditures align with government priorities and development objectives.",
                            additionalInfo: [
                                "Oversees and controls public spending in accordance with the approved budget",
                                "Ensures timely and efficient release of funds to ministries, departments, and agencies (MDAs)",
                                "Monitors financial commitments and expenditure trends to maintain fiscal discipline"
                            ]
                        }
                    },
                    {
                        id: "department-of-financial-services",
                        label: "Department of Financial Services",
                        content: {
                            title: "Department of Financial Services",
                            imageSrc: "/photos/Financial Services - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
                            imageAlt: "Department of Financial Services",
                            description: "The Department of Financial Services manages financial instruments, state investments, and debt servicing. We oversee state loans, grants, and financial agreements with domestic and international bodies, ensuring optimal use of financial resources and services. Our department is responsible for managing the state's investment portfolio, coordinating with financial institutions, and implementing strategies to maximize returns while minimizing risks.",
                            additionalInfo: [
                                "Manages financial instruments, state investments, and debt servicing",
                                "Oversees state loans, grants, and financial agreements with domestic and international bodies",
                                "Ensures optimal use of financial resources and services"
                            ]
                        }
                    },
                    {
                        id: "department-of-budget",
                        label: "Department of Budget",
                        content: {
                            title: "Department of Budget",
                            imageSrc: "/photos/Budget - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.png",
                            imageAlt: "Department of Budget",
                            description: "The Department of Budget prepares and coordinates the state's annual budget, aligning budget proposals with government priorities and economic policies. We monitor and evaluate budget implementation and performance, ensuring that financial resources are allocated efficiently to support development objectives. Our department works closely with all ministries and agencies to develop comprehensive budget proposals that reflect the state's development priorities and fiscal constraints.",
                            additionalInfo: [
                                "Prepares and coordinates the state's annual budget",
                                "Aligns budget proposals with government priorities and economic policies",
                                "Monitors and evaluates budget implementation and performance"
                            ]
                        }
                    },
                    {
                        id: "department-of-accounts",
                        label: "Department of Accounts",
                        content: {
                            title: "Department of Accounts",
                            imageSrc: "/photos/Accounts - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
                            imageAlt: "Department of Accounts",
                            description: "The Department of Accounts maintains accurate financial records of all government transactions, preparing financial statements, payment vouchers, and reports. We ensure adherence to financial regulations and accounting standards, providing the foundation for transparent and accountable financial management. Our department is responsible for maintaining the integrity of the state's financial records and ensuring that all transactions are properly documented and reported.",
                            additionalInfo: [
                                "Maintains accurate financial records of all government transactions",
                                "Prepares financial statements, payment vouchers, and reports",
                                "Ensures adherence to financial regulations and accounting standards"
                            ]
                        }
                    },
                    {
                        id: "department-of-economic-research",
                        label: "Department of Economic Research",
                        content: {
                            title: "Department of Economic Research and Policy Management",
                            imageSrc: "/photos/Economic Research - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpeg",
                            imageAlt: "Department of Economic Research and Policy Management",
                            description: "The Department of Economic Research and Policy Management conducts economic research to inform fiscal and financial policies. We analyze trends, forecasts, and indicators to guide planning and advise on strategies for economic growth and development. Our department provides critical insights that support evidence-based policy formulation and helps the ministry make informed decisions about fiscal management and economic development initiatives.",
                            additionalInfo: [
                                "Conducts economic research to inform fiscal and financial policies",
                                "Analyzes trends, forecasts, and indicators to guide planning",
                                "Advises on strategies for economic growth and development"
                            ]
                        }
                    },
                    {
                        id: "department-of-internal-audit",
                        label: "Department of Internal Audit",
                        content: {
                            title: "Department of Internal Audit",
                            imageSrc: "/photos/Internal Audit - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.webp",
                            imageAlt: "Department of Internal Audit",
                            description: "The Department of Internal Audit carries out internal audits to ensure compliance and financial integrity. We identify risks, irregularities, and areas for improvement, recommending corrective measures and ensuring accountability. Our department plays a crucial role in maintaining the integrity of the ministry's financial operations and ensuring that all processes adhere to established standards and regulations.",
                            additionalInfo: [
                                "Carries out internal audits to ensure compliance and financial integrity",
                                "Identifies risks, irregularities, and areas for improvement",
                                "Recommends corrective measures and ensures accountability"
                            ]
                        }
                    },
                    {
                        id: "department-of-procurement",
                        label: "Department of Procurement",
                        content: {
                            title: "Department of Procurement",
                            imageSrc: "/photos/Procurement - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
                            imageAlt: "Department of Procurement",
                            description: "The Department of Procurement oversees transparent and efficient procurement processes for goods and services. We ensure compliance with procurement laws and guidelines, maintaining a database of vendors and contracts. Our department is responsible for ensuring that all procurement activities are conducted in accordance with best practices and legal requirements.",
                            additionalInfo: [
                                "Oversees transparent and efficient procurement processes for goods and services",
                                "Ensures compliance with procurement laws and guidelines",
                                "Maintains a database of vendors and contracts"
                            ]
                        }
                    },
                    {
                        id: "department-of-hr",
                        label: "Department of HR",
                        content: {
                            title: "Department of Human Resources Management",
                            imageSrc: "/photos/HR - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.png",
                            imageAlt: "Department of Human Resources Management",
                            description: "The Department of Human Resources Management manages staff recruitment, training, promotions, and welfare. We ensure effective human resource planning and development, overseeing performance management and capacity building. Our department is responsible for maintaining a skilled and motivated workforce that can effectively deliver the ministry's mandate.",
                            additionalInfo: [
                                "Manages staff recruitment, training, promotions, and welfare",
                                "Ensures effective human resource planning and development",
                                "Oversees performance management and capacity building"
                            ]
                        }
                    },
                    {
                        id: "department-of-ict",
                        label: "Department of ICT",
                        content: {
                            title: "Department of Information, Communication and Technology (ICT)",
                            imageSrc: "/photos/ICT - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.webp",
                            imageAlt: "Department of Information, Communication and Technology (ICT)",
                            description: "The Department of Information, Communication and Technology (ICT) supports digital transformation of financial operations and reporting. We maintain IT infrastructure and secure data systems, facilitating automation and e-governance within the ministry. Our department is responsible for ensuring that the ministry leverages technology effectively to improve service delivery and operational efficiency.",
                            additionalInfo: [
                                "Supports digital transformation of financial operations and reporting",
                                "Maintains IT infrastructure and secure data systems",
                                "Facilitates automation and e-governance within the ministry"
                            ]
                        }
                    },
                    {
                        id: "legal-unit",
                        label: "Legal Unit",
                        content: {
                            title: "Legal Unit",
                            imageSrc: "/photos/Legal Unit - MINISTRY OF FINANCE & ECONOMIC DEVELOPMENT.jpg",
                            imageAlt: "Legal Unit",
                            description: "The Legal Unit provides legal advice on financial policies, contracts, and agreements. We draft and review legal documents and memoranda of understanding, representing the ministry in legal matters and ensuring compliance with laws and regulations. Our unit ensures that all ministry activities are conducted within the framework of applicable laws and regulations.",
                            additionalInfo: [
                                "Provides legal advice on financial policies, contracts, and agreements",
                                "Drafts and reviews legal documents and memoranda of understanding",
                                "Represents the ministry in legal matters and ensures compliance with laws and regulations"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
