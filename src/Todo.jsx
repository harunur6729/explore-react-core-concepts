// export default function Todo({task , isDone}){
//     return (
//          <li>Task:{task}</li>
//     )
// }

//conditional rendaring option 1:
// export default function Todo({task , isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }


//conditional rendaring option 2:
// export default function Todo({task , isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//         return <li>Work on: {task}</li>
    
// }

//conditional rendaring option3:use Ternary operator
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Fisnished':'Work on'}: {task}</li> //if-else ar sort vertion holo ternary oparetor
//     )
// }

//conditional rendaring option 4:&&
// export default function Todo({task , isDone}){
//     return(
//         <li>{task} {isDone && ':✔'}</li>
        
//     )
// }

//conditional rendaring option 5:||
// export default function Todo({task , isDone}){
//     return(

//         <li>{task} {isDone || ':do it'}</li>
//     )
// }

//conditional rendaring option 6:
export default function Todo({task , isDone}){
    let listItem ;
    if(isDone){
       listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on : {task}</li>
    }
    return listItem;
}