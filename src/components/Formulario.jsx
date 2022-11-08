import React,{useState} from 'react'

const Formulario = (props) => {
    /*
    const [nombre,setNombre]= useState('');
    const [description,setDescription]= useState('');
    const [start,setStart]= useState('');

    an input field for the child's name (with id 'name')
a text area to describe the wish (id: 'wish')
a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
    */
    const [data,setData] = useState({
        name:'',
        wish:'',
        priority:1
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        props.send(data);
        console.log('enviado')
        //x(data)
    }
    /*
    const handleNombre = (e)=>{
        setNombre(e.target.value);
    }
    const handleDescription = (e)=>{
        setDescription(e.target.value);
    }
    const handleStart = (e)=>{
        setStart(e.target.value);
    }
*/
    const handleChange = (e)=>{
        setData({...data,[e.target.name]: e.target.value});
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input id='name' name='name' value={data.name} onChange={handleChange}/>
            <textarea id='wish' name='wish' value={data.wish} onChange={handleChange}/>
            <select id='priority' name='priority' value={data.priority} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Formulario