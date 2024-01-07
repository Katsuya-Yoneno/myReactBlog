import '../App.css'

const Bio = () => {
    return (
        <>
            <div className="font-san  z-10 relative">
                <div className="card w-80 mx-20 bg-white shadow-xl hover:shadow-lg p-8 rounded-lg">
                    <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="cong.png" alt="" />
                    <div className="text-center mt-2 text-3xl font-medium">Katsuya Yoneno</div>
                    <div className="px-6 text-center mt-2 font-light text-sm">
                        <p>Front end Developer</p>
                    </div>
                    <hr className="mt-8" />
                    <div className="flex p-4">
                        <div className="text-center flex justify-center items center">
                            <a href="https://github.com/Katsuya-Yoneno" target="_blank" rel="noopener noreferrer">
                                <img className="mx-2 w-10 h-10" src="github.svg" />
                            </a>
                            {/* <a href="https://github.com/Katsuya-Yoneno" target="_blank" rel="noopener noreferrer">
                     <img className='mx-2 w-10 h-10' src='X.svg' />
                    </a> */}
                            <a href="https://qiita.com/Kyon_" target="_blank" rel="noopener noreferrer">
                                <img className="mx-2 w-10 h-10" src="qiita.jpeg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio
