import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal, Card } from "react-bootstrap";
import { GuidePackDetails } from './guide-details.component';


const GuidePack = props => (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' onClick={() => { props.gotoGuidePackDetails(props.guidepack.guideName) }}>
        {/* <td>{props.employee._id}</td> */}
        <td className='px-6 py-4'>{props.guidepack.guideName}</td>
        <td className='px-6 py-4'>{props.guidepack.touristArea}</td>
        <td className='px-6 py-4'>{props.guidepack.langType}</td>
        <td className='px-6 py-4'>{props.guidepack.vehicleType}</td>
        <td className='px-6 py-4'>{props.guidepack.price}</td>
    </tr>
)

export class GuidePackList extends Component {

    constructor(props) {
        super(props);


        this.gotoGuidePackDetails = this.gotoGuidePackDetails.bind(this);

        this.state = {
            guidepack: [],
            searchGuidePack: "",
            show: false
        };
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


    componentDidMount() {
        this.refreshList();
    }

    gotoGuidePackDetails = (guideName) => {
        this.setState({
            guideName: guideName,
            show: true

        })
        console.log("LIst id is :" + guideName);
    }

    //Modal box
    closeModalBox = () => {
        this.setState({ show: false })
        this.refreshList();
    }

    guidePackList() {
        return this.state.guidepack.map(currentguidepack => {
            return <GuidePack guidepack={currentguidepack} gotoGuidePackDetails={this.gotoGuidePackDetails} key={currentguidepack.guideName} />;
        })
    }

    searchGuidePackList() {
        return this.state.guidepack.map((currentguidepack) => {
            if (
                this.state.searchGuidePack ===
                currentguidepack.touristArea
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
                                <table className=''>
                                    <tr>
                                        <th className='drop-shadow-md'>
                                            <h3>Guide Pack Details</h3>
                                        </th>
                                        <td className='flex justify-end gap-2'>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end gap-2">
                                                
                                               
                                            </div>
                                            <div class="flex justify-end sm:flex-row sm:text-left sm:justify-end">
                                                <input
                                                    className="form-control rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                                    type="text"
                                                    placeholder="Search by Employee ID"
                                                    aria-label="Search"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            searchGuidePack: e.target.value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className='relative grid content-start grid-cols-1 gap-4 overflow-x-auto shadow-md sm:rounded-lg'>
                                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400' >
                                    <thead className='p-5 text-xs text-gray-700 uppercase border bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>

                                        <tr>
                                            <th className="p-2 border-black tbhead ">Guide Name</th>
                                            <th className="p-2 tbhead">Tourist Area</th>
                                            <th className="p-2 tbhead">Language Type</th>
                                            <th className="p-2 tbhead">vehicle Type</th>
                                            <th className="p-2 tbhead">price</th>

                                            <th className="p-2 text-center tbhead">Actions</th>
                                        </tr>

                                    </thead>
                                    <tbody >
                                        {this.state.searchGuidePack == "" ? this.guidePackList() : this.searchGuidePackList()}
                                    </tbody>
                                </table>
                            </div>
                            <div class="">
                                <Modal show={this.state.show} onHide={this.closeModalBox} centered size={"xl"}>
                                    <Modal.Header className='px-5 pt-4 border-2 shadow-md bg-gray-50' closeButton>
                                        <div class="">
                                            <Modal.Title className='items-center' >
                                                <p className='font-semibold text-black uppercase '>
                                                    Edit Employee
                                                </p>
                                            </Modal.Title>
                                        </div>
                                    </Modal.Header >
                                    <Modal.Body className='px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50'>
                                        <GuidePackDetails guId={this.state.guideName} key={this.state.guideName} close={this.closeModalBox} />
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

