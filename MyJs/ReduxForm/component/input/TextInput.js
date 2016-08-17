/**
 * Created by adeng on 2016/7/29.
 */
import React from 'react';
import {touch} from 'redux-form';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }
    myClick(e){
        // console.log("------touch------");
        // console.log(this.props);
        // 
        // The followings 2 are both OK.
        // this.props.formProps.touch(this.props.name);
        this.props.formProps.dispatch(touch("synchronousValidation",this.props.name));

        // console.log("------right after Touch----props touch no change--");
        // console.log(this.props);

    }
    render() {
    //     console.log("------re render props touch change------");
    //     console.log(this.props);
        return <div onClick={this.myClick.bind(this)}>
            <label> {this.props.name}  </label>
            <div>
                <input type="text" id={this.props.name} onChange={e=>{this.props.onChange(e.target.value)}} value={this.props.value} name={this.props.name} />
                {this.props.touched && this.props.error&&<div>{this.props.error} </div>}
            </div>
        </div>;
    }
}