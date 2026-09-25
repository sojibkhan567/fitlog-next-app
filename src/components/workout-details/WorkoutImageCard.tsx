import Image from "next/image"

const WorkoutImageCard = ({ imgUrl }: { imgUrl: string }) => {
    return (
        <div className="relative h-162.5 rounded-2xl w-full overflow-hidden">
            <Image className="object-cover" src={imgUrl} alt="img" fill />
        </div>
    )
}

export default WorkoutImageCard