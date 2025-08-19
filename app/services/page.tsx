import HeroSection from "../../components/HeroSection";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import Link from "next/link";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Services() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.SERVICES} />

            {/* Main Services Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN} className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The Ministry of Finance and Economic Development offers a comprehensive range of financial and economic services to support sustainable development, fiscal responsibility, and inclusive economic growth in Imo State.
                        </p>
                    </AnimatedEntrance>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Service 1 - Agricultural Extension Services */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 8a2 2 0 100 4 2 2 0 000-4zM7 14a4 4 0 00-4 4v1a1 1 0 001 1h8a1 1 0 001-1v-1a4 4 0 00-4-4H7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Financial Policy Development
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We formulate and implement comprehensive financial policies that guide the state&apos;s fiscal management and economic development strategies, ensuring sustainable financial governance.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Fiscal policy formulation
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Economic development strategies
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Financial governance oversight
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 2 - Livestock Development */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                            <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Revenue Mobilization and Allocation
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We optimize revenue collection and ensure equitable distribution of financial resources across all sectors of the state economy, maximizing fiscal efficiency.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Revenue optimization strategies
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Resource allocation management
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                        Fiscal efficiency enhancement
                                    </li>
                                </ul>
                            </div>
                        </AnimatedEntrance>

                        {/* Service 3 - Natural Resource Management */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Budgeting and Fiscal Planning
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We develop comprehensive budgets and fiscal plans that align with state development priorities and ensure sustainable financial management for optimal resource utilization.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Annual budget preparation
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Fiscal planning strategies
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Resource utilization optimization
                                </li>
                            </ul>
                        </div>

                        {/* Service 4 - Agricultural Credit & Finance */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Debt and Asset Management
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We manage state debt obligations and optimize asset utilization to maximize financial returns while minimizing fiscal risks and ensuring sustainable financial health.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Debt obligation management
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Asset utilization optimization
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Fiscal risk minimization
                                </li>
                            </ul>
                        </div>

                        {/* Service 5 - Market Development */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2L3 7v11a2 2 0 002 2h4a2 2 0 002-2v-4h2v4a2 2 0 002 2h4a2 2 0 002-2V7l-7-5zM6 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm6 0a1 1 0 112 0v4a1 1 0 11-2 0V9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Expenditure Monitoring and Reporting
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We ensure transparent tracking of all government expenditures and provide comprehensive financial reports for accountability and fiscal transparency.
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Expenditure tracking systems
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Financial reporting services
                                </li>
                                <li className="flex items-center">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                    Fiscal transparency assurance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
