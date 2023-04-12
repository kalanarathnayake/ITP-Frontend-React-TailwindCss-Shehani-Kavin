import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class CreateDocument extends Component {
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
        axios.post('http://localhost:5000/api/document/add', document)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Employee has been added!!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#60e004'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Error in adding!',
                        background: '#fff',
                        confirmButtonColor: '#133EFA',
                        iconColor: '#e00404'
                    })
                }
            })
    }

    clearData = () => {
        this.setState({
            firstName: '',
            lastName: '',
            age: '',
            address: '',
            phone: '',
            dob: '',
            department: ''
        })
    }

    render() {
        return (
            <div className="flex flex-col px-5">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div className=''>
                                <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                                    <form className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50' onSubmit={this.onSubmit}>
                                        <div class="">
                                            <p className='text-4xl font-semibold text-black uppercase drop-shadow-lg'>
                                                Create Document
                                            </p>
                                            <div className="grid grid-cols-2 gap-4 form-group">

                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Document Name : </label>
                                                    <input type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control "
                                                        value={this.state.docName}
                                                        onChange={this.onChangeDocName}
                                                    /><p />
                                                </div>
                                                <div className="form-group">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Category : </label>
                                                    <input type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.category}
                                                        onChange={this.onChangeCategory}
                                                    /><p />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Created Date : </label>
                                                    <div>
                                                        <DatePicker
                                                            className='m-2'
                                                            selected={this.state.date}
                                                            onChange={this.onChangeDate}
                                                        />
                                                    </div>
                                                </div><p />
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>description : </label>
                                                    <input textarea="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.description}
                                                        onChange={this.onChangeDescription}
                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Created Employee Name : </label>
                                                <textarea type="text"
                                                    required
                                                    placeholder=''
                                                    className="form-control"
                                                    value={this.state.createdEmp}
                                                    onChange={this.onChangeCreatedEmp}
                                                /><p />
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Employee Title : </label>
                                                <textarea type="text"
                                                    required
                                                    placeholder=''
                                                    className="form-control"
                                                    value={this.title}
                                                    onChange={this.onChangeEmpTitle}
                                                /><p />
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
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Create Document" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}