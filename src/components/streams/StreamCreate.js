import React from "react";
import {Field, reduxForm} from "redux-form"
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";

// class StreamCreate extends React.Component{
//     renderError({ error, touched }) {
//         if (touched && error) {
//           return (
//             <div className="ui error message">
//               <div className="header">{error}</div>
//             </div>
//           );
//         }
//       }

//     renderInput = ({input, label, meta}) => {
//         console.log(meta);
//         const className = `field ${meta.error && meta.touched ?'error': ''}`;
//         return (
//             <div className={className}>
//                 <label> {label}</label>
//                 <input {...input} autoComplete="off"/>
//                 { this.renderError(meta) }
//             </div>
//         );
//     }
//     //alternative way to write above function
//     // renderInput(formProps) {
//     //     return <input {...formProps.input}/>;
//     // }

//     onSubmit = (formValues) => {
//         this.props.createStream(formValues);
//     }

//     render(){
//         return (
//             <form 
//                 className="ui form error"
//                 onSubmit={this.props.handleSubmit(this.onSubmit)}
//             >
//                 <Field name="title" component={this.renderInput} label="Enter title"/>
//                 <Field name="description" component={this.renderInput} label="Enter decription"/>
//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// }

class StreamCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){
        return (
            <div>
                <h3>Create a stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit}/>
            </div>
        );
    }
}
export default connect(null, {createStream})(StreamCreate);