import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='py-10 border-t border-t-gray-900 bg-[#06070a]'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <Image src="/footer-logo.png" alt='footer-logo' width={100} height={100} />
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer