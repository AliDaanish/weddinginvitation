import { HeartIcon, SparklesIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";

const AboutUs = () => {
    // const [showLetter, setShowLetter] = useState(false);

    // const toggleLetter = () => {
    //     setShowLetter(!showLetter);
    // };

    return(
        <div className="relative py-12 bg-[#F1DDDB] overflow-hidden" id="about-us">
            <h2 className="text-5xl font-priest font-extrabold text-center mb-8 p-8 text-[#C29897] tracking-wider animate-pulse"><img src="/initial.png" /></h2>
            
            <div className="max-w-4xl mx-auto text-center space-y-12 relative">

                {/* Surat Ar-Rum dan Terjemahan Latin */}
                <div className="relative bg-[#FBE4E4] p-8 rounded-lg shadow-lg border border-[#DFC1BE] mx-4 transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl animate-fade-in">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-xl md:text-2xl mt-4 font-semibold text-gray-700 mb-4 font-arabic">
                        بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                        </h2>
                        <p className="text-[1.25rem] md:text-[1.5rem] leading-loose font-arabic text-gray-800 mb-4">
                        وَمِنْ آيَاتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ
                        </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                    <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4" />
                    <HeartIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4" />
                    <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4" />
                    <SparklesIcon className="h-24 w-24 text-[#D8B5B4] opacity-50 animate-love-rain absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4" />
                    </div>
                    <blockquote className="relative text-lg italic text-[#775E5C] font-serif">
                    <p className="mb-4">
                        "Dan di antara tanda-tanda-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri supaya kamu merasa tenteram kepadanya dan dijadikannya di antaramu rasa kasih dan sayang."
                    </p>
                    <footer>
                        <cite className="block text-base text-[#302625]">
                        Surah Ar-Rum, Ayat 21
                        </cite>
                    </footer>
                    </blockquote>
                </div>

                {/* Burung Terbang */}
                <div className="absolute inset-0 pointer-events-none">
                    <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute top-0 left-1/4" />
                    <SparklesIcon className="h-16 w-16 text-[#D8B5B4] opacity-60 animate-bird-fly absolute bottom-0 right-1/4" />
                </div>

            </div>
        </div>
    );
};

export default AboutUs