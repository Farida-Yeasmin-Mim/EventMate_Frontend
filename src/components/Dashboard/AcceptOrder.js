import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Sidebar from './Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'plannerName', headerName: 'Planner Name', width: 120 },
    { field: 'serviceName', headerName: 'Service Name', width: 120 },
    { field: 'eventDate', headerName: 'Event Date', width: 150 },
    { field: 'eventLocation', headerName: 'Event Location', width: 150 },
    { field: 'customization', headerName: 'Customization', width: 170 },
    { field: 'check', headerName: 'Check', width: 130 },
    
];

const rows = [
    { id: 1, plannerName: 'Farida', serviceName: 'Wedding', eventDate: '3 June,2022', eventLocation: 'Mirpur', customization: 'Golden Theme', check: 'Display'},
    { id: 2, plannerName: 'Yeasmin', serviceName: 'Birthday', eventDate: '5 July,2022', eventLocation: 'Dhanmondi', customization: '2 layer cake', check: 'Display' },
    { id: 3, plannerName: 'Mim', serviceName: 'Proposal', eventDate: '1 November,2022', eventLocation: 'Gulshan', customization: 'Red Theme', check: 'Display' },
    { id: 4, plannerName: 'Mahir', serviceName: 'Event', eventDate: '30 December,2022', eventLocation: 'Banani', customization: 'Black  & White Theme', check: 'Display' },
    { id: 5, plannerName: 'Sadman', serviceName: 'Wedding', eventDate: '9 September,2022', eventLocation: 'Khilgaon', customization: 'Gorgeous', check: 'Display' },
    { id: 6, plannerName: 'Momtahina', serviceName: null, eventDate: '8 June,2022', eventLocation: 'Mirpur', customization: null, check: 'Display'},
    { id: 7, plannerName: 'Kaniz', serviceName: 'Birthday', eventDate: '3 June,2022', eventLocation: 'Gulshan', customization: 'Clean', check: 'Display' },
    { id: 8, plannerName: 'Fatema', serviceName: 'Holud', eventDate: '3 June,2022', eventLocation: 'Dhanmondi', customization: 'Red Theme', check: 'Display' },
    { id: 9, plannerName: 'Bushra', serviceName: 'Party', eventDate: '3 June,2022', eventLocation: 'Gulshan', customization: 'Yellow Theme', check: 'Display' },
];

export default function AcceptOrder() {
    return (
        <div>
            <div className="container">
                <Sidebar />
                <div style={{ height: 400, width: '100%' }}>
                    <h1>Accept Service Orders</h1><br/>
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
