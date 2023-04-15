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
       
        <td className='px-6 py-4'>
            <div class="flex justify-center">
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-indigo-500 rounded-md hover:bg-blue-200' >

                        <div class=" grid grid-cols-2 gap-1 hover:text-black duration-100">
                            <div class="">
                                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </div>
                            <div class="">
                                Edit
                            </div>
                        </div>

                    </button>
                </div>
                <div class="">
                    <button className='inline-flex items-center px-4 py-2 ml-1 text-sm font-medium text-white duration-100 bg-red-500 rounded-md hover:bg-red-200' >
                        <div class="grid grid-cols-2 gap-1 hover:text-black">
                            <div class="">
                                <svg class="h-5 w-5 mr-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </div>
                            <div>
                                Delete
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </td>
    </tr>
)

export class GuidePackDetails extends Component {

    constructor(props) {
        super(props);

        // var today = new Date(),

        // time = today.getHours() + ':' + today.getMinutes()  ;

        // const loggedUserId = AuthenticationService.loggedUserId();


        // this.clockIn = this.clockIn.bind(this);
        // this.clockOut = this.clockOut.bind(this);
        // this.onChangesearchSchedule = this.onChangesearchSchedule.bind(this);


        // this.deleteEmployee = this.deleteEmployee.bind(this);
        // this.gotoUpdateEmployee = this.gotoUpdateEmployee.bind(this);

     

        this.state = {
            guidepack: [],
            searchGuidePack: props.guId,
            show: false
        };
    }

    // onChangesearchSchedule(date) {

       
    //     this.setState({
    //         searchSchedule:date
    //     });
    //     console.log("Selected Date is" +this.searchScheduleList)
    // }

    

    refreshList() {
        axios.get('http://localhost:5000/api/guidepackage/')
            .then(response => {
                this.setState({ guidepack: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }




    componentDidMount() {
       this.refreshList();
    }

    // gotoUpdateEmployee = (id) => {
    //     this.setState({
    //         id: id,
    //         show: true

    //     })
    //     console.log("LIst id is :" +id);
    // }

    // //Modal box
    // closeModalBox = () => {
    //     this.setState({ show: false })
    //     this.refreshList();
    // }

    // deleteEmployee(id) {
    //     axios.delete('http://localhost:5000/employee/' + id)
    //         .then(res => console.log(res.data));
    //     this.setState({
    //         employee: this.state.employee.filter(el => el._id !== id)
    //     })
    // }

//     deleteEmployee(id) {
        
//         axios.delete('http://localhost:5000/employee/' + id).then(response => {
//             console.log(response.status)
//             // this.refreshTable();

//             if(response.status == 200){
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Successful',
//                     text: "Employee has been deleted!!",
//                     background: '#fff',
//                     confirmButtonColor: '#0a5bf2',
//                     iconColor: '#60e004'
//                 })

//                 this.refreshList();
//             }
            
//             else {
//                 Swal.fire({
//                     icon: 'Unsuccess',
//                     title: 'Unsuccessfull',
//                     text: "Employee has not been deleted!!",
//                     background: '#fff',
//                     confirmButtonColor: '#eb220c',
//                     iconColor: '#60e004'
//                 })
//             }

            
//         })
        

// }

gotoMoreDetails = (id) => {
    this.setState({
        id: id,
        show: true

    })
    console.log("LIst id is :" +id);
}

//Modal box
closeModalBox = () => {
    this.setState({ show: false })
    this.refreshList();
}


approve(id) {
    const schedule = {
        status: 'Approved'
    }

    axios.put('http://localhost:5000/scheduleRequest/status/' + id, schedule)
        .then(res => console.log(res.data));
    
       window.location = './scheduleRequestLsit'
}

decline(id) {
    const schedule = {
        status: 'Declined'
    }

    axios.put('http://localhost:5000/scheduleRequest/status/' + id, schedule)
        .then(res => console.log(res.data));
    
       window.location = './scheduleRequestLsit'
}





guidePackList() {
    return this.state.guidepack.map(currentguidepack => {
        return <GuidePack guidepack={currentguidepack}  key={currentguidepack._id} />;
    })
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
                  
                    <td className='flex justify-center px-6 py-4 '>
                        {
                            <div class="">
                                <button className='inline-flex items-center px-4 py-2 mr-1 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-blue-200' >

                                    <div class=" grid grid-cols-2 gap-1">
                                        <div class="">
                                            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round " stroke-width="2" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                            </svg>
                                        </div>
                                        <div class="">
                                            Edit
                                        </div>
                                    </div>

                                </button>
                            </div>
                        }
                        {"  "}
                        {
                            <div class="">
                                <button className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-200'
                                    onClick={() => {
                                        //Delete the selected record
                                        axios.delete('http://localhost:5000/employee/' + currentguidepack._id).then(response => {
                                            console.log(response.status)
                                            // this.refreshTable();

                                            if (response.status == 200) {
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Successful',
                                                    text: "Employee has been deleted!!",
                                                    background: '#fff',
                                                    confirmButtonColor: '#0a5bf2',
                                                    iconColor: '#60e004'
                                                })


                                            }

                                            else {
                                                Swal.fire({
                                                    icon: 'Unsuccess',
                                                    title: 'Unsuccessfull',
                                                    text: "Employee has not been deleted!!",
                                                    background: '#fff',
                                                    confirmButtonColor: '#eb220c',
                                                    iconColor: '#60e004'
                                                })
                                            }

                                            this.refreshList();
                                        })
                                    }}>
                                    <div class=" grid grid-cols-2 gap-1">
                                        <div class="">
                                            <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                        <div class="">
                                            Delete
                                        </div>
                                    </div>
                                </button>
                            </div>
                        }
                    </td>
                </tr>
            );
        }
    });
}



    exportScheduleRequest = () => {
        console.log( "Export PDF" )


        const unit = "pt";
        const size = "A3"; 
        const orientation = "landscape"; 
        const marginLeft = 40;
        const doc = new jsPDF( orientation, unit, size );

        const title = "Schedule Request List Report ";
        const headers = [["Schedule ID","Employee ID","Date","Starting Time","Ending Time","Changing Employee ID", "Changing Date","Changing Starting Time", "Changing End Time", "Status"]];

        const sr = this.state.schedule.map(
            Schedule=>[
                Schedule.scheduleID,
                Schedule.empID,
                Schedule.date,
                Schedule.sTime,
                Schedule.eTime,
                Schedule.changingEmpID,
                Schedule.changingDate,
                Schedule.changingsTime,
                Schedule.changingeTime,
                Schedule.status
            ]
        );

        let content = {
            startY: 50,
            head: headers,
            body:sr
        };
        doc.setFontSize( 20 );
        doc.text( title, marginLeft, 40 );
        require('jspdf-autotable');
        doc.autoTable( content );
        doc.save( "Schedule Request-list.pdf" )
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

