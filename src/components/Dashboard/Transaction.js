import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'serviceName', headerName: 'Service Name', width: 130 },
    { field: 'price', headerName: 'Price(৳)', type: 'number', width: 110 },
    { field: 'check', headerName: 'Check', width: 130 },
    
];

const rows = [
    { id: 1, serviceName: 'Wedding', price: 35000, check: 'Display'},
    { id: 2, serviceName: 'Birthday', price: 18342, check: 'Display' },
    { id: 3, serviceName: 'Proposal', price: 49505, check: 'Display' },
    { id: 4, serviceName: 'Event', price: 16390, check: 'Display' },
    { id: 5, serviceName: 'Wedding', price: 34700, check: 'Display' },
    { id: 6, serviceName: null, price: 15080, check: 'Display'},
    { id: 7, serviceName: 'Birthday', price: 4440, check: 'Display' },
    { id: 8, serviceName: 'Holud', price: 5680, check: 'Display' },
    { id: 9, serviceName: 'Party', price: 6587, check: 'Display' },
];

export default function Transaction() {
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
