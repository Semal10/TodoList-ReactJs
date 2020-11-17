import React , {useState} from 'react'
import './Layout.css'

const EditModal = (props) => {
    //{console.log(props.modalOpen.type)}
    const [oldValue , setOldValue] = useState({
        title:props.itemValue.title,
        desc:props.itemValue.desc
    });

    const updList = (itemValue) => {
        let list = props.list;
        list.forEach((item,index) => {
            if(item.title==oldValue.title && item.desc==oldValue.desc){
                item.title=props.itemValue.title;
                item.desc=props.itemValue.desc;
            }
        });
    }

        return (
            <div className="main__modal">
                <div className="box">
                    {(props.modalOpen.type=="card")?
                    <div>
                        <h1>{props.itemValue.title}</h1>
                        <p>{props.itemValue.desc}</p>
                        <span class="material-icons increase" onClick={()=>props.setModalOpen(false)}>
                            highlight_off
                        </span>
                    </div>
                :(props.modalOpen.type=="edit") && 
                     <div className='adjust'>
                        <div className='one'>
                            <input type='text' name='title' defaultValue={props.itemValue.title} onChange={(e)=>{
                                props.setItem({title:e.target.value,desc:props.itemValue.desc});
                            }
                            }/>&nbsp;&nbsp;
                            <label for='title'>Title</label>
                        </div>
                        <div className='two'>
                            <textarea type='text' name='desc' defaultValue={props.itemValue.desc} onChange={(e)=>props.setItem({title:props.itemValue.title,desc:e.target.value})} />&nbsp;&nbsp;
                            <label for='desc'>Description</label>
                        </div>
                        <div className='three'>
                            <span class="material-icons increase" onClick={()=>props.setModalOpen(false)}>
                                highlight_off
                            </span>
                        </div>
                        <button onClick={()=>{
                            updList(props.itemValue);
                            alert('Your To-Do Updated!');
                            }
                        }>Update</button>
                    </div>
                }
                </div>
            </div>
        )
    }

export default EditModal
