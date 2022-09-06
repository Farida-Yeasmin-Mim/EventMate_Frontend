import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'serviceName', headerName: 'Service Name', width: 130 },
    { field: 'buildTime', headerName: 'Build Time', width: 130 },
    { field: 'placement', headerName: 'Placement', width: 130 },
    { field: 'space', headerName: 'Required Space', width: 130 },
    { field: 'colour', headerName: 'Colour', width: 130 },
    { field: 'customization', headerName: 'Customization', width: 130 },
    { field: 'price', headerName: 'Price(৳)', type: 'number', width: 110 },
    { field: 'check', headerName: 'Check', width: 130 },
    
];

const rows = [
    { id: 1, serviceName: 'Wedding', buildTime: '5 hrs', placement: 'Outdoor', space: '90 sqr/ft', colour: 'Red', customization: 'Possible', price: 35000, check: 'Display'},
    { id: 2, serviceName: 'Birthday', buildTime: '2 hrs', placement: 'Indoor', space: '30 sqr/ft', colour: 'Blue', customization: 'Possible', price: 18342, check: 'Display' },
    { id: 3, serviceName: 'Proposal', buildTime: '1 hrs', placement: 'Indoor', space: '40 sqr/ft', colour: 'White', customization: 'Not Possible', price: 49505, check: 'Display' },
    { id: 4, serviceName: 'Event', buildTime: '3 hrs', placement: 'Outdoor', space: '50 sqr/ft', colour: 'Black', customization: 'Possible', price: 16390, check: 'Display' },
    { id: 5, serviceName: 'Wedding', buildTime: '7 hrs', placement: 'Outdoor', space: '60 sqr/ft', colour: 'Golden', customization: 'Not Possible', price: 34700, check: 'Display' },
    { id: 6, serviceName: null, buildTime: '5 hrs', placement: 'Indoor', space: '60 sqr/ft', colour: 'Red', customization: 'Possible', price: 15080, check: 'Display'},
    { id: 7, serviceName: 'Birthday', buildTime: '5 hrs', placement: 'Outdoor', space: '60 sqr/ft', colour: 'Red', customization: 'Possible', price: 4440, check: 'Display' },
    { id: 8, serviceName: 'Holud', buildTime: '5 hrs', placement: 'Outdoor', space: '60 sqr/ft', colour: 'Red', customization: 'Possible', price: 5680, check: 'Display' },
    { id: 9, serviceName: 'Party', buildTime: '5 hrs', placement: 'Outdoor', space: '60 sqr/ft', colour: 'Red', customization: 'Possible', price: 6587, check: 'Display' },
];

export default function ProductList() {
    return (
        <div>
            <div className="container">
                <Sidebar />
                <div style={{ height: 400, width: '100%' }}>
                    <h1>Service List</h1><br/>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>


            </div>
        </div>



    );
}
