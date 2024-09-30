import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-4">
        <div className="relative w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/path-to-image.jpg" // Isay ap apni image ka path set karein
            alt="John Doe"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="text-center p-6">
        <h3 className="text-lg font-semibold">John Doe</h3>
        <p className="text-sm text-gray-600 mt-2">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          Know More
        </button>
      </div>
    </div>
  );
}
