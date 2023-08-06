import React, { useState } from "react";

function Student(){
    const [data , strdata]= useState(
        [
            {
                Name : 'hero',
                Age : 21,
                Batch: 'March',
                Course : 'Mern',
                Change : 'Edit'
            },
            {
                Name : 'Aenny',
                Age : 22,
                Batch: 'EA21',
                Course : 'Mern',
                Change : 'Edit'
            },
            {
                Name : 'john',
                Age : 21,
                Batch: 'EA22',
                Course : 'Mern',
                Change : 'Edit'
            },
            {
                Name : 'Harsh',
                Age : 23,
                Batch: 'EA23',
                Course : 'Mern',
                Change : 'Edit'
            },
            {
                Name : 'Lalit',
                Age : 22,
                Batch: 'EA25',
                Course : 'Mern',
                Change : 'Edit'
            },
            {
                Name : 'Sumit',
                Age : 25,
                Batch: 'EA24',
                Course : 'Mern',
                Change : 'Edit'
            }

        ]
    )
    return(
        <>
        <h2>Students Data</h2>

         <table width={'95%'} border={1} align="center">
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Batch</th>
                <th>Course</th>
                <th>Change</th>
            </tr>
            {data.map((item,index)=>{
                   return(
                    <tr key={index}>

                    <td align="center">{item.Name}</td>
                    <td align="center">{item.Age}</td>
                    <td align="center">{item.Batch}</td>
                    <td align="center">{item.Course}</td>
                    <td align="center" style={{color : "blue"}}>{item.Change}</td> 
                   
                    </tr>
                   )  
                })   
                 
            }
            
         </table>
        </>
    )
}
export default Student;