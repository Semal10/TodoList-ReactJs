import React , {useState} from 'react';
import EditModal from './editModal';
import './Layout.css';
import TodoComponent from './TodoComponent';

export default function Layout() {
    const [modalOpen, setModalOpen] = useState({
        modal:false,
        type:""
    });
    const [itemValue,setItem] = useState({
        title:"",
        desc:"",
    });

    const obj = [{
        title:"React",
        desc:"Complete my To-Do list using functional component and hooks ASAP"
    },{
        title:"Hey",
        desc:"Semal"
    }]

    const [list , setList] = useState(obj);
    const [data , setData] = useState({});
    const [done , setDone] = useState(['$']);

    const addItem = () => {
        if(!data.title) return;
        setList([data,...list]);
        setData({
            title:"",
            desc:"",
            file:""
        });
        let newDone = [...done];
        for(let i=0;i<newDone.length;i++){
            newDone[i]++;
        }
        console.log(newDone)
        setDone(newDone);
    }

    const deleteItem = (index) => {
        let newList = [...list];
        newList.splice(index,1);
        setList(newList);
        let newDone = [...done];
        for(let i=0;i<newDone.length;i++){
            if(newDone[i]>=index) newDone[i]--;
        }
        setDone(newDone);
    }
    
    return (
        <div>
            <div className='container'>
                <div className='inputs'>
                    <div>
                        <input type='text' value={data.title} id='title'  placeholder='Title'  onChange={ e => setData({...data,title:e.target.value})}/>&nbsp;&nbsp;
                        <br/>
                        <input type='text' value={data.desc} id='desc'  placeholder='Description' onChange={ e => setData({...data,desc:e.target.value})}/>&nbsp;&nbsp;
                        <br/>
                        
                        </div>
                    <div>
                        <button onClick = {() => addItem()}>Add Note</button>
                    </div>  
                </div>  
                <div className='cards-container'>
                    {list.map((item,index) => <TodoComponent item={item} index={index} deleteItem={deleteItem} setModalOpen={setModalOpen}
                    modalOpen={modalOpen} itemValue={itemValue} setItem={setItem} done={done} setDone={setDone}/>)}
                </div>
            </div>
            {modalOpen.modal && <EditModal list={list} setList={setList} itemValue={itemValue} setItem={setItem} setModalOpen={setModalOpen} modalOpen={modalOpen}/>}        
        </div>
    );
}
