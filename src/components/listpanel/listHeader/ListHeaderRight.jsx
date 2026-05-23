import Sort from '../../assets/img/sort.png'
import Group from '../../assets/img/group.png'
import Suggestion from '../../assets/img/suggestion.png'
// import Share from '../../assets/img/share.png'

function TasksHeaderRight() {
    return (
        <ul className='mr-2.5 flex items-center gap-1 '>
            <li>
                <button className='pr-2 flex items-center text-[15px] hover:bg-white'>
                    <img src={Sort} alt="" className='size-9' />Sort
                </button>
            </li>
            <li>
                <button className='pr-2 flex items-center text-[15px] hover:bg-white'>
                    <img src={Group} alt="" className='size-9' />Group
                </button>
            </li>
            <li>
                <button className='pr-2 flex items-center text-[15px] hover:bg-white'>
                    <img src={Suggestion} alt="" className='size-9' />Suggestion
                </button>
            </li>
            {/* <li>
                <button className='pr-2 flex items-center text-[15px] hover:bg-white'>
                    <img src={Share} alt="" className='size-9' />Share
                </button>
            </li> */}
        </ul>
    );
};

export default TasksHeaderRight;

// sort group suggestion share