import useinstuctor from "../UseHooks/useInstuctors/useinstuctor";


const InstructorsRoutes = ({ children }) => {
    const [isinstuctor, isinstuctorLoading] = useinstuctor();
    if (isinstuctorLoading) {
        return <div className='flex justify-center items-center'>

            <h2 className='text-3xl  font-bold'>Loading Instuctor Page...</h2>
        </div>
    }
    if (isinstuctor) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default InstructorsRoutes;