import React, { useEffect, useState } from 'react';
import EditModal from './editModal';
import './Layout.css';

export default function TodoComponent(props) {
    const { item: { title, desc },setModalOpen,modalOpen,itemValue,setItem,deleteItem , index, done , setDone } = props;

    let flag = false;
    done.forEach(item => {
        if(item==index) flag=true;        
    });

    let edits = document.querySelectorAll('.edit'); 
    let dones = document.querySelectorAll('.done');

    if(flag){
        //  edits[index].style.display="none";
        //  dones[index].style.display="none";
    }
    return (
        <div style={{backgroundColor:flag&&"#00FF7F",transform:flag&&"scale(1)", boxShadow:flag&&"0 0 0 0"}} className='card' onClick={()=>{
                setModalOpen({modal:true,type:"card"});
                setItem(props.item);
                //console.log(props.item);
                }
            }>
            <h3>{title}</h3>
            <p>{desc}</p>
            {/* <img src="https://picsum.photos/200" class="img"></img> */}
            <span className="material-icons delete unique-delete" onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(index);
                }
                }>
                delete
            </span>
            <span className="material-icons edit unique" onClick={(e) => {
                e.stopPropagation();
                setItem(props.item);
                setModalOpen({modal:true,type:"edit"});
                }
                }>
                edit
            </span>
            <span className="material-icons done unique" onClick={(e) => {
                let newDone = [...done];
                newDone.push(index);
                setDone(newDone);
                e.stopPropagation();
            }}>
                done
            </span>
        </div>
    )

}
