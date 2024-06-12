
const AboutMe = () => {
    return (
        <div className="py-40 px-5 bg-[#F9F9F7]">
            <div className="text-center">
                <h1 className='text-5xl uppercase font-semibold'>Hiramon Nahar <span className='text-primary'>Eva</span></h1>
                <span>MERN STACK DEVELOPER</span>
                <div className="flex justify-evenly gap-[60px] text-start mt-[60px]">
                    <div>
                    <div>
                        <h1 className='text-2xl uppercase font-semibold mt-6 mb-2'>Harvard Online</h1>
                        <p>CS50 Introduction to Computer Science</p>
                        <p>Computer Science</p>
                        <p>Time: 2023 - 2024</p>
                        <a target="_blank" className="text-primary" href="https://certificates.cs50.io/1c0331ef-9e19-4cc3-84e3-f354a6dc608f.pdf?size=letter">Certificate</a>
                    </div>
                        <h1 className='text-2xl font-semibold mt-6 mb-2'>EDUCATIONAL BACKGROUND</h1>
                        <p>BA(Bachelor of Arts) Hon&apos;s</p>
                        <p>Studied at National University</p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold uppercase mt-6 mb-2'>Experiences</h1>
                        <p>MERN Stack Developer Intern</p>
                        <p>United States · Remote</p>
                        <p>RealAssist.AIRealAssist.AI</p>
                        <p>Feb 2023 - Mar 2023 </p>
                        <div>
                            <h1 className='text-2xl font-semibold uppercase mt-6 mb-2'>Tecnologis</h1>

                            <span>MERN, JAVA, PHP.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;