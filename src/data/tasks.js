import MyDay from '../assets/img/my-day-icon.png';
import Important from '../assets/img/important-icon.png';
import Planned from '../assets/img/planned-icon.png';
import Assigned from '../assets/img/assigned-icon.png';
import Tasks from '../assets/img/tasks-icon.png';

const systemList = [
    { name: 'My Day', image: MyDay, type: 'system', id: 'my-day', tasks: [] },
    { name: 'Important', image: Important, type: 'system', id: 'important', tasks: [] },
    { name: 'Planned', image: Planned, type: 'system', id: 'planned', tasks: [] },
    { name: 'Assigned to me', image: Assigned, type: 'system', id: 'assigned', tasks: [] },
    {
        name: 'Tasks', image: Tasks, type: 'system', id: 'tasks', tasks: [
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: false, important: false },
            { name: 'Heoow', id: crypto.randomUUID(), completed: true, important: false },
        ]
    }
];

export default systemList;

// export const userList = [
//     { name: 'ss', image: Assigned, type: 'system', id: 'assigned', tasks: [] },
//     { name: 'hh', image: Tasks, type: 'system', id: 'tasks', tasks: [] }
// ];