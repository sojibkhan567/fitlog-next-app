import Image from "next/image";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdOutlineStarBorder, MdOutlineWatchLater } from "react-icons/md";

const LibraryCard = () => {
  return (
    <Link href="/workouts/5">
      <div className="w-full bg-[#1F232B] rounded-xl">
          <div className="relative h-55 rounded-t-2xl w-full overflow-hidden">
              <Image className="object-cover" src="/images/card-img.png" alt="img" fill />
          </div>

          <div className="p-7 space-y-2">
              <div className="flex gap-3 mb-5">
                  <p className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">Chest</p>
                  <p className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">Arms</p>
              </div>

              <h2 className="text-3xl font-medium">Barbel Bench Press</h2>
              <p className="text-gray-400 pb-4 border-b border-b-gray-600">Bariel, Bench</p>

              <div className="flex gap-6 text-gray-400 pt-2">
                  <div className="flex justify-center items-center gap-2">
                      <MdOutlineWatchLater size={20} />
                      <p>25 min</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                      <FaFireFlameCurved size={18} />
                      <p>180 kcal</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                      <MdOutlineStarBorder size={20} />
                      <p>4.8</p>
                  </div>
              </div>
          </div>
      </div>
      </Link>
  )
}

export default LibraryCard