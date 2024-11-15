import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Header Banner Section */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center">
        <Image src="/image1.jpeg" alt="Fusion Delicacies Banner" layout="fill" objectFit="cover" className="z-[-1]" />
      </section>

      {/* Coming Soon Section */}
      <section className="w-full bg-black text-white text-center py-10 px-4">
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image src="/image2.jpeg" alt="Opening Soon" layout="fill" objectFit="cover" className="opacity-90" />
        </div>
        <div className="mt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Opening Soon</h2>
          <p className="text-lg sm:text-xl text-gray-300 mt-2">Experience the fusion of taste and elegance!</p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-r from-orange-50 via-red-50 to-yellow-100 text-center py-16 px-6 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600 mb-4">
          Fusion Delicacies
        </h2>
        <p className="text-xl sm:text-2xl font-semibold text-gray-800">
          Where Taste Meets Elegance
        </p>
        <div className="mt-8 flex justify-center">
          <Image src="/image4.jpeg" alt="Fusion Delicacies" width={300} height={300} className="w-full max-w-xs rounded-lg shadow-lg" />
        </div>
        <p className="text-lg text-gray-700 mt-6 font-semibold">
          Fast Food & Catering
        </p>
        <p className="text-gray-700 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Discover a unique fusion of flavors that elevates fast food to a new level of sophistication. Stay tuned for an unforgettable culinary experience that brings elegance to every bite!
        </p>
      </section>

      {/* Inspirational Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 text-center py-16 px-6 w-full">
        <div className="flex justify-center mb-6">
          <Image src="/image3.jpeg" alt="Alhamdulillah" width={140} height={140} className="rounded-full border-4 border-gray-300 shadow-xl" />
        </div>
        <p className="text-xl sm:text-2xl font-semibold text-gray-800 mt-4">
          Grateful for the journey, and excited for what lies ahead.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center text-gray-400 py-4 w-full">
        <p>&copy; 2024 Fusion Delicacies. All rights reserved.</p>
      </footer>
    </div>
  );
}
