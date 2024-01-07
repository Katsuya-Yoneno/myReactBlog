import '../App.css'

const Qualification = () => {
    return (
        <>
            <div className="font-san z-10 relative">
                <div className="card w-80 mx-20 bg-white shadow-xl hover:shadow-lg p-8 rounded-lg">
                    <div className="text-center mt-2 text-3xl font-medium">Qualification</div>
                    <br></br>
                    <ul className="text-center list-none">
                        <li className="px-6 mt-2 font-light text-sm">
                            <span className="pl-2">証券外務員第一種(2022)</span>
                        </li>
                        <li className="px-6 mt-2 font-light text-sm">
                            <span className="pl-2">基本情報技術者(2022)</span>
                        </li>
                        <li className="px-6 mt-2 font-light text-sm">
                            <span className="pl-2">GCP ACE(2023)</span>
                        </li>
                        <li className="px-6 mt-2 font-light text-sm">
                            <span className="pl-2">etc...(自動車免許とか英検とか)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Qualification
