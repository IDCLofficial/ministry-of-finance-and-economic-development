import { FaInstagram, FaSquareFacebook, FaTwitter } from "react-icons/fa6";
"use client";
import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS, STAGGER_DELAYS } from "../../utils/constants/animations";

export default function Contact() {
    const [formValues, setFormValues] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<
        Partial<Record<"name" | "company" | "phone" | "email" | "subject" | "message", string>>
    >({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormValues((prev) => ({ ...prev, [name]: value }));
            if (errors[name as keyof typeof errors]) {
                setErrors((prev) => {
                    const next = { ...prev };
                    delete next[name as keyof typeof next];
                    return next;
                });
            }
        },
        [errors]
    );

    const validate = useCallback((values: typeof formValues) => {
        const nextErrors: Partial<Record<keyof typeof formValues, string>> = {};
        if (!values.name.trim()) nextErrors.name = "Name is required";
        if (!values.email.trim()) nextErrors.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email";
        if (values.phone && !/^[\d\s()+-]{7,20}$/.test(values.phone)) nextErrors.phone = "Enter a valid phone";
        if (!values.subject.trim()) nextErrors.subject = "Subject is required";
        if (!values.message.trim() || values.message.trim().length < 10) nextErrors.message = "Message should be at least 10 characters";
        return nextErrors;
    }, []);

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const validationErrors = validate(formValues);
            if (Object.keys(validationErrors).length > 0) {
                setErrors(validationErrors);
                toast.error("Please fix the highlighted fields.");
                return;
            }
            setIsSubmitting(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 1200));
                toast.success("Message sent successfully!");
                setFormValues({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
                setErrors({});
            } finally {
                setIsSubmitting(false);
            }
        },
        [formValues, validate]
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Green Header Bar */}
            <div className="bg-green-600 h-20"></div>

            {/* Main Contact Section */}
            <section className="py-16 bg-gray-50">
                <div className="px-4 sm:px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Column - Contact Information */}
                        <div>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                    CONTACT US
                                </h1>
                            </AnimatedEntrance>
                            <AnimatedEntrance {...ANIMATION_PRESETS.TEXT_FADE_LEFT} delay={200}>
                                <p className="text-gray-600 mb-12 leading-relaxed">
                                    Let&apos;s talk. Reach out to us for enquiries, feedback, or partnership opportunities. Our team at the Ministry of Finance and Economic Development is here to assist you.
                                </p>
                            </AnimatedEntrance>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {/* Phone */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[1]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                                        <div className="space-y-1">
                                            <a href="tel:083230940" className="block text-blue-600 hover:text-blue-800 transition-colors duration-300">083-230940</a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>

                                {/* Office */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[2]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                                        <p className="text-gray-600">
                                            Block 4, Imo State Secretariat, Port Harcourt Road, Owerri, Imo State
                                        </p>
                                    </div>
                                </AnimatedEntrance>

                                {/* Socials */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[3]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Socials</h3>
                                        <div className="flex space-x-3 text-white">
                                            <a href="https://facebook.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaSquareFacebook />
                                            </a>
                                            <a href="https://twitter.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaTwitter />
                                            </a>
                                            <a href="https://instagram.com/imofinance" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-green-500 rounded flex items-center justify-center hover:bg-green-600 transition-colors">
                                                <FaInstagram />
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>

                                {/* Email */}
                                <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={STAGGER_DELAYS.MEDIUM[0]}>
                                    <div className="hover:transform hover:scale-105 transition-transform duration-300">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                                        <div className="space-y-1">
                                            <a href="mailto:info@finance.imostate.gov.ng" className="block text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                                info@finance.imostate.gov.ng
                                            </a>
                                        </div>
                                    </div>
                                </AnimatedEntrance>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <AnimatedEntrance {...ANIMATION_PRESETS.CARD_FADE_UP} delay={400}>
                            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                                <p className="text-gray-600 mb-6 text-sm">We&apos;d love to hear from you. Kindly fill out the form below and we&apos;ll get back to you promptly.</p>
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.name)}
                                            aria-describedby={errors.name ? "name-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                            placeholder="Your full name"
                                        />
                                        {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formValues.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="Your organization's name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.phone)}
                                            aria-describedby={errors.phone ? "phone-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                            placeholder="Your contact number"
                                        />
                                        {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.email)}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                            placeholder="Your email address"
                                        />
                                        {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formValues.subject}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.subject)}
                                            aria-describedby={errors.subject ? "subject-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent ${errors.subject ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                            placeholder="Subject of your message"
                                        />
                                        {errors.subject && <p id="subject-error" className="mt-2 text-sm text-red-600">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={formValues.message}
                                            onChange={handleChange}
                                            aria-invalid={Boolean(errors.message)}
                                            aria-describedby={errors.message ? "message-error" : undefined}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-green-500"}`}
                                            placeholder="Type your message here..."
                                        ></textarea>
                                        {errors.message && <p id="message-error" className="mt-2 text-sm text-red-600">{errors.message}</p>}
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="not-robot" name="not-robot" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                        <label htmlFor="not-robot" className="ml-2 block text-sm text-gray-700">
                                            I&apos;m not a robot
                                        </label>
                                    </div>
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:transform hover:scale-105 duration-300 ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
                                        >
                                            {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </AnimatedEntrance>
                    </div>
                    {/* Map Integration */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
                        <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.81189487678!2d7.010186338670749!3d5.473897698626462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042599584de1111%3A0xb4d850b7108614d4!2sIMO%20STATE%20SECRETARIAT%20OWERRI!5e0!3m2!1sen!2sng!4v1754572411582!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                aria-hidden="false"
                                tabIndex={0}
                                title="Ministry of Finance and Economic Development Location"
                            ></iframe>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            <span className="font-medium">Office Hours:</span> Monday to Friday, 8:00 AM – 4:00 PM
                        </p>
                        <a
                            href="https://maps.app.goo.gl/vE7UExUo7psmDxHJ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mt-2"
                        >
                            View on Google Maps
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
