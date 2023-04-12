import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

export default class EditDocument extends Component {
    constructor(props) {
        super(props);
        this.onChangeDocName = this.onChangeDocName.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCreatedEmp = this.onChangeCreatedEmp.bind(this);
        this.onChangeEmpTitle = this.onChangeEmpTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            docName: '',
            category: '',
            date: new Date(),
            description: '',
            createdEmp: '',
            empTitle: ''
        }
    }

    //mounting retrived data to text areas
    componentDidMount() {
        axios.get('http://localhost:5000/api/document/' + this.props.documentId)
            .then(response => {
                this.setState({
                    docName: response.data.docName,
                    category: response.data.category,
                    date: new Date(response.data.date),
                    description: response.data.description,
                    createdEmp: response.data.createdEmp,
                    empTitle: response.data.empTitle,
                })
            })
            .catch(function (error) {
                console.log("Error in mounting" + error);
            })
    }

    onChangeDocName(e) {
        this.setState({
            docName: e.target.value
        });
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeCreatedEmp(e) {
        this.setState({
            createdEmp: e.target.value
        });
    }
    onChangeEmpTitle(e) {
        this.setState({
            empTitle: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const document = {
            docName: this.state.docName,
            category: this.state.category,
            date: this.state.date,
            description: this.state.description,
            createdEmp: this.state.createdEmp,
            empTitle: this.state.empTitle,
        }
        
        console.log(document);
        axios.put('http://localhost:5000/api/document/' + this.props.documentId, document)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    // this.refreshTable();
                    this.props.close();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Document details has been updated!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#60e004'
                    })

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was an error updating!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#e00404'
                    })
                }
            })
    }

    /*
    docName,
    category,
    date,
    description,
    createdEmp,
    empTitle,
    */

    render() {
        return (
            <div className="flex flex-col px-5 pt-2 ">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <div className="formdiv">
                                        <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                            <p className='text-4xl font-semibold text-black uppercase billheading'>Update Document Info</p>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Document Name : </label>
                                                    <input type="text"
                                                        // required
                                                        className="form-control"
                                                        value={this.state.docName}
                                                        onChange={this.onChangeDocName}

                                                    /><p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Category : </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.category}
                                                        onChange={this.onChangeCategory}
                                                    /><p />
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-2 gap-4 form-group">
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Created Employee Name: </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.createdEmp}
                                                        onChange={this.onChangeCreatedEmp}
                                                    />
                                                    <p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Employee Title : </label>
                                                    <input type="text"
                                                        required
                                                        className="form-control"
                                                        value={this.state.empTitle}
                                                        onChange={this.onChangeEmpTitle}
                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Description : </label>
                                                <textarea type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}
                                                /><p />
                                            </div>

                                            <div className="form-group">
                                                <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Date : </label>
                                                <div>
                                                    <DatePicker
                                                        selected={this.state.date}
                                                        onChange={this.onChangeDate}
                                                    />
                                                </div><p />
                                            </div>

                                            {/* <div className="form-group ">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' for="grid-state">Department : </label>
                                                <select type="text"
                                                    required
                                                    className="form-control"
                                                    value={this.state.department}
                                                    onChange={this.onChangeempdepartment}
                                                >
                                                    <option>Department 1</option>
                                                    <option>Department 2</option>
                                                    <option>Department 3</option>
                                                    <option>Department 4</option>
                                                    <option>Department 5</option>
                                                </select><p />
                                            </div> */}

                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update" />
                                            </div>
                                        </form>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}