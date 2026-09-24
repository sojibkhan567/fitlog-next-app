import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <section className="bg-[#0d0f13] px-20 py-20 lg:rounded-2xl md:rounded-2xl mt-12 mb-15">
            <div className="grid items-center gap-10 md:grid-cols-2">
                {/* Left Column - Content */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        Workout Library
                    </p>
                    <h1 className="text-4xl text-white uppercase font-bold leading-tight md:text-5xl lg:text-5xl">
                        Train with intent. Log every set.
                    </h1>
                    <p className="mt-5 max-w-lg text-gray-400">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-4">
                        <button className="rounded-lg bg-primary px-6 py-3 font-bold uppercase text-secondary transition hover:bg-lime-400">
                            Browse workouts
                        </button>
                    </div>
                </div>
                {/* Right Column - Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/banner.png"
                        alt="Banner"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </section>
    )
}

export default Banner