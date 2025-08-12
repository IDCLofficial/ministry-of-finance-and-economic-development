import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { HERO_CONFIGS } from "../../utils/constants/heroSections";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function About() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <HeroSection {...HERO_CONFIGS.ABOUT} />

            {/* Ministry Overview Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        <AnimatedEntrance {...ANIMATION_PRESETS.IMAGE_FADE_UP} className="order-2 lg:order-1">
                            <Image
                                src="/assets/no-image.png"
                                alt="Ministry of Finance and Economic Development - Managing Imo State's Financial Resources"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition-shadow duration-300"
                            />
                        </AnimatedEntrance>
                        <div className="order-1 lg:order-2">
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={200}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Imo State Ministry of Finance is the backbone of the state&apos;s financial system. It is responsible for the efficient planning, coordination, and control of all financial matters of the state government. The ministry ensures accountability, transparency, and optimal use of resources in support of economic growth and development in Imo State.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={400}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                    The Ministry operates through specialized departments and units that handle budgeting, treasury management, economic planning, internal revenue generation, procurement oversight, donor coordination, and fiscal policy development. Each unit plays a critical role in ensuring that the financial systems of Imo State remain responsive, transparent, and effective.
                                </p>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={600}>
                                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                    Our work is guided by the principles of transparency, accountability, and innovation in public financial management. We are committed to implementing sound fiscal policies that promote economic stability, attract investments, and create an enabling environment for businesses to thrive. Through strategic partnerships with development agencies and the private sector, we are working to build a more prosperous and economically vibrant Imo State for present and future generations.
                                </p>
                            </AnimatedEntrance>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission & Core Values Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Guiding Principles</h2>
                        <div className="mt-4 h-1 w-24 bg-green-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    To become a model public finance institution delivering accountable and innovative financial services that support inclusive economic growth and development in Imo State.
                                </p>
                            </div>
                        </AnimatedEntrance>

                        {/* Mission Card */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To manage the financial resources of Imo State with transparency, integrity, and efficiency, in order to promote sustainable development, improve service delivery, and enhance the standard of living of Imo citizens.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Upholding openness in all financial dealings",
                                        "Answering for the proper use of state funds",
                                        "Doing the right thing, even when no one is watching",
                                        "Maintaining high standards and ethics in service",
                                        "Seeking new ways to improve financial systems and service delivery",
                                        "Making finance work for the benefit of all Imo citizens"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            </div>
                                            <span className="text-gray-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedEntrance>
                    </div>

                    {/* Core Values */}
                    <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_RIGHT} delay={STAGGER_DELAYS.MEDIUM[2]}>
                        <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Core Values</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Transparency", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                                    { title: "Accountability", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
                                    { title: "Integrity", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                                    { title: "Professionalism", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                    { title: "Innovation", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                                    { title: "People-Centeredness", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }
                                ].map((value, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                                            </svg>
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </AnimatedEntrance>
                </div>
            </section>

            {/* Commissioner Profile Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Hon. Chuk Chukwuemeka
                            </h2>
                            <p className="text-lg sm:text-xl text-green-600 font-semibold mb-4 sm:mb-6">
                                Honorable Commissioner for Finance and Economic Development
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                Hon. Chuk Chukwuemeka, with over two decades of experience in public financial management, previously served as Director of Public Procurement and Economic Adviser under Governor Ikedi Ohakim&apos;s administration. He currently serves as Commissioner for Finance under Governor Hope Uzodimma, where he leads the charge for economic reform, fiscal responsibility, and improved financial governance.
                            </p>
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                                Under the visionary leadership of Governor Hope Uzodimma, we are committed to transforming Imo State&apos;s economy through prudent financial management,
                                innovative revenue generation strategies, and sustainable economic development initiatives. Our focus remains on transparency, accountability,
                                and the efficient utilization of state resources to deliver quality services and infrastructure that will improve the lives of all Imo citizens.
                                Together, we are building a stronger, more prosperous Imo State for future generations.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image
                                src="/assets/no-image.png"
                                alt="Hon. Chuk Chukwuemeka - Honorable Commissioner for Finance and Economic Development"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Responsibilities Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-8 sm:mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Our Key Focus Areas
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Financial Policy Development */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Financial Policy Development
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Formulating and implementing comprehensive financial policies that guide the state&apos;s fiscal management and economic development strategies.
                            </p>
                        </div>

                        {/* Revenue Mobilization and Allocation */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Revenue Mobilization and Allocation
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Optimizing revenue collection and ensuring equitable distribution of financial resources across all sectors of the state economy.
                            </p>
                        </div>

                        {/* Budgeting and Fiscal Planning */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Budgeting and Fiscal Planning
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Developing comprehensive budgets and fiscal plans that align with state development priorities and ensure sustainable financial management.
                            </p>
                        </div>

                        {/* Debt and Asset Management */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6h6v-2h-4V7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Debt and Asset Management
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Managing state debt obligations and optimizing asset utilization to maximize financial returns and minimize fiscal risks.
                            </p>
                        </div>

                        {/* Expenditure Monitoring and Reporting */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg text-center">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Expenditure Monitoring and Reporting
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                Ensuring transparent tracking of all government expenditures and providing comprehensive financial reports for accountability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Goals Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Strategic Objectives</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Through these projects, the Imo State Ministry of Finance and Economic Development is unlocking opportunities, solving real challenges, and building a more resilient future for every Imolite.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Drive economic prosperity through strategic financial management and fiscal policies.",
                            "Enhance infrastructure development through transparent and efficient resource allocation.",
                            "Improve livelihoods across Imo State through inclusive economic growth initiatives.",
                            "Promote transparency and accountability in all financial operations and project implementation.",
                            "Support the growth and sustainability of micro, small and medium enterprises (MSMEs).",
                            "Strengthen financial systems for evidence-based economic policymaking.",
                            "Enhance economic competitiveness and investment attractiveness of Imo State.",
                            "Promote inclusive growth and social development through targeted financial interventions.",
                            "Develop strategic partnerships with private sector and development partners.",
                            "Enhance the capacity of financial institutions and economic development stakeholders."
                        ].map((goal, index) => (
                            <AnimatedEntrance
                                key={index}
                                {...ANIMATION_PRESETS.CARD_FADE_UP}
                                delay={0.1 * index}
                            >
                                <div className="flex items-start p-4 bg-white rounded-lg shadow-sm">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-semibold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700">{goal}</p>
                                </div>
                            </AnimatedEntrance>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Leadership Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Meet Hon. Chuk Chukwuemeka and the dedicated team driving the Ministry of Finance and Economic Development&apos;s mission to ensure sound financial management and economic growth in Imo State.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {/* Commissioner */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="h-64 bg-gray-100 overflow-hidden">
                                <Image
                                    src="/assets/no-image.png"
                                    alt="Hon. Chuk Chukwuemeka - Honorable Commissioner for Finance and Economic Development"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">Hon. Chuk Chukwuemeka</h3>
                                <p className="text-green-700 font-medium mt-1">Honorable Commissioner for Finance and Economic Development</p>
                                <p className="mt-4 text-gray-600">
                                    Hon. Chuk Chukwuemeka, with over two decades of experience in public financial management, previously served as Director of Public Procurement and Economic Adviser under Governor Ikedi Ohakim&apos;s administration. He currently serves as Commissioner for Finance under Governor Hope Uzodimma, where he leads the charge for economic reform, fiscal responsibility, and improved financial governance.
                                </p>
                            </div>
                        </div>

                        {/* Permanent Secretary */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="h-64 bg-gray-100 overflow-hidden">
                                <Image
                                    src="/assets/no-image.png"
                                    alt="Permanent Secretary - Ministry of Finance and Economic Development"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">[Permanent Secretary&apos;s Name]</h3>
                                <p className="text-green-700 font-medium mt-1">Permanent Secretary</p>
                                <p className="mt-4 text-gray-600">
                                    The Permanent Secretary provides strategic leadership for the ministry&apos;s administrative and financial operations,
                                    ensuring effective implementation of fiscal policies and economic development programs. Working closely with the
                                    Honorable Commissioner, they oversee budget execution, revenue collection, financial reporting, and the
                                    coordination of economic development initiatives that drive growth and prosperity across Imo State.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Structure Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-900 grid-bg text-white">
                <div className="max-w-7xl mx-auto px-4 space-y-10 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                Our Structure
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6">
                                The Ministry of Finance and Economic Development operates through a well-defined structure that ensures effective financial management and economic planning. Our organizational framework is designed to address all aspects of fiscal policy, revenue generation, budget implementation, and economic development across Imo State.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/assets/no-image.png"
                                alt="Ministry of Finance and Economic Development - Organizational Structure"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {/* Department of Expenditure */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Expenditure</h3>
                            <p className="text-sm text-gray-400">Oversees and controls public spending in accordance with the approved budget, ensures timely release of funds to MDAs, and monitors financial commitments.</p>
                        </div>

                        {/* Department of Financial Services */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Financial Services</h3>
                            <p className="text-sm text-gray-400">Manages financial instruments, state investments, debt servicing, and oversees state loans, grants, and financial agreements.</p>
                        </div>

                        {/* Department of Budget */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5h14V5a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 9l4-4 4 4M20 10a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-1m2-5h-2v2h2V7zM2 9h2v2H2V9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Budget</h3>
                            <p className="text-sm text-gray-400">Prepares and coordinates the state&apos;s annual budget, aligns proposals with government priorities, and monitors budget implementation.</p>
                        </div>

                        {/* Department of Accounts */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Accounts</h3>
                            <p className="text-sm text-gray-400">Maintains accurate financial records, prepares financial statements and payment vouchers, and ensures adherence to financial regulations.</p>
                        </div>

                        {/* Department of Economic Research */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Economic Research</h3>
                            <p className="text-sm text-gray-400">Conducts economic research to inform fiscal policies, analyzes trends and indicators, and advises on economic growth strategies.</p>
                        </div>

                        {/* Department of Internal Audit */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Internal Audit</h3>
                            <p className="text-sm text-gray-400">Carries out internal audits to ensure compliance and financial integrity, identifies risks, and recommends corrective measures.</p>
                        </div>

                        {/* Department of Procurement */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of Procurement</h3>
                            <p className="text-sm text-gray-400">Oversees transparent and efficient procurement processes, ensures compliance with procurement laws, and maintains vendor database.</p>
                        </div>

                        {/* Department of HR */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of HR</h3>
                            <p className="text-sm text-gray-400">Manages staff recruitment, training, promotions, and welfare, ensuring effective human resource planning and development.</p>
                        </div>

                        {/* Department of ICT */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Department of ICT</h3>
                            <p className="text-sm text-gray-400">Supports digital transformation of financial operations, maintains IT infrastructure, and facilitates automation and e-governance.</p>
                        </div>

                        {/* Legal Unit */}
                        <div className="bg-gray-800 p-5 sm:p-6 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Legal Unit</h3>
                            <p className="text-sm text-gray-400">Provides legal advice on financial policies and contracts, drafts legal documents, and ensures compliance with laws and regulations.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
