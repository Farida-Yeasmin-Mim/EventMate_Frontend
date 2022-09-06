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
    { field: 'rating', headerName: 'Rating', width: 110 },
    { field: 'review', headerName: 'Review', width: 170 },
    { field: 'check', headerName: 'Check', width: 130 },
    
];

const rows = [
    { id: 1, plannerName: 'Farida', serviceName: 'Wedding', eventDate: '3 Jun,2022', eventLocation: 'Mirpur', customization: 'Golden Theme', rating: '4.9', review: 'Gorgeous', check: 'Display'},
    { id: 2, plannerName: 'Yeasmin', serviceName: 'Birthday', eventDate: '5 Jul,2022', eventLocation: 'Dhanmondi', customization: '2 layer cake', rating: '3.5', review: 'Nice', check: 'Display' },
    { id: 3, plannerName: 'Mim', serviceName: 'Proposal', eventDate: '1 Nov,2022', eventLocation: 'Gulshan', customization: 'Red Theme', rating: '5', review: 'Very nice', check: 'Display' },
    { id: 4, plannerName: 'Mahir', serviceName: 'Event', eventDate: '30 Dec,2022', eventLocation: 'Banani', customization: 'B&W Theme', rating: '4.7', review: 'Marvellous', check: 'Display' },
    { id: 5, plannerName: 'Sadman', serviceName: 'Wedding', eventDate: '9 Sep,2022', eventLocation: 'Khilgaon', customization: 'Gorgeous', rating: '5', review: 'Liked it', check: 'Display' },
    { id: 6, plannerName: 'Momtahina', serviceName: null, eventDate: '8 Jun,2022', eventLocation: 'Mirpur', customization: null, rating: '4.5', review: 'Need to improve more', check: 'Display'},
    { id: 7, plannerName: 'Kaniz', serviceName: 'Birthday', eventDate: '3 Jun,2022', eventLocation: 'Gulshan', customization: 'Clean', rating: '4.3', review: 'Gorgeous', check: 'Display' },
    { id: 8, plannerName: 'Fatema', serviceName: 'Holud', eventDate: '3 Jun,2022', eventLocation: 'Dhanmondi', customization: 'Red Theme', rating: '5', review: 'Perfect', check: 'Display' },
    { id: 9, plannerName: 'Bushra', serviceName: 'Party', eventDate: '3 Jun,2022', eventLocation: 'Gulshan', customization: 'Yellow Theme', rating: '4', review: 'Gorgeous', check: 'Display' },
];

export default function PreviousOrder() {
    return (
        <div>
            <div className="container">
                <Sidebar />
                <div style={{ height: 400, width: '100%' }}>
                    <h1>Previous Services</h1><br/>
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
