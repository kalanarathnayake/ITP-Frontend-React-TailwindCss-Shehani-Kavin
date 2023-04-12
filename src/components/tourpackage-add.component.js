import React, { Component } from 'react';
import axios from 'axios';
import * as Swal from "sweetalert2";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class CreateTour extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFromLocation = this.onChangeFromLocation.bind(this);
        this.onChangeToLocation = this.onChangeToLocation.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTransportMode = this.onChangeTransportMode.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            fromLocation: '',
            toLocation: '',
            description: '',
            transportMode: '',
            price: '',
            date: new Date(),
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeFromLocation(e) {
        this.setState({
            fromLocation: e.target.value
        });
    }
    onChangeToLocation(e) {
        this.setState({
            toLocation: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangeTransportMode(e) {
        this.setState({
            transportMode: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeDate(date) {
        this.setState({
            date: date
        });
    }
    /*
        name,
        fromLocation,
        toLocation,
        description,
        transportMode,
        price,
        date,
*/
    onSubmit(e) {
        e.preventDefault();
        const tour = {
            name: this.state.name,
            fromLocation: this.state.fromLocation,
            toLocation: this.state.toLocation,
            description: this.state.description,
            transportMode: this.state.transportMode,
            price: this.state.price,
            date: this.state.date,
        }
        console.log(tour);
        axios.post('http://localhost:5000/api/tour/add', tour)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    this.clearData();
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'Tour Package has been added!!',
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
            name: '',
            fromLocation: '',
            toLocation: '',
            description: '',
            transportMode: '',
            price: '',
            date: '',
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
                                                Create Tour Package
                                            </p>
                                            <div className="grid grid-cols-1 gap-4 form-group">

                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Tour Name / Title : </label>
                                                    <input type="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control "
                                                        value={this.state.name}
                                                        onChange={this.onChangeName}
                                                    /><p />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                {/* <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Created Date : </label>
                                                    <div>
                                                        <DatePicker
                                                            className='m-2'
                                                            selected={this.state.date}
                                                            onChange={this.onChangeDate}
                                                        />
                                                    </div>
                                                </div><p /> */}
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>From : </label>
                                                    <input textarea="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.fromLocation}
                                                        onChange={this.onChangeFromLocation}
                                                    /><p />
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>To : </label>
                                                    <input textarea="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.toLocation}
                                                        onChange={this.onChangeToLocation}
                                                    /><p />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Tour Description : </label>
                                                <textarea type="text"
                                                    required
                                                    placeholder=''
                                                    className="form-control"
                                                    value={this.state.description}
                                                    onChange={this.onChangeDescription}
                                                /><p />
                                            </div>

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Mode Of Transportation : </label>
                                                <input type="text"
                                                    required
                                                    placeholder=''
                                                    className="form-control"
                                                    value={this.transportMode}
                                                    onChange={this.onChangeTransportMode}
                                                /><p />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 form-group">
                                                <div class="">
                                                    <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white' >Date : </label>
                                                    <div>
                                                        <DatePicker
                                                            className='m-2'
                                                            selected={this.state.date}
                                                            onChange={this.onChangeDate}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="large-input" className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Price : </label>
                                                    <input textarea="text"
                                                        required
                                                        placeholder=''
                                                        className="form-control"
                                                        value={this.state.price}
                                                        onChange={this.onChangePrice}
                                                    />
                                                </div><p />
                                            </div>

                                            <div className="text-center align-middle form-group">
                                                <input className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Create Tour Package" />
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