import MyDay from '../assets/img/my-day-icon.png';
import Important from '../assets/img/important-icon.png';
import Planned from '../assets/img/planned-icon.png';
// import Assigned from '../assets/img/assigned-icon.png';
import Tasks from '../assets/img/tasks-icon.png';

const list = [
    { name: 'My Day', image: MyDay, type: 'system', id: 'my-day', tasks: [] },
    { name: 'Important', image: Important, type: 'system', id: 'important', tasks: [] },
    { name: 'Planned', image: Planned, type: 'system', id: 'planned', tasks: [] },
    // { name: 'Assigned to me', image: Assigned, type: 'system', id: 'assigned', tasks: [] },
    {
        name: 'Tasks', image: Tasks, type: 'system', id: 'tasks', tasks: [
            { name: 'test 1', id: crypto.randomUUID(), completed: false, important: true },
            { name: 'test 2', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 3', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 4', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 5', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 6', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 7', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 8', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'test 9', id: crypto.randomUUID(), completed: true, important: false },
        ]
    }
];

export default list;

// export const userList = [
//     { name: 'ss', image: Assigned, type: 'system', id: 'assigned', tasks: [] },
//     { name: 'hh', image: Tasks, type: 'system', id: 'tasks', tasks: [] }
// ];