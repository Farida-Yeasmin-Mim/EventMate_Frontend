import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'plannerName', headerName: 'Planner Name', width: 130 },
    { field: 'serviceName', headerName: 'Service Name', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    
];

const rows = [
    { id: 1, plannerName: 'Farida', serviceName: 'Wedding', date: '3 jun,2022' },
    { id: 2, plannerName: 'Yeasmin', serviceName: 'Birthday', date: '5 jul,2022' },
    { id: 3, plannerName: 'Bushra', serviceName: 'Proposal', date: '9 sep,2022' },
    { id: 4, plannerName: 'Kaniz', serviceName: 'Event', date: '25 Nov,2022' },
    { id: 5, plannerName: 'Mahir', serviceName: 'Wedding', date: '14 Dec,2022' },
    { id: 6, plannerName: 'Farida', serviceName: null, date: '3 jun,2022'},
    { id: 7, plannerName: 'Farida', serviceName: 'Birthday', date: '3 jun,2022' },
    { id: 8, plannerName: 'Farida', serviceName: 'Holud', date: '3 jun,2022' },
];

export default function Transaction() {
    return (
        <div>
            <div className="container">
                <Sidebar />
                <div style={{ height: 400, width: '100%' }}>
                    <h1>Transaction List</h1><br/>
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
