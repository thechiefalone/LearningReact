import React , { Component } from 'react'

class EditableArea extends Component{
    constructor(){
        super()
        this.state =  {
            enable: false,
            custom: '' , 
            placeholder: '',
            value:'' 
        }
    }
    static getDerivedStateFromProps(props ,state){
        if(props.custom !== state.custom || 
            props.placeholder !== state.placeholder ) 
        {
            return{
                custom : props.custom , 
                placeholder : props.placeholder
            }
        }else{
            return state
        }
    }
    changeHandler = (e ) => {
        this.props.change(e)
    }
    chagenStatus =  () => {
        this.setState( prevState =>  ({
            enable: !prevState.enable
        }))
    }
    render(){
        let style= [this.state.custom,this.state.enable ?'only-text':'can-edit'].join(' ');
        return(
            <div className={this.state.custom}>
                <textarea 
                col='30'
                row='20'
                name={this.props.item} 
                className={style}  
                readOnly={this.state.enable} 
                onClick={this.chagenStatus}
                onChange={this.changeHandler}
                placeholder={this.state.placeholder}/>
            </div>
        )
    }
}
export default EditableArea;