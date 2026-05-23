//Packages
import { useRef } from 'react';

//Images
import UserTabIcon from '../../assets/img/user-task-icon.png';

function CreateList({ setUserList }) {

    const createListInput = useRef(null);

    const activateInput = () => {
        createListInput.current.focus();
    }

    const enterToList = (e) => {
        if (e.key === 'Enter') {
            createList();
        }
    }

    const createList = () => {
        const inputValue = createListInput.current.value;

        if (!inputValue.trim()) return;
        setUserList(prev => [...prev,
        {
            name: inputValue,
            image: UserTabIcon,
            type: 'user',
            id: crypto.randomUUID(),
            tasks: []
        }])

        createListInput.current.value = '';
    }

    return (
        <div className=' my-3 flex items-center justify-around text-[#c75b12]'> {/* h-22 */}
            <span onClick={activateInput}
                className='flex items-center justify-center text-2xl font-extralight cursor-pointer'>+</span>
            <input
                onKeyDown={enterToList}
                ref={createListInput}
                type="text"
                placeholder='New list'
                className='px-1 text-sm outline-0' />

            <button onClick={createList} title='Create list'
                className='text-[12px] cursor-pointer hover:text-[#a94e10]'>Create</button>
        </div>
    );
};

export default CreateList;