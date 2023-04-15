import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from "react-bootstrap";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
// import EditEmployee  from './employee-edit.component';
// import ScheduleRequestDetails from './scheduleRequest-details.component';


const GuidePack = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-6 py-4'>{props.guidepack.guideName}</td>
        <td className='px-6 py-4'>{props.guidepack.touristArea}</td>
        <td className='px-6 py-4'>{props.guidepack.langType}</td>
        <td className='px-6 py-4'>{props.guidepack.vehicleType}</td>
        <td className='px-6 py-4'>{props.guidepack.price}</td>
    </tr>
)

const Guide = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-6 py-4'>{props.guide.guideName}</td>
        <td className='px-6 py-4'>{props.guide.email}</td>
        <td className='px-6 py-4'>{props.guide.langType}</td>
        <td className='px-6 py-4'>{props.guide.serviceType}</td>
        <td className='px-6 py-4'>{props.guide.mobileNumber}</td>
        <td className='px-6 py-4'>{props.guide.address}</td>
        <td className='px-6 py-4'>{props.guide.nic}</td>
    </tr>
)

export class GuidePackDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            guidepack: [],
            guide: [],
            searchGuidePack: props.guId,
            show: false
        };
    }


    componentDidMount() {
        this.refreshGuideDetails();
        this.refreshList();
    }


    refreshGuideDetails() {
        axios.get('http://localhost:5000/api/guide/')
            .then(response => {
                this.setState({ guide: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    refreshList() {
        axios.get('http://localhost:5000/api/guidepackage/')
            .then(response => {
                this.setState({ guidepack: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    guideList() {
        return this.state.guide.map(currentguide => {
            return <Guide guide={currentguide} key={currentguide._id} />;
        })
    }


    guidePackList() {
        return this.state.guidepack.map(currentguidepack => {
            return <GuidePack guidepack={currentguidepack} key={currentguidepack._id} />;
        })
    }

    searchGuideList() {
        return this.state.guide.map((currentguide) => {
            if (
                this.state.searchGuidePack ==
                currentguide.guideName
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentguide.guideName}</td>
                        <td className='px-6 py-4'>{currentguide.email}</td>
                        <td className='px-6 py-4'>{currentguide.langType}</td>
                        <td className='px-6 py-4'>{currentguide.serviceType}</td>
                        <td className='px-6 py-4'>{currentguide.mobileNumber}</td>
                        <td className='px-6 py-4'>{currentguide.address}</td>
                        <td className='px-6 py-4'>{currentguide.nic}</td>

                    </tr>
                );
            }
        });
    }

    searchGuidePackList() {
        return this.state.guidepack.map((currentguidepack) => {
            if (
                this.state.searchGuidePack ==
                currentguidepack.guideName
            ) {
                return (
                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                        <td className='px-6 py-4'>{currentguidepack.guideName}</td>
                        <td className='px-6 py-4'>{currentguidepack.touristArea}</td>
                        <td className='px-6 py-4'>{currentguidepack.langType}</td>
                        <td className='px-6 py-4'>{currentguidepack.vehicleType}</td>
                        <td className='px-6 py-4'>{currentguidepack.price}</td>
                    </tr>
                );
            }
        });
    }

    render() {
        return (
            <div className="flex flex-col px-5 pt-2">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className='items-center overflow-hidden'>
                            <div class="grid grid-cols-1 gap-4 content-start">

                            </div>
                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <div>
                                    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                        <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                            <tr>
                                                <th className="p-2 border-black tbhead ">Guide Name</th>
                                                <th className="p-2 tbhead">Email</th>
                                                <th className="p-2 tbhead">Language Type</th>
                                                <th className="p-2 tbhead">Service Type</th>
                                                <th className="p-2 tbhead">Mobile Number</th>
                                                <th className="p-2 tbhead">Address</th>
                                                <th className="p-2 tbhead">NIC</th>

                                            </tr>
                                        </thead>

                                        <tbody >
                                            {this.state.searchGuidePack == "" ? this.guideList() : this.searchGuideList()}
                                        </tbody>

                                    </table>
                                </div>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                        <tr>
                                            <th className="p-2 border-black tbhead ">Schedule ID</th>
                                            <th className="p-2 border-black tbhead ">Employee ID</th>
                                            <th className="p-2 tbhead">Date</th>
                                            <th className="p-2 tbhead">Changing Employee ID</th>
                                            <th className="p-2 tbhead">Changing Date</th>

                                            <th className="p-2 tbhead">Status</th>

                                            <th className="p-2 tbhead">More Details</th>
                                            <th className="p-2 tbhead">Approve</th>
                                            <th className="p-2 tbhead">Decline</th>
                                            {/* <th className="p-2 text-center tbhead">Clock In</th>
                                            <th className="p-2 text-center tbhead">Clock Out</th> */}
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {this.state.searchGuidePack == "" ? this.guidePackList() : this.searchGuidePackList()}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

