import '../App.css'
import Bio from './Bio'
import TimeLine from './TimeLine'

const Profile = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex-none md:mt-20 md:mr-20 md:w-96 sm:w-80 w-64">
                    <Bio />
                </div>
                <div className="flex-none md:mt-20 md:mr-20 md:w-80 sm:w-96 w-64">
                    <TimeLine />
                </div>
            </div>
        </>
    )
}

export default Profile
