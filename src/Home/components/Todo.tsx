// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Grid from '@mui/material/Grid';
// import List from '@mui/material/List';
// import CardHeader from '@mui/material/CardHeader';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Checkbox from '@mui/material/Checkbox';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';

// export default function TransferList() {
//   const [checked, setChecked] = React.useState([]);
//   const [left, setLeft] = React.useState([0, 1, 2, 3]);
//   const [right, setRight] = React.useState([4, 5, 6, 7]);

//   const leftChecked = intersection(checked, left);
//   const rightChecked = intersection(checked, right);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const numberOfChecked = (items) => intersection(checked, items).length;

//   const handleToggleAll = (items) => () => {
//     if (numberOfChecked(items) === items.length) {
//       setChecked(not(checked, items));
//     } else {
//       setChecked(union(checked, items));
//     }
//   };

//   const handleCheckedRight = () => {
//     setRight(right.concat(leftChecked));
//     setLeft(not(left, leftChecked));
//     setChecked(not(checked, leftChecked));
//   };

//   const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   function not(a, b) {
//     return a.filter((value) => b.indexOf(value) === -1);
//   }

//   function intersection(a, b) {
//     return a.filter((value) => b.indexOf(value) !== -1);
//   }

//   function union(a, b) {
//     return [...a, ...not(b, a)];
//   }

//   const customList = (title, items) => (
//     <Card>
//       <CardHeader
//         sx={{ px: 2, py: 1 }}
//         avatar={
//           <Checkbox
//             onClick={handleToggleAll(items)}
//             checked={numberOfChecked(items) === items.length && items.length !== 0}
//             indeterminate={
//               numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
//             }
//             disabled={items.length === 0}
//             inputProps={{
//               'aria-label': 'all items selected',
//             }}
//           />
//         }
//         title={title}
//         subheader={`${numberOfChecked(items)}/${items.length} selected`}
//       />
//       <Divider />
//       <List
//         sx={{
//           width: 200,
//           height: 230,
//           bgcolor: 'background.paper',
//           overflow: 'auto',
//         }}
//         dense
//         component="div"
//         role="list"
//       >
//         {items.map((value) => {
//           const labelId = `transfer-list-all-item-${value}-label`;

//           return (
//             <ListItemButton
//               key={value}
//               role="listitem"
//               onClick={handleToggle(value)}
//             >
//               <ListItemIcon>
//                 <Checkbox
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{
//                     'aria-labelledby': labelId,
//                   }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`List item ${value + 1}`} />
//             </ListItemButton>
//           );
//         })}
//       </List>
//     </Card>
//   );

//   return (
//     <Box  sx={{ minWidth: 275}}>
//       <Card variant="outlined" >
//         <Grid container spacing={2} justifyContent="center" alignItems="center">
//           <Grid item>{customList('To-do', left)}</Grid>
//           <Grid item>
//             <Grid container direction="column" alignItems="center">
//               <Button
//                 sx={{ my: 0.5 }}
//                 variant="outlined"
//                 size="small"
//                 onClick={handleCheckedRight}
//                 disabled={leftChecked.length === 0}
//                 aria-label="move selected right"
//               >
//                 &gt;
//               </Button>
//               <Button
//                 sx={{ my: 0.5 }}
//                 variant="outlined"
//                 size="small"
//                 onClick={handleCheckedLeft}
//                 disabled={rightChecked.length === 0}
//                 aria-label="move selected left"
//               >
//                 &lt;
//               </Button>
//             </Grid>
//           </Grid>
//           <Grid item>{customList('Done', right)}</Grid>
//         </Grid>
//       </Card>
//     </Box>
//   );
// }

import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-w-[300px] max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
          className="flex-grow p-2 border border-gray-300 rounded-l-md"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <ul className="list-disc list-inside">
        {tasks.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded-md">
            {item}
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
