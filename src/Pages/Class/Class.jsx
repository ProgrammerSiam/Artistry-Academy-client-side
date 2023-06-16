
import useAxiosSecure from '../../UseHooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from 'react-query';
import ClassList from '../../Component/InstructorsCard/ClassList/ClassList';



const Class = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get('/allClass')
        console.log(res.data)
        return res.data;
    })

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-12'>
                {
                    allClass.map(classes => <ClassList
                        key={classes._id}
                        classes={classes}
                        refetch={refetch}
                    ></ClassList>)
                }
            </div>
        </div>
    );
};

export default Class;