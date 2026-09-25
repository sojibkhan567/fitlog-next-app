import { WorkoutDataType } from "@/types/WorkoutTpes";
import Image from "next/image";
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";
import { MdOutlineStarBorder, MdOutlineWatchLater } from "react-icons/md";

type LibraryCardProps = {
    workout: WorkoutDataType
}

const LibraryCard = ({ workout }: LibraryCardProps) => {
    return (
        <Link href={`/workout-details/${workout.id}`}>
            <div className="w-full bg-[#14171d] rounded-xl">
                <div className="relative h-70 rounded-t-2xl w-full overflow-hidden">
                    <Image
                        className="object-cover"
                        src={workout.image}
                        alt="img" fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className="p-7 space-y-2">
                    <div className="flex gap-3 mb-5">
                        {workout.muscleGroups.map((muscleGroup, index) => (
                            <p key={index} className="px-5 py-0.5 rounded-full bg-primary text-secondary font-bold">{muscleGroup}</p>
                        ))}
                    </div>

                    <h2 className="text-3xl font-medium">{workout.name}</h2>
                    <p className="text-gray-400 pb-4 border-b border-b-gray-600">{workout.equipment}</p>

                    <div className="flex gap-6 text-gray-400 pt-2">
                        <div className="flex justify-center items-center gap-2">
                            <MdOutlineWatchLater size={20} />
                            <p>{workout.duration}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <FaFireFlameCurved size={18} />
                            <p>{workout.caloriesBurned} kcal</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <MdOutlineStarBorder size={20} />
                            <p>{workout.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default LibraryCard